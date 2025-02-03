import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../LanguageButton/LanguageContext";
import styles from "./DishList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DishCard = ({ dish }) => {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dish/${dish.id}`);
  };
  return (
    <div onClick={handleClick} className={styles.dishCard}>
      <img src={dish.image} alt={dish.name} className={styles.dishImage} />
      <h3 className={`${styles.dishName} ${language === "Arabic" ? styles.arabic : ""}`}>
        {dish.name}
      </h3>
      <p className={styles.dishDescription}>{dish.description}</p>
      <div className={styles.dishTags}>
        {dish.tags.map((tag, i) => (
          <span key={i} className={styles.tag}>
            <FontAwesomeIcon icon={tag} />
            {dish.seasonal && <span className={styles.season}> Seasonal</span>}
          </span>
        ))}
      </div>
      <div className= {`${styles.dishPrice} ${language === "Arabic" ? styles.arabic : ""}`}      >
        {typeof dish.price === "object"
          ? `S ${dish.price.S}  |  L ${dish.price.L}`
          : dish.price}
      </div>
    </div>
  );
};

export default DishCard;
