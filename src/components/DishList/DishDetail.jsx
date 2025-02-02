import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MenuDataEnglish from '../MenuData/MenuDataEnglish';
import MenuDataArabic from '../MenuData/MenuDataArabic';
import { useLanguage } from '../LanguageButton/LanguageContext';
import styles from './DishList.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DishDetail = () => {
  const { language } = useLanguage();
  const MenuData = language === 'English' ? MenuDataEnglish : MenuDataArabic;
  const { id } = useParams();
  const dishId = parseInt(id, 10);
  const navigate = useNavigate();

  const handleExit = () => navigate(-1);

  const dish = React.useMemo(() => {
    for (const category in MenuData) {
      const foundDish = MenuData[category].find((item) => item.id === dishId);
      if (foundDish) return foundDish;
    }
    return null;
  }, [MenuData, dishId]);

  if (!dish) {
    return <p>Dish not found.</p>;
  }

  const handleAddToOrder = () => {
    console.log(`Added ${dish.name} to order.`);
  };

  const isArabic = language === 'Arabic';

  return (
    <div className={styles.dishDetailContainer}>
      <div className={styles.detailHeader}>
        <button className={styles.exitButton} onClick={handleExit}>
          X
        </button>
        <img src={dish.image} alt={dish.name} className={styles.detailImage} />
      </div>

      <div className={styles.descriptionBox}>
        <h1 className={`${styles.detailName} ${isArabic ? styles.arabic : ''}`}>
          {dish.name}
        </h1>
        <p className={`${styles.info} ${isArabic ? styles.arabic : ''}`}>
          {isArabic ? 'الوصف' : 'Description'}
        </p>
        <p
          className={`${styles.detailDescription} ${
            isArabic ? styles.arabic : ''
          }`}
        >
          {dish.description}
        </p>

        <div className={`${styles.dishTags} ${isArabic ? styles.arabic : ''}`}>
          {dish.tags.map((tag, i) => (
            <span
              key={i}
              className={`${styles.tag} ${isArabic ? styles.arabic : ''}`}
            >
              <FontAwesomeIcon icon={tag} />
              {dish.seasonal && (
                <span
                  className={`${styles.season} ${isArabic ? styles.arabic : ''}`}
                >
                  {' '}
                  {isArabic ? 'موسمي' : 'Seasonal'}
                </span>
              )}
            </span>
          ))}
        </div>
        <hr className={styles.separator} />

        <div className={`${styles.dishPrice} ${isArabic ? styles.arabic : ''}`}>
          <p className={`${styles.info} ${isArabic ? styles.arabic : ''}`}>
            {isArabic ? 'السعر' : 'Price'}
          </p>
          {typeof dish.price === 'object'
            ? `S ${dish.price.S} | L ${dish.price.L}`
            : dish.price}
        </div>
        <hr className={styles.separator} />
      </div>

      <button onClick={handleAddToOrder} className={styles.addOrder}>
        {isArabic ? 'أضف إلى الطلب' : 'Add to Order'}
      </button>
    </div>
  );
};

export default DishDetail;