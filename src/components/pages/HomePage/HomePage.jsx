import React, { useState } from "react";
import { List } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./HomePage.module.css"; 
import Logo from "../../Logo/Logo";
import Tittle from "../../Title/Title";
import LanguageButton from "../../LanguageButton/LanguageButton";

const englishLocations = ["Al Tireh", "Al Masyoun", "Al Irsal", "Nablus"];
const arabicLocations = ["الطيرة", "المصيون", "الارسال", "نابلس"];

const HomePage = () => {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const locations = language === "English" ? englishLocations : arabicLocations;

  return (
    <div className={styles.homePage}>
      <Logo className={styles.logo} />
      <Tittle
        text={language === "English" ? "Select a Branch" : "اختر فرعًا"}
        className={styles.title}
      />
      <List
        dataSource={locations}
        renderItem={(item) => (
          <List.Item
            className={styles.listItem}
            onClick={() => console.log("Clicked:", item)}
          >
            <span className={styles.listText}>{item}</span>
            <div className={styles.arrowWrapper}>
              <ArrowRightOutlined className={styles.arrowIcon} />
            </div>
          </List.Item>
        )}
      />
      <LanguageButton onLanguageChange={handleLanguageChange} />
    </div>
  );
};

export default HomePage;