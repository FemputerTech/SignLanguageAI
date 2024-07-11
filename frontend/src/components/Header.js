import React, { useState } from "react";
import axios from "axios";
import "../styles/Header.css";

function Header({ selectedImageUrl }) {
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  const sendImage = async () => {
    try {
      let response = await axios.post(
        `http://localhost:8000/predict?image_url=${encodeURIComponent(
          selectedImageUrl
        )}`
      );
      console.log("Response:", response.data);
      setPrediction(response.data.class);
      setConfidence(response.data.confidence);
    } catch (error) {
      console.error("Error sending image for prediction:", error);
    }
  };
  return (
    <div id="header">
      <img
        className="selected-image"
        src={selectedImageUrl}
        alt="Selected asl letter"
      />
      <button id="predict-button" onClick={() => sendImage()}>
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

export default Header;
