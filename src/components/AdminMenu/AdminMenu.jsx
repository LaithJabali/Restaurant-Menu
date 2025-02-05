import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageButton/LanguageContext';
import Logo from '../Logo/Logo';
import MenuList from '../MenuList/MenuList';
import styles from './AdminMenu.module.css';

const AdminMenu = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Logo />
        <button className={styles.addDish} onClick={goToHomePage}>
          {language === 'English' ? 'Go to Home Page' : 'الصفحة الرئيسية'}
        </button>
      </div>
      <MenuList isAdmin={true} />
    </div>
  );
};

export default AdminMenu;