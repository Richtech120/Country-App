import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filter from "../components/Filter";
import Countries from "../components/Countries";
import axios from "axios";
import Country from "../components/Country";

const Main = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const getCountryData = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(response.data);
    } catch (error) {
      console.log("Error fetching countries data!", error);
    }
  };

  useEffect(() => {
    getCountryData();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/> 
      <Filter darkMode={darkMode} setSearchTerm={setSearchTerm} />
      <Countries countries={filteredCountries} darkMode={darkMode} />
      <Country darkMode={darkMode} setDarkMode={setDarkMode}/>
    </>
  );
};

export default Main;
