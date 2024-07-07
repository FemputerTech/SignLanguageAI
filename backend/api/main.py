from fastapi import FastAPI, UploadFile, File
import tensorflow as tf
from PIL import Image
from io import BytesIO
import numpy as np
import uvicorn

app = FastAPI()

VERSION = 1
PATH = f"./saved_models/asl_{VERSION}.keras"
MODEL = tf.keras.models.load_model()
CLASS_NAMES = ['A', 'B', 'Blank', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'Space', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

# API GET endpoint
@app.get("/ping")
async def pring():
    return "It's aliiiiive!!"


# API POST endpoint
@app.post("/predict")
async def predict(file: UploadFile=File(...)):
    image = np.array(Image.open(BytesIO(await file.read())))
    img_batch = np.expand_dims(image, 0)
    
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