import React, { useState } from "react";
import styles from "./MenuList.module.css";
import { useLanguage } from "../LanguageButton/LanguageContext";

const MENU_ITEMS = {
  English: [
    "Breakfast",
    "Appetizers",
    "Burger",
    "Salad",
    "Pasta",
    "Pizza",
    "International Meals",
    "Dessert",
    "Ice Cream",
    "Meat",
    "Drinks",
  ],
  Arabic: [
    "وجبة الإفطار",
    "المقبلات",
    "البرغر",
    "السلطات",
    "المعكرونة",
    "البيتزا",
    "الوجبات العالمية",
    "الحلويات",
    "الآيس كريم",
    "اللحوم",
    "المشروبات",
  ],
};

const MenuList = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const { language } = useLanguage();
  const menuItems = MENU_ITEMS[language] || MENU_ITEMS["English"];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.menuItem} ${selectedItem === item ? styles.selected : ""}`}
          onClick={() => handleSelectItem(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default MenuList;