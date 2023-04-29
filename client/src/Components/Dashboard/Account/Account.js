import React, { useState } from "react";
import axios from "axios";
import "../Account/Account.css";

const Account = () => {
  const [username, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "https://localhost:3001/auth/dashboard",
        { username }
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="account-container">
      <h3 className="">Change Username</h3>
      <input
        type="text"
        placeholder={localStorage.getItem("username")}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={username}
        required
      />
      <button className="cta-btn">Update Username</button>
    </form>
  );
};

export default Account;
