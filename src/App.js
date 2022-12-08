import "./App.css";
import background from "./images/cable.jpg";
import Header from "./components/Header";
import ButtonFormation from "./components/button/ButtonFormation";
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
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <Header />
      <div className="div_button">
        <ButtonProject />
        <ButtonFormation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
