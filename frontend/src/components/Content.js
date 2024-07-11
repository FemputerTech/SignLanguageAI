import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
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

  const sendImage = async (imageUrl) => {
    try {
      let response = await axios.post(
        `http://localhost:8000/predict?image_url=${encodeURIComponent(
          imageUrl
        )}`
        // Alternatively, you can send it in the request body:
        // { image_url: imageUrl }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error sending image for prediction:", error);
    }
  };

  return (
    <div id="content">
      <h1 id="content-title">Content</h1>
      <div className="card-container">
        {images.map((image, index) => (
          <article
            key={index}
            className="card"
            onClick={() => sendImage(image.url)}
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
