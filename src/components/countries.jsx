import React, { useState } from "react";
import Country from "./Country";

function Countries() {
  return (
    <div className="flex flex-wrap gap-15 mx-15 my-10">
      <Country />
    </div>
  );
}

export default Countries;
