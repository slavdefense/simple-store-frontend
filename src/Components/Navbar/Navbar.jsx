import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = ({ navItems }) => {
  return (
    <div>
      <div className={styles.nav}>
        <img className={styles.logo} src="./logo-scout.png" alt="logo" />
        {navItems.map((item) => {
          return (
            <Link className={styles.link} to={item.url}>
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
