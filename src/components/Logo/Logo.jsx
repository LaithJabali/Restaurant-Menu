import React from "react";
import styles from "./Logo.module.css"; 
import logo from "../../assets/logo.png"; 
import DarkLogo from "../../assets/DarkLogo.png";
import {usePrefersDarkMode} from "./usePrefersDarkMode";


const Logo = ({ src, alt = "Logo" }) => {
  const isDarkMode = usePrefersDarkMode();
  const logoSrc = isDarkMode ? logo : DarkLogo;

  return <img className={styles.logo} src={logoSrc} alt={alt} />;
};

export default Logo;