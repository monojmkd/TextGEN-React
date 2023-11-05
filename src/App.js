import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextForm from "./components/TextForm";


function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(26,26,28)";
      document.body.style.color = "white";
      document.title = "TextGEN - DarkMode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(26,26,28)";
      document.title = "TextGEN - LightMode";
    }
  };
  return (
    <>

      <Navbar title="TextGEN" mode={mode} toggleMode={toggleMode} aboutText={'About'}/>
      <div className="container my=3">
      <TextForm mode={mode} heading="Enter text to change case :" />
      </div>

    </>
  );
}

export default App;
