import React, { useState } from "react";

function ImageForm() {
  const title = "Sign Language";
  const [imageUrl, setImageUrl] = useState(null);

  // Function to handle image selection
  const handleImageSelection = (event) => {
    let reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  return (
    <div className="image-form">
      <h1>{title}</h1>
      <div className="image-container">
        <img
          className="selected-image"
          id="selected-image"
          src={imageUrl}
          alt="Selected"
        />
      </div>
      <input id="image-selector" type="file" onChange={handleImageSelection} />
      <button id="predict-button">Predict</button>
      <p>Prediction</p>
      <p>
        <span id="prediction"></span>
      </p>
      <p>Confidence</p>
      <p>
        <span id="confidence"></span>
      </p>
    </div>
  );
}

export default ImageForm;
