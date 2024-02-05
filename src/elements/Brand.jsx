import React, { useState, useEffect } from "react";
import { baseURL } from "../httpService";

const Brand = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    if (partners.length === 0) {
      getPartners();
    }
  }, []);

  const getPartners = () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    fetch(`${baseURL}partners`, { method: "GET", headers })
      .then((response) => response.json())
      .then((responseJson) => {
        setPartners(responseJson.partners);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <ul className="brand-style-2">
        {partners.length > 0
          ? partners.map((item, i) => (
              <li key={i}>
                <a href={item.url} target="_blank">
                  <img src={`${baseURL}${item.logo}`} alt={item.name} />
                </a>
              </li>
            ))
          : null}
      </ul>
    </React.Fragment>
  );
};
export default Brand;
