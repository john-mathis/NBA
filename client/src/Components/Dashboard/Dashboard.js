import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { AiOutlineSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { GiBasketballJersey } from "react-icons/gi";
import General from "./General/General";
import Account from "./Account/Account";
import FavoriteTeams from "./FavoriteTeams/FavoriteTeams";
import FavoritePlayers from "./FavoritePlayers/FavoritePlayers";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("General");

  const handleTabSwitch = (tab) => {
    switch (tab) {
      case "General":
        return <General />;
      case "Account":
        return <Account />;
      case "Favorite Teams":
        return <FavoriteTeams />;
      case "Favorite Players":
        return <FavoritePlayers />;
      default:
        return <General />;
    }
  };

  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <h3>Hi {localStorage.getItem("username")}!</h3>
        <p>Adjust your preferred settings here.</p>

        <ul>
          <li
            className="active-list-item dashboard-list-item"
            onClick={() => {
              setActiveTab("General");
            }}
          >
            <AiOutlineSetting className="dashboard-icon" />
            General
          </li>
          <li
            className="dashboard-list-item"
            onClick={() => {
              setActiveTab("Account");
            }}
          >
            <MdAccountCircle className="dashboard-icon" />
            Account
          </li>
          <li
            className="dashboard-list-item"
            onClick={() => {
              setActiveTab("Favorite Teams");
            }}
          >
            <RiTeamLine className="dashboard-icon" />
            Favorite Teams
            <span className="beta-logo">BETA</span>
          </li>

          <li
            className="dashboard-list-item"
            onClick={() => {
              setActiveTab("Favorite Players");
            }}
          >
            <GiBasketballJersey className="dashboard-icon" />
            Favorite Players
            <span className="beta-logo">BETA</span>
          </li>
        </ul>
      </div>

      <div className="dashboard-container">{handleTabSwitch(activeTab)}</div>
    </section>
  );
};

export default Dashboard;
