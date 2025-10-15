import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <div className={styles.top}>
          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Involve Yourself</h4>
            <NavLink className={styles.link} to="/volunteer">Donate</NavLink>
            <NavLink className={styles.link} to="/donate">Events</NavLink>
            <NavLink className={styles.link} to="/events">Contact</NavLink>
          </div>
          <div className={styles.linksGroup}>
            <h4 className={styles.heading}>Content</h4>
            <NavLink className={styles.link} to="/blog">About Us</NavLink>
            <NavLink className={styles.link} to="/resources">First Initiative</NavLink>
            <NavLink className={styles.link} to="/news">Vision</NavLink>
          </div>
        </div>
        <div className={styles.whoWeAre}>
          <h4 className={styles.heading}>Who We Are?</h4>
          <p className={styles.text}>
            We are a non profit dedicated to giving every child the chance to grow up with love, safety, and hope.
          </p>
        </div>
        <div className={styles.thanks}>
          <h4 className={styles.heading}>Thank You !</h4>
          <p className={styles.text}>
            Thank you for taking the time to go through our website. You can make a difference by donating to help children, or simply by spreading the word within your circle. If you can’t, maybe someone else can.
          </p>
          <p className={styles.text}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(window.location.href);
                alert("Website link copied to clipboard!");
              }}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigator.clipboard.writeText(window.location.href);
                  alert("Website link copied to clipboard!");
                }
              }}
            >
              Click here
            </a>{" "}
            to copy the website link
          </p>

        </div>
      </div>

      <div className={styles.column}>
        <div><h4 className={styles.heading}>Socials</h4></div>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" className={styles.socialIconLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebook} alt="Facebook" className={styles.socialIcon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.socialIconLink}
          >
            <img src={instagram} alt="Instagram" className={styles.socialIcon} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className={styles.socialIconLink}
          >
            <img src={youtube} alt="YouTube" className={styles.socialIcon} />
          </a>
        </div>
      </div>

      <div className={styles.column}></div>
    </footer>
  );
};

export default Footer;
