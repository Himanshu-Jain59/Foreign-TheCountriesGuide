import React from "react";
import { useState } from "react";

function Backbtn() {
  return (
    <div className="flex justify-between mx-15 my-10 ">
      <button className="shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),_0px_2px_16px_0px_rgba(14,30,37,0.32)] py-2 px-7 rounded font-semibold text-[#858585]">
        <i className="fa-solid fa-arrow-left"></i>
        &nbsp;&nbsp; Back
      </button>
    </div>
  );
}
export default Backbtn;
