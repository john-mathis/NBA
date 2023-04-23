import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../Hero/Hero.css";
import { Context } from "../Context/Context";

const Hero = () => {
  const { signedIn } = useContext(Context);
  return (
    <section className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-text-container">
          <h1 className="hero-header">NBA STATS</h1>
          <p className="hero-heading">
            NBA STATS is a comprehensive online platform that provides fans with
            up-to-date news, scores, standings, and stats from the National
            Basketball Association (NBA), as well as other basketball-related
            content.
          </p>
          <div className="hero-btn-container">
            {signedIn ? (
              ""
            ) : (
              <Link to="/login" className="hero-btn">
                Get Started
              </Link>
            )}

            <Link to="/teams" className="hero-btn">
              Browse Teams
            </Link>
          </div>
        </div>

        <div className="hero-img-container">
          <img className="hero-img" src={Logo} alt="logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
