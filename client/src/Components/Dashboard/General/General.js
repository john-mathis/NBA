import React from "react";
import { BsLightbulb } from "react-icons/bs";
import { MdFlashlightOff } from "react-icons/md";
import "../General/General.css";

const General = () => {
  const handleDarkMode = () => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = " var(--dark-grey)";
    localStorage.setItem("mode", "dark");
  };

  const handleLightMode = () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.body.style.backgroundColor = " var(--white)";
    localStorage.setItem("mode", "light");
  };

  if (localStorage.getItem("mode") === "dark") {
    handleDarkMode();
  } else {
    handleLightMode();
  }
  return (
    <div>
      <h3 className="center-align">Appearance</h3>
      <div className="theme-toggle" onClick={handleLightMode}>
        <BsLightbulb className="dashboard-icon" />
        <p>Light Mode</p>
      </div>
      <div className="theme-toggle" onClick={handleDarkMode}>
        <MdFlashlightOff className="dashboard-icon" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};

export default General;
