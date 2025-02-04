import React from 'react';
import styles from './AdminMenu.module.css';

const DetailsPopup = ({ dish, onUpdate, onCancel }) => (
  <div className={styles.overlay} onClick={onCancel}>
    <div className={styles.dishDetailsPopup} onClick={(e) => e.stopPropagation()}>
      <h3>Edit Dish</h3>
      {['name', 'description', 'price'].map((field) => (
        <div key={field} className={styles.dishField}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            value={dish[field]}
            onChange={(e) => onUpdate(field, e.target.value)}
          />
        </div>
      ))}
      {['seasonal', 'available'].map((field) => (
        <div key={field} className={styles.dishField}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="checkbox"
            checked={dish[field]}
            onChange={(e) => onUpdate(field, e.target.checked)}
          />
        </div>
      ))}
    </div>
  </div>
);

export default DetailsPopup;