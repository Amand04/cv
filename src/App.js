import "./App.css";
import background from "./images/pc.jpg";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Projects";
import Profil from "./pages/Profil";
import ButtonAll from "./components/button/ButtonAll";
import ProjectFitness from "./components/text/ProjectFitness";
import ProjectSpy from "./components/text/ProjectSpy";
import ProjectCharlesCantin from "./components/text/ProjectCharlesCantin";
import ProjectBeer from "./components/text/ProjectBeer";

function App() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "2000px",
          backgroundPosition: "top",
          width: "100%",
        }}
      >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/projects" element={<ButtonAll />} />
            <Route path="/fitness" element={<ProjectFitness />} />
            <Route path="/spy" element={<ProjectSpy />} />
            <Route path="/charlescantin" element={<ProjectCharlesCantin />} />
            <Route path="/beer" element={<ProjectBeer />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
