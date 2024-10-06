import React from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countries }) => {
  return (
    <div className="countries">
      {countries.map((country, index) => (
        <Country
          key={index}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital ? country.capital[0] : "No Capital"}
          flag={country.flags.png}
        />
      ))}
    </div>
  );
};

export default Countries;
