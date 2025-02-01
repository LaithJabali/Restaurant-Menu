import dish1 from '../../assets/dish1.png';
import dish2 from '../../assets/dish2.png';
import dish3 from '../../assets/dish3.png';
import dish4 from '../../assets/dish4.jpg';
import dish5 from '../../assets/dish5.jpg';
import dish6 from '../../assets/dish6.jpg';
import dish7 from '../../assets/dish7.jpg';
import dish8 from '../../assets/dish8.jpg';
import dish9 from '../../assets/dish9.jpg';
import dish10 from '../../assets/dish10.jpg';
import dish11 from '../../assets/dish11.jpg';

const MenuDataEnglish = {
  Breakfast: [
    {
      id: 1,
      name: "Thyme and Fig Mankosheh",
      description: "A delightful blend of arugula, avocado, sumac, figs, tomatoes, onions, pomegranate molasses, and a traditional Zeit and Zaatar Mankosheh.",
      price: "₪35",
      image: dish1,
      tags: ["🌱"],
      seasonal: true,
    },
    {
      id: 2,
      name: "Halloumi with Ka'ek Al-Quds",
      description: "Grilled halloumi cheese served with tomato, cucumber, arugula, mayonnaise, and sun-dried tomatoes on a traditional Ka'ek Al-Quds.",
      price: { S: "₪25", L: "₪35" },
      image: dish2,
      tags: ["🥒", "🌱"],
      seasonal: false,
    },
  ],
  Appetizers: [
    {
      id: 3,
      name: "Stuffed Grape Leaves",
      description: "Grape leaves stuffed with a savory mixture of rice, pine nuts, and herbs, served with a side of tangy yogurt.",
      price: "₪20",
      image: dish3,
      tags: ["🌱"],
      seasonal: false,
    },
    {
      id: 4,
      name: "Hummus with Pita",
      description: "Creamy hummus served with freshly baked pita bread, garnished with olive oil and paprika.",
      price: "₪15",
      image: dish4,
      tags: ["🌱"],
      seasonal: false,
    },
  ],
  Burger: [
    {
      id: 5,
      name: "Classic Beef Burger",
      description: "Juicy beef patty topped with lettuce, tomato, and cheddar cheese, served on a toasted bun.",
      price: "₪40",
      image: dish5,
      tags: ["🍔"],
      seasonal: false,
    },
    {
      id: 6,
      name: "Chicken Caesar Burger",
      description: "Grilled chicken breast with Caesar salad and crispy bacon, served on a soft bun.",
      price: "₪45",
      image: dish6,
      tags: ["🍔"],
      seasonal: false,
    },
  ],
  Salad: [
    {
      id: 7,
      name: "Greek Salad",
      description: "A refreshing mix of feta cheese, olives, tomatoes, cucumber, and onion, seasoned with oregano.",
      price: "₪30",
      image: dish7,
      tags: ["🥗"],
      seasonal: false,
    },
    {
      id: 8,
      name: "Caesar Salad",
      description: "Crisp romaine lettuce tossed with Caesar dressing, croutons, and parmesan cheese.",
      price: "₪35",
      image: dish8,
      tags: ["🥗"],
      seasonal: false,
    },
  ],
  Pasta: [
    {
      id: 9,
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta served with a rich and savory meat sauce.",
      price: "₪50",
      image: dish9,
      tags: ["🍝"],
      seasonal: false,
    },
    {
      id: 10,
      name: "Penne Arrabbiata",
      description: "Penne pasta tossed in a spicy tomato sauce with garlic and chili flakes.",
      price: "₪45",
      image: dish10,
      tags: ["🍝"],
      seasonal: false,
    },
  ],
  Pizza: [
    {
      id: 11,
      name: "Margherita Pizza",
      description: "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
      price: "₪60",
      image: dish11,
      tags: ["🍕"],
      seasonal: false,
    },
    {
      id: 12,
      name: "Pepperoni Pizza",
      description: "A favorite pizza topped with spicy pepperoni slices and mozzarella cheese.",
      price: "₪65",
      image: dish1,
      tags: ["🍕"],
      seasonal: false,
    },
  ],
  "International Meals": [
    {
      id: 13,
      name: "Sushi Platter",
      description: "An assortment of fresh sushi rolls, nigiri, and sashimi.",
      price: "₪80",
      image: dish2,
      tags: ["🍣"],
      seasonal: false,
    },
    {
      id: 14,
      name: "Chicken Tikka Masala",
      description: "Tender chicken pieces in a creamy and spicy tomato-based sauce, served with basmati rice.",
      price: "₪70",
      image: dish3,
      tags: ["🍛"],
      seasonal: false,
    },
  ],
  Dessert: [
    {
      id: 15,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
      price: "₪30",
      image: dish4,
      tags: ["🍰"],
      seasonal: false,
    },
    {
      id: 16,
      name: "Baklava",
      description: "Sweet pastry made of layers of filo filled with chopped nuts and sweetened with honey.",
      price: "₪25",
      image: dish5,
      tags: ["🍰"],
      seasonal: false,
    },
  ],
  'Ice Cream': [
    {
      id: 17,
      name: "Vanilla Bean Ice Cream",
      description: "Classic ice cream made with real vanilla beans.",
      price: "₪20",
      image: dish6,
      tags: ["🍦"],
      seasonal: false,
    },
    {
      id: 18,
      name: "Chocolate Fudge Sundae",
      description: "Rich chocolate ice cream topped with hot fudge sauce and whipped cream.",
      price: "₪25",
      image: dish7,
      tags: ["🍦"],
      seasonal: false,
    },
  ],
  Meat: [
    {
      id: 19,
      name: "Vanilla Bean Ice Cream",
      description: "Classic ice cream made with real vanilla beans.",
      price: "₪20",
      image: dish6,
      tags: ["🍦"],
      seasonal: false,
    },
    {
      id: 20,
      name: "Chocolate Fudge Sundae",
      description: "Rich chocolate ice cream topped with hot fudge sauce and whipped cream.",
      price: "₪25",
      image: dish7,
      tags: ["🍦"],
      seasonal: false,
    },
  ],
  Drinks: [
    {
      id: 21,
      name: "Vanilla Bean Ice Cream",
      description: "Classic ice cream made with real vanilla beans.",
      price: "₪20",
      image: dish6,
      tags: ["🍦"],
      seasonal: false,
    },
    {
      id: 22,
      name: "Chocolate Fudge Sundae",
      description: "Rich chocolate ice cream topped with hot fudge sauce and whipped cream.",
      price: "₪25",
      image: dish7,
      tags: ["🍦"],
      seasonal: false,
    },
   
  ],
};

export default MenuDataEnglish;