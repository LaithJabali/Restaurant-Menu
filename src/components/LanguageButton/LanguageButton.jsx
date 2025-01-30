import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageButton = ({ className }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button className={className} onClick={toggleLanguage}>
      {language === "English" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageButton;