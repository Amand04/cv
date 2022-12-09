import "./App.css";
import background from "./images/cable.jpg";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Profil from "./pages/Profil";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "1900px",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
