import React, { useState } from "react";
import axios from "axios";

function ImageForm() {
  const title = "Sign Language";
  const [selectedFile, setSelectedFile] = useState(null);
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  // Function to handle image selection
  const handleImageSelection = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    setSelectedFile(file);
    reader.readAsDataURL(file);
  };

  // Function to handle predict button
  const sendImage = async () => {
    let formData = new FormData();
    formData.append("file", selectedFile);

    let response = await axios({
      method: "post",
      url: "http://localhost:8000/predict",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Response:", response.data);
    setPrediction(response.data.class);
    setConfidence(response.data.confidence);
  };
  return (
    <div className="image-form">
      <h1>{title}</h1>
      <div className="image-container">
        <img
          className="selected-image"
          id="selected-image"
          src={image}
          alt="Selected"
        />
      </div>
      <input id="image-selector" type="file" onChange={handleImageSelection} />
      <button id="predict-button" onClick={sendImage}>
        Predict
      </button>
      <p>Prediction</p>
      <p>
        <span id="prediction">{prediction}</span>
      </p>
      <p>Confidence</p>
      <p>
        <span id="confidence">{confidence}</span>
      </p>
    </div>
  );
}

export default ImageForm;
