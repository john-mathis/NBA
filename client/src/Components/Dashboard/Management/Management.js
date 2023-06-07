import React, { useContext } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";
import { useNavigate } from "react-router-dom";

const Management = () => {
  const { setUserMessage, userMessage, username, setUserName } =
    useContext(Context);
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        "https://the-nba-stats.onrender.com/auth/dashboard",
        {
          username,
        }
      );

      // window.localStorage.removeItem("userID");
      // window.localStorage.removeItem("username");
      // navigate("/login");
      setUserMessage(response.data.message);
    } catch (err) {
      console.error(err);
      setUserMessage(err.response.data.message);
    }
  };
  return (
    <form onSubmit={handleDelete} className="account-container">
      <h3>Account Management</h3>
      <p className="center-align error-message">
        {userMessage ? userMessage : ""}
      </p>

      <input
        type="text"
        placeholder="Enter username"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={username}
        required
      />
      <div className="delete-user-container">
        <button className="cta-btn">Delete Account</button>
      </div>
    </form>
  );
};

export default Management;
