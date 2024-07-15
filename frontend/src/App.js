import "./App.css";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Preview from "./components/Preview";
import Content from "./components/Content";

function App() {
  const [mode, setMode] = useState("light");
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedFavorite, setSelectedFavorite] = useState("");

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

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

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

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
          mode={mode}
        />
        <div id="main-content">
          <Navbar mode={mode} toggleMode={toggleMode} />
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
