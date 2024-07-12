import "./App.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Content from "./components/Content";

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedFavorite, setSelectedFavorite] = useState("");

  const handleImageClick = (imageUrl) => {
    console.log("handling the image:", imageUrl);
    setSelectedImageUrl(imageUrl);
  };

  const handleLetterClick = (letter) => {
    console.log("handling the letter:", letter);
    setSelectedLetter(letter);
  };

  const handleFavoriteClick = (fav) => {
    console.log("handling the favorite:", fav);
    setSelectedFavorite(fav);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>SignWithMe</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Sign Language AI App" />
        </Helmet>
      </header>
      <div id="container">
        <Sidebar
          onLetterClick={handleLetterClick}
          onFavoriteClick={handleFavoriteClick}
        />
        <div id="main-content">
          <Navbar />
          <Preview
            selectedImageUrl={selectedImageUrl}
            setSelectedImageUrl={setSelectedImageUrl}
            selectedFavorite={selectedFavorite}
          />
          <Content
            onImageClick={handleImageClick}
            selectedLetter={selectedLetter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
