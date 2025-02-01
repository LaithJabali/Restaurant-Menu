import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./LocationPage.module.css";
import Logo from "../../Logo/Logo";
import Tittle from "../../Title/Title";
import MenuList from "../../MenuList/MenuList";
import LanguageButton from "../../LanguageButton/LanguageButton";
import { useLanguage } from "../../LanguageButton/LanguageContext";
import SymbolSlider from "../../SymbolSlider/SymbolSlider";

const LocationPage = () => {
  const { location } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const handleBackClick = () => navigate(-1);

  return (
    <div className={styles.page}>
      <div className={styles.locationPage}>
        <button onClick={handleBackClick} className={styles.backButton}>
          <ArrowLeftOutlined />
        </button>
        <LanguageButton className={styles.languageButton} />
        <Logo />
        <Tittle
          text={language === "English" ? `${location} Branch` : `فرع ${location}`}
          className={styles.title}
        />
        <SymbolSlider />
        <MenuList />
      </div>
    </div>
  );
};

export default LocationPage;