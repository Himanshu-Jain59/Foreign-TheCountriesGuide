import { useState } from "react";
import Navbar from "./components/navbar";
import Options from "./components/options";
import Countries from "./components/countries";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Options />
        <Countries />
      </div>
    </>
  );
}

export default App;
