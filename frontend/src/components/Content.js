import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Content.css";

function Content() {
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
          <div key={index} className="image-card">
            <img src={image.url} alt={`Signed letter ${image.letter}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;
