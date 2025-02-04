import React, { useState } from 'react';
import styles from './AdminMenu.module.css';
import LocationDropdown from './LocationDropdown';
import MenuList from '../MenuList/MenuList';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from "../LanguageButton/LanguageContext";
const AdminMenu = () => {
const navigate = useNavigate();
  const { language } = useLanguage();
const goToHomePage = () => {
  navigate('/');
};  
  return (
    <div className={styles.page}>
            <button className={styles.addDish} onClick={goToHomePage}> {language === "English" ? 'Go to Home Page' : 'الصفحة الرئيسية'}</button>

     <MenuList isAdmin={true}/>
    </div>
  );
};

export default AdminMenu;