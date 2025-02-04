import React from 'react';
import styles from './AdminMenu.module.css';

const AdminDishCard = ({ dish, onClick }) => (
  <div className={styles.dishCard} onClick={() => onClick(dish)}>
    <img className={styles.dishImage} src={dish.image} alt={dish.name} />
    <h3 className={styles.dishName}>{dish.name}</h3>
  </div>
);

export default AdminDishCard;