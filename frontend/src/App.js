import "./App.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [selectedImageUrl, setSelectedImageUrl] = useState("");

  const handleImageClick = (imageUrl) => {
    console.log("handling the image:", imageUrl);
    setSelectedImageUrl(imageUrl);
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
        <div id="sidebar-wrapper">
          <Sidebar />
        </div>
        <div id="main">
          <Navbar />
          <div id="content-wrapper">
            <Header selectedImageUrl={selectedImageUrl} />
            <Content onImageClick={handleImageClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
