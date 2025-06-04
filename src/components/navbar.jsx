import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [mode, setMode] = useState("Dark Mode");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="flex justify-between py-6 px-15 shadow-md  bg-white dark:bg-dark-el dark:text-white ">
      <Link to="/">
        <h2 className="text-2xl font-bold">Where in the world?</h2>
      </Link>
      <button
        onClick={() => {
          setMode(mode === "Dark Mode" ? "Light Mode" : "Dark Mode");
          toggleTheme();
        }}
        className="font-bold"
      >
        <i className="fa-solid fa-moon"></i>
        &nbsp;&nbsp;
        {mode}
      </button>
    </div>
  );
}
export default Navbar;
