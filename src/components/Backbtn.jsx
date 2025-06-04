import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Backbtn() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-15 py-10  dark:bg-dark-bg dark:text-white ">
      <button
        className="shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0px_2px_16px_0px_rgba(14,30,37,0.32)] py-2 px-7 rounded font-semibold text-[#858585] cursor-pointer dark:bg-dark-el dark:text-white"
        onClick={() => navigate(-1)}
      >
        <i className="fa-solid fa-arrow-left"></i>
        &nbsp;&nbsp; Back
      </button>
    </div>
  );
}
export default Backbtn;
