import React, { useRef } from "react";
import "./Filter.css";

const Filter = ({ darkMode, setSearchTerm }) => {
  const searchRef = useRef(null);
  console.log('Dark Mode:', darkMode);
  return (
    <section
      className="filter"
      style={{
        backgroundColor: darkMode ? "#202D36" : "#fff",
        color: darkMode ? "#fff" : "#000",
        background: "none",
      }}
    >
      <form className="form-control">
        <input
          type="search"
          className="search"
          id="search"
          placeholder="Search for a country"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            backgroundColor: darkMode ? "#2b3945" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
        />
      </form>

      <div className="region-filter">
        <select
          name="select"
          id="select"
          style={{
            backgroundColor: darkMode ? "#2b3945" : "#fff",
            color: darkMode ? "#fff" : "#000",
          }}
          className="select"
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
