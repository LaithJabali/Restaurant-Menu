// src/HomePage/HomePage.jsx
import React from "react";
import { List } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css"; 
import Logo from "../../Logo/Logo";
import Tittle from "../../Title/Title";
import LanguageButton from "../../LanguageButton/LanguageButton";
import { useLanguage } from "../../LanguageButton/LanguageContext";

const englishLocations = ["Al Tireh", "Al Masyoun", "Al Irsal", "Nablus"];
const arabicLocations = ["الطيرة", "المصيون", "الارسال", "نابلس"];

const HomePage = () => {
  const { language } = useLanguage(); 
  const navigate = useNavigate(); 

  const locations = language === "English" ? englishLocations : arabicLocations;

  return (
    <div className={styles.homePage}>
      <Logo />
      <Tittle text={language === "English" ? "Select a Branch" : "اختر فرعًا"} className={styles.title} />

      <List
        dataSource={locations}
        renderItem={(item) => (
          <List.Item 
            className={styles.listItem} 
            onClick={() => navigate(`/location/${item}`)}
          >
            <span className={styles.listText}>{item}</span>
            <div className={styles.arrowWrapper}>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </List.Item>
        )}
      />
      <LanguageButton className={styles.languageButton} />
    </div>
  );
};

export default HomePage;