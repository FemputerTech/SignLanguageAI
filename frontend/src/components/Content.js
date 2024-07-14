import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Content.css";

function Content({ onImageClick, selectedLetter }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let response;
      try {
        if (selectedLetter) {
          response = await axios.get(
            `https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/${selectedLetter}`
          );
        } else {
          response = await axios.get(
            "https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/randoms"
          );
        }
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, [selectedLetter]);

  // Passing the imageURL to the parent component
  const handleImageClick = (imageUrl) => {
    if (onImageClick) {
      onImageClick(imageUrl);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="content">
      <div className="card-container">
        {images.map((image, index) => (
          <article
            key={index}
            className="card"
            onClick={() => handleImageClick(image.url)}
          >
            <img
              className="card-image"
              src={image.url}
              alt={`Signed letter for ${image.letter} number ${index}`}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Content;
