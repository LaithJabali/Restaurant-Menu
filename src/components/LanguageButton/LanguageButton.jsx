import React, { useState } from "react";
import styles from "./LanguageButton.module.css";

const LanguageButton = ({ onLanguageChange }) => {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    const newLanguage = language === "English" ? "Arabic" : "English";
    setLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <button className={styles.languageButton} onClick={toggleLanguage}>
      {language}
    </button>
  );
};

export default LanguageButton;