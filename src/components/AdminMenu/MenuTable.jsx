import React, { useState } from "react";
import MenuDataEnglish from "../MenuData/MenuDataEnglish";
import MenuDataArabic from "../MenuData/MenuDataArabic";
import styles from "./AdminMenu.module.css";
import { useLanguage } from "../LanguageButton/LanguageContext";
import AdminDishCard from "./AdminDishCard";
import DetailsPopup from "./DetailsPopup";
import AddDish from "./AddDish";

const MenuTable = ({ selectedCategory }) => {
  const { language } = useLanguage();
  const [menuData, setMenuData] = useState(
    language === "English" ? MenuDataEnglish : MenuDataArabic
  );
  const [selectedDish, setSelectedDish] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newDish, setNewDish] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    image: "",
    tags: [],
    seasonal: false,
    available: false,
  });

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const handleDishUpdate = (field, value) => {
    const updatedMenu = { ...menuData };
    const categoryData = updatedMenu[selectedCategory];
    const dishIndex = categoryData.findIndex((dish) => dish.id === selectedDish.id);
    if (dishIndex !== -1) {
      categoryData[dishIndex][field] = value;
      setMenuData(updatedMenu);
      setSelectedDish({ ...selectedDish, [field]: value });
    }
  };

  const handleAddDish = () => {
    const updatedMenu = { ...menuData };
    const categoryData = updatedMenu[selectedCategory];
    const newDishWithId = { ...newDish, id: Date.now() };
    categoryData.push(newDishWithId);
    setMenuData(updatedMenu);
    setNewDish({
      id: null,
      name: "",
      description: "",
      price: "",
      image: "",
      tags: [],
      seasonal: false,
      available: false,
    });
    setIsAdding(false);
  };

  const dishes = menuData[selectedCategory] || [];

  return (
    <div className={styles.menuContainer}>
      <button className={styles.addDish} onClick={() => setIsAdding(true)}>
        {language === "English" ? "Add Dish" : "اضف طبق"}
      </button>

      <div className={styles.dishesContainer}>
        {dishes.map((dish) => (
          <AdminDishCard key={dish.id} dish={dish} onClick={handleDishClick} />
        ))}
      </div>

      {selectedDish && (
        <DetailsPopup
          dish={selectedDish}
          onCancel={() => setSelectedDish(null)}
          onUpdate={handleDishUpdate}
        />
      )}

      {isAdding && (
        <AddDish
          newDish={newDish}
          onChange={(field, value) => setNewDish({ ...newDish, [field]: value })}
          onAdd={handleAddDish}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};

export default MenuTable;