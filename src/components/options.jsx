import React from "react";
import { useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();
  const handleRegionChange = (e) => {
    e.preventDefault();

    navigate(`/?region=${e.target.value}`);

    // console.log("Selected Region:", e.target.value);
  };
  return (
    <>
      <div className="flex justify-between mx-15 mt-1 pt-7 ">
        <div className=" flex gap-4 items-centre px-7 py-3 rounded-lg w-2/5 bg-white shadow-md">
          <i className="fa-solid fa-magnifying-glass text-[#858585] text-lg py-1"></i>

          <input
            type="text"
            name=""
            id=""
            placeholder="Search for a country..."
            className="outline-0 w-full"
          />
        </div>
        <select
          className="block w-40 p-2.5 shadow-md rounded-lg bg-white text-gray-900 focus:outline-none mr-5"
          onChange={handleRegionChange}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </>
  );
}
export default Options;
