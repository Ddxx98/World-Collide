import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import CustomButton from "../Button/Button";

import MenuIcon from "../../assets/icons/menu.svg";
import CloseIcon from "../../assets/icons/close.svg";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <div className={styles.header}>
      <div className={styles.headerToolbar}>
        <div className={styles.header__logo}>
          <img src="/logo.png" alt="World Collide Logo" className={styles.logoImage} />
        </div>

        <button
          className={styles.menuButton}
          onClick={toggleNav}
          aria-label={navOpen ? "Close Navigation" : "Open Navigation"}
        >
          {navOpen ? (
            <img src={CloseIcon} alt="Close Menu" className={styles.menuIcon} />
          ) : (
            <img src={MenuIcon} alt="Open Menu" className={styles.menuIcon} />
          )}
        </button>

        <nav className={`${styles.header__nav} ${navOpen ? styles.navOpen : ""}`}>
          <div className={styles.navLinks}>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={() => setNavOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={() => setNavOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={() => setNavOpen(false)}
            >
              Join Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
              }
              onClick={() => setNavOpen(false)}
            >
              Contact Us
            </NavLink>
          </div>

          {/* Donate button inside nav, bottom alignment on mobile */}
          <div className={styles.donateWrapper}>
            <CustomButton
              className="primary"
              size="lg"
              onClick={() => alert("Donate Clicked!")}
              type="button"
            >
              Donate
            </CustomButton>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
