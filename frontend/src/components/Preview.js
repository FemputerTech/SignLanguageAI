import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Preview.css";

function Preview({ selectedImageUrl, setSelectedImageUrl, selectedFavorite }) {
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (selectedFavorite) {
        try {
          let response = await axios.get(
            `https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/${selectedFavorite}`
          );
          setSelectedImageUrl(response.data.url);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      }
    };
    fetchImage();
  }, [selectedFavorite, setSelectedImageUrl]);

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
    <div id="preview">
      <img
        className="selected-image"
        src={selectedImageUrl}
        alt="Selected asl letter"
      />
      <div id="prediction-section">
        <button
          className="nunito-sans-semibold"
          id="predict-button"
          onClick={() => sendImage()}
        >
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
    </div>
  );
}

export default Preview;
