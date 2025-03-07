import React from "react";
import { useState } from "react";

function Options() {
  return (
    <>
      <div className="flex justify-between mx-15 my-10 ">
        <div className=" flex gap-4 items-centre px-5 py-3 border border-black border-solid w-2/6 bg-white">
          <i className="fa-solid fa-magnifying-glass text-lg py-1"></i>

          <input type="text" name="" id="" placeholder="Search for a country" />
        </div>
        <select>
          <option value="">Filter by Region</option>
          <option value="">Africa</option>
          <option value="">America</option>
          <option value="">Asia</option>
          <option value="">Europe</option>
        </select>
      </div>
    </>
  );
}
export default Options;
