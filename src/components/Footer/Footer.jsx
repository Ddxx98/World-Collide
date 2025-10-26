import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import youtube from "../../assets/icons/youtube.svg";

const Footer = () => {
  const [copyMessage, setCopyMessage] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyMessage('Copied to clipboard!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  return (
    <footer className={styles.footer}>
      {/* === Column 1: Navigation === */}
      <div className={styles.navSection}>
        <div className={styles.navGroups}>
          <div className={styles.navBlock}>
            <h4 className={styles.navBlocktitle}>Involve Yourself</h4>
            <NavLink to="/volunteer" className={styles.link}>
              Donate
            </NavLink>
            <NavLink to="/donate" className={styles.link}>
              Events
            </NavLink>
            <NavLink to="/events" className={styles.link}>
              Contact
            </NavLink>
          </div>

          <div className={styles.navBlock}>
            <h4 className={styles.navBlocktitle}>Content</h4>
            <NavLink to="/blog" className={styles.link}>
              About Us
            </NavLink>
            <NavLink to="/resources" className={styles.link}>
              First Initiative
            </NavLink>
            <NavLink to="/news" className={styles.link}>
              Vision
            </NavLink>
          </div>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.title}>Who We Are?</h4>
          <p className={styles.text}>
            We are a non profit dedicated to giving every child the chance to grow up with love, safety, and hope. 
          </p>
        </div>

        <div className={styles.infoBlock}>
          <h4 className={styles.title}>Thank You!</h4>
          <p className={styles.text}>
            Thank you for taking the time to go through our website. You can make a difference by donating to help children, or simply by spreading the word within your circle. If you can’t, maybe someone else can.
          </p>
          <button
            className={styles.copyLink}
            onClick={handleCopy}
            aria-label="Copy website link"
          >
            Click here to copy website link
          </button>
          <span className={styles.copyMessage}>{copyMessage}</span>
        </div>
      </div>

      <div className={styles.line}></div>

      {/* === Column 2: Socials === */}
      <div className={styles.socialSection}>
        <h4 className={styles.title}>Our Socials</h4>
        <div className={styles.socialList}>
          <a
            href="https://www.facebook.com/2worldscollide/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
            aria-label="Facebook"
          >
            <img src={facebook} alt="Facebook" className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/worldscollideministries/collideministries"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
            aria-label="Instagram"
          >
            <img src={instagram} alt="Instagram" className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/@WorldsCollideMinistries"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialItem}
            aria-label="YouTube"
          >
            <img src={youtube} alt="YouTube" className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.line}></div>

      {/* === Column 3: CTA === */}
      <div className={styles.ctaSection}>
        {/* <h4 className={styles.title}>Join the Cause</h4> */}
        <p className={styles.ctaPara}>
          Powered By </p> <a className={styles.ctaLink} href="https://www.interserver.net/" target="_blank" rel="noopener noreferrer">Interserver</a>
        
      </div>
    </footer>
  );
};

export default Footer;
