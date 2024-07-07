from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
from PIL import Image
from io import BytesIO
import numpy as np
import uvicorn
import os

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # React frontend URL
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

VERSION = 1
PATH = os.path.join(os.path.dirname(__file__), "..", "saved_models", f"asl_{VERSION}.keras")
MODEL = tf.keras.models.load_model(PATH)
CLASS_NAMES = ['A', 'B', 'Blank', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'Space', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

# API GET endpoint
@app.get("/ping")
async def pring():
    return "It's aliiiiive!!"

def preprocess_image(image, target_size):
    if image.mode != "RGB":
        image = image.convert("RGB")
    
    processed_image = image.resize(target_size)
    
    return processed_image


# API POST endpoint
@app.post("/predict")
async def predict(file: UploadFile=File(...)):
    print("File received...")
    image = Image.open(BytesIO(await file.read()))
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


# Run the application
if __name__ == '__main__':
    uvicorn.run(app, host='localhost', port=8000)