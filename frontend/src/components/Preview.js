import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Preview.css";

function Preview({ selectedImageUrl, setSelectedImageUrl, selectedFavorite }) {
  const [prediction, setPrediction] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [isThinking, setIsThinking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (selectedImageUrl) {
      setIsVisible(false); // Reset isVisible to false when a new image URL is set
    }
  }, [selectedImageUrl]);

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
    setIsVisible(false);
    if (!selectedImageUrl) {
      alert("Please select an image before pressing the predict button.");
      return;
    }
    setIsThinking(true);
    try {
      let response = await axios.post(
        `http://localhost:8000/predict?image_url=${encodeURIComponent(
          selectedImageUrl
        )}`
      );
      console.log("Response:", response.data);
      setPrediction(response.data.class);
      setConfidence(response.data.confidence);
      setTimeout(() => {
        setIsVisible(true);
        setIsThinking(false);
      }, 1000);
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
      <div id="intro-section">
        <div id="title-section">
          <h1>
            Empowering Communication with{" "}
            <span
              style={{
                color: "var(--secondary)",
                fontSize: "40px",
                fontWeight: "700",
              }}
            >
              AI
            </span>
          </h1>
          <p>Choose an image and witness AI accurately predict ASL gestures.</p>
          <button
            id="predict-button"
            onClick={() => {
              sendImage();
            }}
          >
            Predict
          </button>
        </div>
        {isThinking && <p>Thinking...</p>}
        {isVisible && (
          <div id="prediction-section">
            <p>
              {" "}
              I am{" "}
              <span
                id="confidence"
                style={{
                  fontWeight: "600",
                }}
              >
                {(confidence * 100).toFixed(2)}%
              </span>{" "}
              confident that this is the letter{" "}
              <span
                id="prediction"
                style={{
                  fontWeight: "600",
                }}
              >
                {prediction}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Preview;
