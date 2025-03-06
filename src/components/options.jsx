import React from "react";
import { useState } from "react";

function Options() {
  return (
    <>
      <div className="flex justify-between mx-15 my-5">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a country"
          className="px-5 py-3 border border-black border-solid w-2/6"
        />
        <button>Filter</button>
      </div>
    </>
  );
}
export default Options;
