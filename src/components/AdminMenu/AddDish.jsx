import React from 'react';
import styles from './AdminMenu.module.css';

const AddDish = ({ newDish, onChange, onAdd, onCancel }) => (
  <div className={styles.overlay} onClick={onCancel}>
    <div className={styles.dishDetailsPopup} onClick={(e) => e.stopPropagation()}>
      <h3>Add New Dish</h3>
      {['name', 'description', 'price', 'image'].map((field) => (
        <div key={field} className={styles.dishField}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="text"
            value={newDish[field]}
            onChange={(e) => onChange(field, e.target.value)}
          />
        </div>
      ))}
      {['seasonal', 'available'].map((field) => (
        <div key={field} className={styles.dishField}>
          <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type="checkbox"
            checked={newDish[field]}
            onChange={(e) => onChange(field, e.target.checked)}
          />
        </div>
      ))}
      <button className={styles.addDish} onClick={onAdd}>
        Add Dish
      </button>
    </div>
  </div>
);

export default AddDish;