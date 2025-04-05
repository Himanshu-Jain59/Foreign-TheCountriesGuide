import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function Country() {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  // console.log(search.split("=")[1]);

  const getData = async () => {
    let res = null;
    if (search) {
      res = await axios.get(
        `https://restcountries.com/v3.1/region/${search.split("=")[1]}`
      );
    } else {
      res = await axios.get("https://restcountries.com/v3.1/all");
    }
    const result = res.data;
    // console.log(result);
    setData(result);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      {data.map(function (elem) {
        return (
          <>
            <div
              key={elem.flag}
              className="flex border transition-transform duration-500 transform hover:scale-105 border-white w-fit rounded-md bg-white shadow-lg"
            >
              <div className="w-65">
                <Link to={`/detail/${elem.name.common}`}>
                  <img
                    src={elem.flags.png}
                    alt=""
                    className=" h-45 w-65 border border-white rounded-t-md "
                  />
                </Link>
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
