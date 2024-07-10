import "./App.css";
import { Helmet } from "react-helmet";
import ImageForm from "./components/ImageForm";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
        <Sidebar />
        <div id="main">
          <Navbar />
          {/* <ImageForm /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
