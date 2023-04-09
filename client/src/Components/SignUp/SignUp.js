import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match!");
      }
      const response = await axios.post("http://localhost:3001/auth/signup", {
        username,
        password,
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <section className="login-container">
        <h1 className="uppercase bold center-align login-text">nba stats</h1>
        <p className="center-align bold  login-text">Welcome back!</p>
        <p className="center-align login-text">Create an account.</p>
        <p>{errorMessage ? errorMessage : ""}</p>
        <form action="POST" className="form-container" onSubmit={handleSubmit}>
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

          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            className="login-input"
            type="password"
            placeholder="Confirm password"
            required
          />

          <button className="cta-btn">Create account</button>
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
