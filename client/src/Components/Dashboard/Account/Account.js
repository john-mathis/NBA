import React, { useContext, useState } from "react";
import axios from "axios";

import "../Account/Account.css";
import { Context } from "../../Context/Context";

const Account = () => {
  const { userMessage, setUserMessage, username, setUserName } =
    useContext(Context);
  const [newUserName, setNewUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "https://the-nba-stats.onrender.com/auth/dashboard",
        { username, newUserName }
      );
      setUserName("");
      setNewUserName("");
      setUserMessage(response.data.message);
    } catch (err) {
      console.error(err);
      setUserMessage(err.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="account-container">
        <h3>Change Username</h3>
        <p className="center-align error-message">
          {userMessage ? userMessage : ""}
        </p>
        <label>Enter current username:</label>
        <input
          type="text"
          placeholder="Enter current username"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={username}
          required
        />
        <label>Enter new username:</label>
        <input
          type="text"
          placeholder="Enter new username"
          onChange={(e) => {
            setNewUserName(e.target.value);
          }}
          value={newUserName}
          required
        />
        <button className="cta-btn">Update Username</button>
      </form>
    </>
  );
};

export default Account;
