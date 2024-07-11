import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Content.css";

function Content() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let response = await axios.get(
          "https://us-west1-cloud-signlanguage-leicht.cloudfunctions.net/asl-alphabet/random"
        );
        console.log("image url:", response.data.url);
        setImage(response.data.url);
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
        <img src={image} alt="a signed letter" />
      </div>
    </div>
  );
}

export default Content;
