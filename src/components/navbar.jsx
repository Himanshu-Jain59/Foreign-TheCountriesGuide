import React from "react";
import { useState } from "react";

function Navbar() {
  let [mode, setMode] = useState("Dark Mode");
  return (
    <>
      <div className="flex justify-between my-6 mx-15">
        <h2 className="text-2xl font-bold">Where in the world?</h2>
        <button onClick={() => setMode("Light Mode")}>{mode}</button>
      </div>
    </>
  );
}
export default Navbar;
