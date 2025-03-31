import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  let [mode, setMode] = useState("Dark Mode");
  return (
    <div className="flex justify-between py-6 px-15 shadow-md bg-white">
      <Link to="/">
        <h2 className="text-2xl font-bold">Where in the world?</h2>
      </Link>
      <button onClick={() => setMode("Light Mode")}>
        <i className="fa-solid fa-moon"></i>
        &nbsp;&nbsp;
        {mode}
      </button>
    </div>
  );
}
export default Navbar;
