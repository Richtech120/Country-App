
import React, { useRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Header = ({ darkMode, setDarkMode }) => {
  const headerRef = useRef(null);

  const toggleDarkMode = () => {

    setDarkMode(!darkMode);

    document.body.style.background = darkMode ? "#fff" : "#202D36";
    document.body.style.color = darkMode ? "#000" : "#fff";

    if (headerRef.current) {
      headerRef.current.style.backgroundColor = darkMode ? "#fff" : "#2b3743";
      headerRef.current.style.color = darkMode ? "#000" : "#fff";
      headerRef.current.style.boxShadow = darkMode
        ? "0 10px 10px rgba(7, 11, 14, 0.5)"
        : "0 10px 10px rgba(0, 0, 0, 0.1)";
    }
  };

  return (
    <header
      ref={headerRef}
      className="header"
      style={{ boxShadow: "0 10px 10px rgba(7, 11, 14, 0.5)" }}
    >
      <div>
        <h1>Where in the world?</h1>
      </div>

      <div className="mode" onClick={toggleDarkMode}>
        <FontAwesomeIcon
          className="ChangeMode"
          icon={darkMode ? faMoon : faSun}
        />
        <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      </div>
    </header>
  );
};

export default Header;
