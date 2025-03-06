import React from "react";
import { useState } from "react";
import Country from "./country";

function Countries() {
  return (
    <div className="flex flex-wrap gap-15 mx-15 my-10">
      <Country />
      <Country />
      <Country />
      <Country />
      <Country />
    </div>
  );
}

export default Countries;
