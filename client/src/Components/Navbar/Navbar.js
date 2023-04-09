import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Navbar/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMoon } from "react-icons/hi";
import { BsFillSunFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [openMenuClass, setOpenMenuClass] = useState("nav-icon show");
  const [closeMenuClass, setCloseMenuClass] = useState("nav-icon hide");
  const [navLinksClass, setNavLinksClass] = useState(
    "nav-links-container hide"
  );

  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/login");
  };

  const openMenu = () => {
    setNavLinksClass("nav-links-container show");
    setOpenMenuClass("nav-icon hide");
    setCloseMenuClass("nav-icon show");
  };

  const closeMenu = () => {
    setNavLinksClass("nav-links-container hide");
    setOpenMenuClass("nav-icon show");
    setCloseMenuClass("nav-icon hide");
  };

  const handleDarkMode = () => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = " var(--dark-grey)";
    // sessionStorage.setItem("mode", "dark");
  };

  const handleLightMode = () => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.body.style.backgroundColor = " var(--white)";
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="header-container">
          <a className="nav-header nav-link bold text-xl" href="/">
            NBA STATS
          </a>
        </div>
        <div className={`${navLinksClass}`}>
          <a className="nav-link" href="/">
            Home
          </a>
          <a className="nav-link" href="/teams">
            Teams
          </a>
          <a className="nav-link" href="/standings">
            Standings
          </a>

          {cookies.access_token ? (
            <a
              href="/login"
              className="cta-btn center-align nav-cta"
              onClick={logout}
            >
              Log Out
            </a>
          ) : (
            <a href="/login" className="cta-btn center-align nav-cta">
              Login / Register
            </a>
          )}
        </div>

        <div className="nav-icons-container">
          <div className="theme-icons-container">
            <HiMoon onClick={handleDarkMode} className="nav-icon dark-mode" />
            <BsFillSunFill
              onClick={handleLightMode}
              className="nav-icon light-mode"
            />
            {cookies.access_token ? (
              <button
                className="cta-btn center-align theme-cta logout-btn"
                onClick={logout}
              >
                Log out
              </button>
            ) : (
              <Link to="/login" className="cta-btn center-align theme-cta ">
                Login / Register
              </Link>
            )}
          </div>

          <div className="menu-icons-container">
            <GiHamburgerMenu className={openMenuClass} onClick={openMenu} />
            <IoMdClose className={closeMenuClass} onClick={closeMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
