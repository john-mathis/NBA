import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info-container">
          <p className="text-xl footer-link bold">NBA STATS</p>
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
            <a
              href="https://john-mathis.github.io/react-planets/"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              Planets
            </a>
          </div>
          <div className="footer-info-container">
            <p className="text-L uppercase">Tools</p>
            <a
              href="https://www.mongodb.com/mern-stack"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              MERN
            </a>
            <a
              href="https://redux-toolkit.js.org/rtk-query/overview"
              className="text-body footer-link"
              target="_blank"
              rel="noreferrer"
            >
              RTK Query
            </a>
          </div>
        </div>
      </div>

      <p className="copyright"> &#169; NBA Stats 2023</p>
    </footer>
  );
};

export default Footer;
