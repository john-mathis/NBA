import React from "react";
import "../Footer/Footer.css";
import { AiFillGithub } from "react-icons/ai";
import { BiExport } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info-container">
          <p className="text-xl footer-link bold">NBA STATS</p>
          <p className="footer-text">Stats in one place.</p>
          <Link to="github.com/john-mathis">
            <AiFillGithub className="footer-icon" />
          </Link>
          <Link to=""> </Link>
          <BiExport className="footer-icon" />
        </div>

        <div className="footer-links-container">
          <div className="footer-info-container">
            <p className="text-L uppercase">info</p>
            <p className="text-body footer-link">
              <a className="text-body footer-link" href="/careers">
                Careers
              </a>
            </p>
            <p className="text-body footer-link">
              <a className="text-body footer-link" href="/sponsors">
                Sponsors
              </a>
            </p>
          </div>
          <div className="footer-info-container">
            <p className="text-L uppercase">Portfolio</p>
            <a
              href="https://github.com/john-mathis"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.johnmathis.net/"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Personal Site
            </a>
          </div>
          <div className="footer-info-container">
            <p className="text-L uppercase">Projects</p>
            <a
              href="https://barbershop-omega.vercel.app/"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Prime Barbershop
            </a>
            <p className="text-body footer-link">Project 2</p>
          </div>
          <div className="footer-info-container">
            <p className="text-L uppercase">Projects</p>
            <p className="text-body footer-link">Project 1</p>
            <p className="text-body footer-link">Project 2</p>
          </div>
        </div>
      </div>

      <p className="copyright"> &#169; NBA Stats 2023</p>
    </footer>
  );
};

export default Footer;
