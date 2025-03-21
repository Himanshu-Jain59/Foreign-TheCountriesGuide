import React, { useState } from "react";
import Navbar from "./navbar";
import Backbtn from "./Backbtn";

function Detail() {
  return (
    <>
      <Navbar />
      <Backbtn />
      <div className="py-6 mx-15 flex ">
        <div className="w-[50%]">
          <img
            className="w-120 h-80"
            src="https://flagcdn.com/w320/be.png"
            alt=""
          />
        </div>
        <div className="w-[50%] py-8">
          <h2 className="font-stretch-normal font-extrabold text-3xl">
            Brasil
          </h2>
          <div className="w-full flex gap-40 mt-5 justify-start">
            <div className="flex flex-col gap-2">
              <p>
                <b>Native Name:</b>
              </p>
              <p>
                <b>Population:</b>
              </p>
              <p>
                <b>Region:</b>
              </p>
              <p>
                <b>Sub Region:</b>
              </p>
              <p>
                <b>Capital:</b>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>
                <b>Top Level Domain:</b>
              </p>
              <p>
                <b>Currencies:</b>
              </p>
              <p>
                <b>Languages:</b>
              </p>
            </div>
          </div>
          <div className=" mt-10 flex gap-10">
            <b>Border Countries:</b>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
