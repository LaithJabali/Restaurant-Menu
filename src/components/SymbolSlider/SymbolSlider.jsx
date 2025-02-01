import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faPepperHot, faOilCan, faShrimp, faBottleDroplet, faEgg, faWheatAwnCircleExclamation, faUtensils,} from "@fortawesome/free-solid-svg-icons";
import styles from "./SymbolSlider.module.css";
import { useLanguage } from "../LanguageButton/LanguageContext";

const SymbolSlider = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const { language } = useLanguage();

  const symbolsEnglish = [
    { icon: faLeaf, description: "Suitable for vegetarians" },
    { icon: faPepperHot, description: "Spicy food." },
    { icon: faWheatAwnCircleExclamation, description: "Gluten Free" },
    { icon: faOilCan, description: "Contains oil" },
    { icon: faShrimp, description: "Contains seafood" },
    { icon: faBottleDroplet, description: "Contains mayonnaise" },
    { icon: faEgg, description: "Contains eggs" },
  ];

  const symbolsArabic = [
    { icon: faLeaf, description: "مناسب للنباتيين" },
    { icon: faPepperHot, description: "طعام حار." },
    { icon: faWheatAwnCircleExclamation, description: "خالٍ من الغلوتين" },
    { icon: faOilCan, description: "يحتوي على زيت" },
    { icon: faShrimp, description: "يحتوي على مأكولات بحرية" },
    { icon: faBottleDroplet, description: "يحتوي على مايونيز" },
    { icon: faEgg, description: "يحتوي على بيض" },
  ];

  const symbols = language === "English" ? symbolsEnglish : symbolsArabic;

  return (
    <div>
      <button className={styles.learnButton} onClick={() => setIsOpen(true)}>
        {language === "English" ? (
          <>
            Learn the meanings of the symbols <FontAwesomeIcon icon={faUtensils} />
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faUtensils} /> تعرف على معاني الرموز
          </>
        )}
      </button>
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
      <div className={`${styles.sliderPanel} ${isOpen ? styles.show : ""}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>✖</button>
        {selectedSymbol && (
          <div className={styles.symbolDetail}>
            <FontAwesomeIcon icon={selectedSymbol.icon} className={styles.largeIcon} />
            <p className={styles.symbolDescription}>{selectedSymbol.description}</p>
          </div>
        )}
        <div className={styles.symbolSlider}>
          {symbols.map((symbol, index) => (
            <div
              key={index}
              className={`${styles.symbol} ${selectedSymbol === symbol ? styles.selected : ""}`}
              onClick={() => setSelectedSymbol(symbol)}
            >
              <FontAwesomeIcon icon={symbol.icon} className={styles.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SymbolSlider;