import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Content.css";

function Content({ onImageSelection }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let response = await axios.get(
          "https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/randoms"
        );
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div id="content">
      <h1 id="content-title">Content</h1>
      <div className="card-container">
        {images.map((image, index) => (
          <article
            key={index}
            className="card"
            onClick={() => onImageSelection(image.url)}
          >
            <img
              className="card-image"
              src={image.url}
              alt={`Signed letter ${image.letter}`}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Content;
