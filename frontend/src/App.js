import "./App.css";
import { Helmet } from "react-helmet";
import ImageForm from "./components/ImageForm";
import Sidebar from "./components/Sidebar";

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
      <Sidebar />
      <ImageForm />
    </div>
  );
}

export default App;
