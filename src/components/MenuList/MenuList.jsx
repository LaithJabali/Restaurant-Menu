import React, { useState } from "react";
import styles from "./MenuList.module.css";
import { useLanguage } from "../LanguageButton/LanguageContext";
import Tittle from "../Title/Title";
import DishList from "../DishList/DishList";

const MENU_ITEMS = {
  English: [
    "Breakfast", "Appetizers", "Burger", "Salad", "Pasta", "Pizza",
    "International Meals", "Dessert", "Ice Cream", "Meat", "Drinks",
  ],
  Arabic: [
    "وجبة الإفطار", "المقبلات", "البرغر", "السلطات", "المعكرونة", "البيتزا",
    "الوجبات العالمية", "الحلويات", "الآيس كريم", "اللحوم", "المشروبات",
  ],
};

const MenuList = () => {
  const { language } = useLanguage();
  const menuItems = MENU_ITEMS[language] || MENU_ITEMS["English"];
  const [selectedCategory, setSelectedCategory] = useState(menuItems[0]);

  return (
    <div>
      <div className={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`${styles.menuItem} ${selectedCategory === item ? styles.selected : ""}`}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <Tittle text={selectedCategory} className={`${styles.title} ${language === "Arabic" ? styles.arabic : ""}`} />

      {selectedCategory === menuItems[0] && (
        <Tittle
          text={language === "English"
            ? "Breakfast serving time 8:00 AM - 2:00 PM"
            : "وقت تقديم وجبة الإفطار من الساعة 8:00 صباحًا حتى الساعة 2:00 ظهرًا"}
          className={`${styles.breakFastTime} ${language === "Arabic" ? styles.arabic : ""}`}
        />
      )}

      <DishList selectedCategory={selectedCategory} />
    </div>
  );
};

export default MenuList;