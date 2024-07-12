import React, { useState, useEffect } from "react";
// import { saveAs } from "file-saver";
import axios from "axios";
import "../styles/Content.css";

function Content({ onImageClick, selectedLetter }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      console.log("Letter:", selectedLetter);
      if (selectedLetter) {
        try {
          let response = await axios.get(
            `https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/${selectedLetter}`
          );
          setImages(response.data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      } else {
        try {
          let response = await axios.get(
            "https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/randoms"
          );
          setImages(response.data);
        } catch (error) {
          console.error("Error fetching images:", error);
        }
      }
    };
    fetchImages();
  }, [selectedLetter]);

  // Passing the imageURL to the parent component
  const handleImageClick = (imageUrl) => {
    if (onImageClick) {
      onImageClick(imageUrl);
    }
  };

  // const downloadImage = async (imageUrl, filename = "tmp_image.png") => {
  //   try {
  //     const response = await axios.get(
  //       `https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/download-image?image_url=${encodeURIComponent(
  //         imageUrl
  //       )}`,
  //       {
  //         responseType: "blob", // Important: responseType as blob
  //       }
  //     );

  //     if (!response.data) {
  //       throw new Error(`Empty response received`);
  //     }

  //     saveAs(response.data, filename);
  //   } catch (error) {
  //     console.error("Error downloading image:", error);
  //   }
  // };

  return (
    <div id="content">
      <h1 id="content-title">Content</h1>
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
              alt={`Signed letter ${image.letter}`}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

export default Content;
