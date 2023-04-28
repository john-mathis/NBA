import React, { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { Context } from "../Context/Context";

const Login = () => {
  const { setCookies } = useContext(Context);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password,
      });
      setCookies("access_token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("username", username);
      console.log(response);
      navigate("/");
    } catch (err) {
      console.error(err);
      setUserMessage(err.response.data.message);
    }
  };

  const handleShowPassword = () => {
    const showPassword = document.getElementById("showPassword");
    if (showPassword.type === "password") {
      showPassword.type = "text";
    } else {
      showPassword.type = "password";
    }
  };

  return (
    <>
      <section className="login-container">
        <h1 className="bold uppercase text-2xl center-align login-text">
          nba stats
        </h1>
        <p className="center-align bold login-text">Welcome back!</p>
        <p className="center-align login-text">Login to your account.</p>
        <p className="center-align error-message">
          {userMessage ? userMessage : ""}
        </p>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
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
            id="showPassword"
            className="login-input"
            type="password"
            placeholder="Password"
            required
          />

          <div className="show-password">
            <input type="checkbox" onClick={handleShowPassword} />
            <label>Show Password</label>
          </div>
          <button className="cta-btn">Login to your account</button>
          <p className="cta-heading xs-fs light-fw">
            Don't have an account?
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
