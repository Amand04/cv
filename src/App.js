import "./App.css";
import Header from "./components/Header";
import ButtonPresentation from "./components/button/ButtonPresentation";
import Heart from "./components/pixelUI/Heart";
import ButtonFormation from "./components/button/ButtonFormation";
import ButtonExperience from "./components/button/ButtonExpérience";
import ButtonProject from "./components/button/ButtonProject";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Heart />
      <ButtonPresentation />
      <ButtonFormation />
      <ButtonExperience />
      <ButtonProject />
      <Footer />
    </div>
  );
}

export default App;
