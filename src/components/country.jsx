import React from "react";
import { useState } from "react";

function Country() {
  return (
    <>
      <div className="flex border border-white w-fit rounded-md bg-white">
        <div>
          <img
            src="https://flagcdn.com/w320/in.png"
            alt=""
            className="w-65 border border-white rounded-md"
          />
          <div className="p-6">
            <h2 className="font-bold text-lg mb-3">Afganistan</h2>
            <p>
              <b className="font-semibold">Population: </b>40218234
            </p>
            <p>
              <b className="font-semibold">Region: </b>Asia
            </p>
            <p>
              <b className="font-semibold">Capital: </b>Kabul
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Country;
