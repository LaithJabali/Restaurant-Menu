import React from "react";
import { useLanguage } from "../LanguageButton/LanguageContext";
import styles from "./DishList.module.css";

const DishCard = ({ dish }) => {
  const { language } = useLanguage();

  return (
    <div className={styles.dishCard}>
      <img src={dish.image} alt={dish.name} className={styles.dishImage} />
      <h3 className={`${styles.dishName} ${language === "Arabic" ? styles.arabic : ""}`}>
        {dish.name}
      </h3>
      <p className={`${styles.dishDescription} ${language === "Arabic" ? styles.arabic : ""}`}>{dish.description}</p>
      <div className={styles.dishTags}>
        {dish.tags.map((tag, i) => (
          <span key={i} className={styles.tag}>
            {tag}
            {dish.seasonal && <span className={styles.season}> Seasonal</span>}
          </span>
        ))}
      </div>
      <div className={`${styles.dishPrice} ${language === "Arabic" ? styles.arabic : ""}`}>
        {typeof dish.price === "object"
          ? `S ${dish.price.S}  |  L ${dish.price.L}`
          : dish.price}
      </div>
    </div>
  );
};

export default DishCard;