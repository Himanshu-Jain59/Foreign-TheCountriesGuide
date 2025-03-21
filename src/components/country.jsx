import React, { useState, useEffect } from "react";
import axios from "axios";

function Country() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("https://restcountries.com/v3.1/all");
    const result = res.data;
    console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map(function (elem) {
        return (
          <>
            <div
              key={elem.flag}
              className="flex border border-white w-fit rounded-md bg-white shadow-lg"
            >
              <div className="w-65">
                <img
                  src={elem.flags.png}
                  alt=""
                  className=" h-45 w-65 border border-white rounded-md "
                />
                <div className="p-6">
                  <h2 className="font-bold text-lg mb-3">{elem.name.common}</h2>
                  <p>
                    <b className="font-semibold">Population: </b>
                    {elem.population}
                  </p>
                  <p>
                    <b className="font-semibold">Region: </b>
                    {elem.region}
                  </p>
                  <p>
                    <b className="font-semibold">Capital: </b>
                    {elem.capital}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
export default Country;
