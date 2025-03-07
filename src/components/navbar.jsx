import React from "react";
import { useState } from "react";

function Navbar() {
  let [mode, setMode] = useState("Dark Mode");
  return (
    <div className="flex justify-between py-6 px-15 border bg-white">
      <h2 className="text-2xl font-bold">Where in the world?</h2>
      <button onClick={() => setMode("Light Mode")}>
        <i class="fa-solid fa-moon"></i>
        &nbsp;&nbsp;
        {mode}
      </button>
    </div>
  );
}
export default Navbar;
