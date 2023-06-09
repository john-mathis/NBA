import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setUserMessage("Please fill in fields");
    }

    try {
      const response = await axios.post(
        "https://the-nba-stats.onrender.com/auth/signup",
        {
          firstName,
          lastName,
          username,
          password,
        }
      );
      setUserMessage(response.data.message);
      setFirstName("");
      setLastName("");
      setUsername("");
      setPassword("");
    } catch (err) {
      setUserMessage(err.response.data.message);
    }
  };

  return (
    <>
      <section className="login-container">
        <h1 className="uppercase bold center-align login-text">nba stats</h1>
        <p className="center-align bold  login-text">Welcome back!</p>
        <p className="center-align login-text">Create an account.</p>
        <p className="center-align error-message">
          {userMessage ? userMessage : ""}
        </p>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            className="login-input"
            type="text"
            placeholder="First name"
            required
          />

          <input
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            className="login-input"
            type="text"
            placeholder="Last name"
            required
          />

          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            className="login-input"
            type="text"
            placeholder="Username"
            required
          />

          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="login-input"
            type="password"
            placeholder="Password"
            required
          />

          <button className="cta-btn" onClick={handleSubmit}>
            Create account
          </button>
          <p className="cta-heading xs-fs light-fw">
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default SignUp;
