import React from "react";
import "../Dashboard/Dashboard.css";
import { AiOutlineSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { GiBasketballJersey } from "react-icons/gi";

const Dashboard = () => {
  return (
    <section id="dashboard">
      <div className="dashboard-container">
        <h3>Hi</h3>
        <p>Adjust your preferred settings here.</p>

        <ul>
          <li className="dashboard-list-item">
            <AiOutlineSetting className="dashboard-icon" />
            General
          </li>
          <li className="dashboard-list-item">
            <MdAccountCircle className="dashboard-icon" />
            Account
          </li>
          <li className="dashboard-list-item">
            <RiTeamLine className="dashboard-icon" />
            Favorite Teams
          </li>

          <li className="dashboard-list-item">
            <GiBasketballJersey className="dashboard-icon" />
            Favorite Players
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
