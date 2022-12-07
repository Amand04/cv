import "./App.css";
import background from "./images/cable.jpg";
import Header from "./components/Header";
import ButtonPresentation from "./components/button/ButtonPresentation";
import ButtonFormation from "./components/button/ButtonFormation";
import ButtonExperience from "./components/button/ButtonExpérience";
import ButtonProject from "./components/button/ButtonProject";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "1900px",

        width: "100%",
      }}
    >
      <Header />
      <ButtonPresentation />
      <ButtonFormation />
      <ButtonExperience />
      <ButtonProject />
      <Footer />
    </div>
  );
}

export default App;
