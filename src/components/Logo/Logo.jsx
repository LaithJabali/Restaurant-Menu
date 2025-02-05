import React from "react";
import styles from "./Logo.module.css"; 
import logo from "../../assets/logo.png"; 
import DarkLogo from "../../assets/DarkLogo.png";

const Logo = () => {
  const logoSrc = logo;
  return <img className={styles.logo} src={logoSrc} alt="Logo" />;
};

export default Logo;