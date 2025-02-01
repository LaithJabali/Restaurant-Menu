import React from "react";
import styles from "./DishList.module.css";
import { useLanguage } from "../LanguageButton/LanguageContext";
import MenuDataEnglish from "../MenuData/MenuDataEnglish";
import MenuDataArabic from "../MenuData/MenuDataArabic";
import DishCard from "./DishCard";


const DishList = ({ selectedCategory }) => {
  const { language } = useLanguage();
  const MenuData = language === "English" ? MenuDataEnglish : MenuDataArabic;

  const dishes = MenuData[selectedCategory];

  return (
    <div className={styles.dishesContainer}>
      {dishes && dishes.length > 0 ? (
        dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)
      ) : (
        <p className={styles.noDishes}>No dishes available</p>
      )}
    </div>
  );
};

export default DishList;