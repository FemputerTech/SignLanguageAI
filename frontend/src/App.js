import "./App.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
// import ImageForm from "./components/ImageForm";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
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
            <Header />
            <Content />
            {/* <ImageForm /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
