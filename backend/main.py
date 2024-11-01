from fastapi import FastAPI, Query, HTTPException, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from PIL import Image
from io import BytesIO
import numpy as np
import uvicorn
import requests
import os

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # Local React frontend URL
    "https://signai-rqc3nken5a-uw.a.run.app" # Deployed React frontend URL
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

VERSION = 1
PATH = os.path.join(os.path.dirname(__file__), "training/saved_models", f"asl_{VERSION}.keras")
MODEL = tf.keras.models.load_model(PATH)
CLASS_NAMES = ['A', 'B', 'Blank', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'Space', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

# API GET endpoint
@app.get("/")
async def index():
    return {"details":"It's aliiiiive!!"}

def preprocess_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    
    processed_image = image.resize(target_size)
    
    return processed_image

# Function to fetch image from URL
def fetch_image_from_url(image_url):
    try:
        response = requests.get(image_url)
        response.raise_for_status()  # Raise error for non-successful status codes
        image = Image.open(BytesIO(response.content))
        return image
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Failed to fetch image from URL: {str(e)}")


# API POST endpoint
@app.post("/predict")
async def predict(image_url: str):
    print("URL received:", image_url)
    # Fetch image from URL
    image = fetch_image_from_url(image_url)
    
    # process the image
    processed_image = preprocess_image(image, target_size=(256, 256))
    processed_image = np.array(processed_image)
    img_batch = np.expand_dims(processed_image, 0)
    
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = float(np.max(predictions[0]))

    return {
        'class': predicted_class,
        'confidence': confidence
    }

# async def predict(file: UploadFile=File(...)):
#     print("File received...")
#     image = Image.open(BytesIO(await file.read()))
#     processed_image = preprocess_image(image, target_size=(256, 256))
#     processed_image = np.array(processed_image)
#     img_batch = np.expand_dims(processed_image, 0)
    
#     predictions = MODEL.predict(img_batch)

#     predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
#     confidence = float(np.max(predictions[0]))

#     return {
#         'class': predicted_class,
#         'confidence': confidence
#     }


# Run the application
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)