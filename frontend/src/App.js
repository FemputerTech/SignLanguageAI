import "./App.css";
import { Helmet } from "react-helmet";
import ImageForm from "./components/ImageForm";

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
      <div className="home-section">
        <ImageForm />
      </div>
    </div>
  );
}

export default App;
