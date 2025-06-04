import React, { useEffect, useState } from "react";

import Backbtn from "./Backbtn";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function Detail() {
  const loc = useLocation();
  const country = loc.pathname.split("/")[2];
  // console.log(country.length);
  const [data, setData] = useState([]);
  const [curr, setCurr] = useState([]);
  const [lang, setLang] = useState([]);
  const [bor, setBor] = useState(null);

  const getDetail = async () => {
    let res = null;
    if (country.length === 3) {
      res = await axios.get(`https://restcountries.com/v3.1/alpha/${country}`);
    } else {
      res = await axios.get(
        `https://restcountries.com/v3.1/name/${country}?fullText=true`
      );
    }
    const result = res.data;
    // console.log(result);
    // console.log(result[0].currencies);
    // console.log(result[0].languages);

    setData(result);
    if (result[0].borders) {
      setBor(result[0].borders);
    }
    setCurr(result[0].currencies);
    setLang(result[0].languages);
  };
  useEffect(() => {
    getDetail();
  }, [country]);
  return (
    <div className="h-132 bg-[#fafafa] dark:bg-dark-bg dark:text-white">
      <Backbtn />
      <div className="py-6 mx-15 flex ">
        {data.map(function (elem) {
          return (
            <>
              <div className="w-[50%]">
                <img className="w-120 h-80" src={elem.flags.png} alt="" />
              </div>

              <div className="w-[50%] py-8">
                <h2 className="font-stretch-normal font-extrabold text-3xl">
                  {elem.name.common}
                </h2>
                <div className="w-full flex gap-40 mt-5 justify-start">
                  <div className="flex flex-col gap-2">
                    <p>
                      <b>Native Name:</b>&nbsp;
                      {Object.values(elem.name.nativeName)[0].common}
                    </p>
                    <p>
                      <b>Population:</b>&nbsp;
                      {elem.population}
                    </p>
                    <p>
                      <b>Region:</b>&nbsp;{elem.region || "N/A"}
                    </p>
                    <p>
                      <b>Sub Region:</b>&nbsp;{elem.subregion || "N/A"}
                    </p>
                    <p>
                      <b>Capital:</b>&nbsp;{elem.capital || "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-wrap flex-col gap-2">
                    <p>
                      <b>Top Level Domain:</b>&nbsp;{elem.tld || "N/A"}
                    </p>

                    <div>
                      <b>Currencies:</b> &nbsp;
                      {Object.values(curr).map((value, index) => (
                        <div className="inline" key={index}>
                          {value.name}
                        </div>
                      ))}
                    </div>

                    <div className="felx flex-wrap overflow-hidden">
                      <b>Language:</b>&nbsp;
                      {Object.values(lang).map((value, index) => (
                        <div
                          className="inline mr-1 overflow-hidden  "
                          key={index}
                        >
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=" mt-10 flex gap-5 flex-wrap">
                  <b>Border Countries:</b>
                  {(!bor && "N/A") ||
                    Object.values(bor).map((value, index) => (
                      <Link to={`/detail/${value}`}>
                        <button
                          className="border-2 px-3 cursor-pointer  "
                          key={index}
                        >
                          {value}
                        </button>
                      </Link>
                    ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Detail;
