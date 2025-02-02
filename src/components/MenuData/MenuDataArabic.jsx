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
import {
  faLeaf,
  faPepperHot,
  faUtensils,
  faBreadSlice,
  faCheese,
  faDrumstickBite,
  faFish,
  faIceCream,
  faPizzaSlice,
  faHamburger,
  faHotdog,
  faBacon,
  faLemon,
  faSeedling,
  faCocktail,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const MenuDataArabic = {
  'وجبة الإفطار': [
    {
      id: 1,
      name: "منقوشة الزعتر والتين",
      description: "مزيج لذيذ من الجرجير، الأفوكادو، السماق، التين، الطماطم، البصل، دبس الرمان، وزيت وزعتر المنقوشة التقليدية.",
      price: "₪35",
      image: dish1,
      tags: [faLeaf],
      seasonal: true,
    },
    {
      id: 2,
      name: "حلومي مع كعك القدس",
      description: "جبنة حلومي مشوية تقدم مع الطماطم، الخيار، الجرجير، المايونيز، والطماطم المجففة على كعك القدس التقليدي.",
      price: { S: "₪25", L: "₪35" },
      image: dish2,
      tags: [faCheese],
      seasonal: false,
    },
  ],
  'المقبلات': [
    {
      id: 3,
      name: "ورق عنب محشي",
      description: "ورق عنب محشي بمزيج لذيذ من الأرز، الصنوبر، والأعشاب، يقدم مع جانب من اللبن الزبادي المنعش.",
      price: "₪20",
      image: dish3,
      tags: [faLeaf],
      seasonal: false,
    },
    {
      id: 4,
      name: "حمص مع خبز البيتا",
      description: "حمص كريمي يقدم مع خبز البيتا الطازج، مزين بزيت الزيتون والبابريكا.",
      price: "₪15",
      image: dish4,
      tags: [faSeedling],
      seasonal: false,
    },
  ],
  'البرغر': [
    {
      id: 5,
      name: "برجر لحم بقر كلاسيكي",
      description: "فطيرة لحم بقر طرية مغطاة بالخس، الطماطم، وجبن الشيدر، تقدم على خبز محمص.",
      price: "₪40",
      image: dish5,
      tags: [faHamburger],
      seasonal: false,
    },
    {
      id: 6,
      name: "برجر دجاج سيزر",
      description: "صدر دجاج مشوي مع سلطة سيزر وباكون مقرمش، يقدم على خبز طري.",
      price: "₪45",
      image: dish6,
      tags: [faDrumstickBite],
      seasonal: false,
    },
  ],
  'السلطات': [
    {
      id: 7,
      name: "سلطة يونانية",
      description: "مزيج منعش من جبنة الفيتا، الزيتون، الطماطم، الخيار، والبصل، متبلة بالأوريغانو.",
      price: "₪30",
      image: dish7,
      tags: [faLeaf],
      seasonal: false,
    },
    {
      id: 8,
      name: "سلطة سيزر",
      description: "خس روماني مقرمش مع صلصة سيزر، خبز محمص، وجبن بارميزان.",
      price: "₪35",
      image: dish8,
      tags: [faLeaf],
      seasonal: false,
    },
  ],
  'المعكرونة': [
    {
      id: 9,
      name: "سباغيتي بولونيز",
      description: "باستا إيطالية كلاسيكية تقدم مع صلصة لحم غنية ولذيذة.",
      price: "₪50",
      image: dish9,
      tags: [faUtensils],
      seasonal: false,
    },
    {
      id: 10,
      name: "بيني أرابياتا",
      description: "باستا بيني مغطاة بصلصة طماطم حارة مع ثوم ورقائق الفلفل الحار.",
      price: "₪45",
      image: dish10,
      tags: [faPepperHot],
      seasonal: false,
    },
  ],
  'البيتزا': [
    {
      id: 11,
      name: "بيتزا مارغريتا",
      description: "بيتزا كلاسيكية مغطاة بالطماطم الطازجة، جبن الموزاريلا، والريحان.",
      price: "₪60",
      image: dish11,
      tags: [faPizzaSlice],
      seasonal: false,
    },
    {
      id: 12,
      name: "بيتزا بيبروني",
      description: "بيتزا مفضلة مغطاة بشرائح البيبروني الحارة وجبن الموزاريلا.",
      price: "₪65",
      image: dish1,
      tags: [faPizzaSlice],
      seasonal: false,
    },
  ],
  'الوجبات العالمية': [
    {
      id: 13,
      name: "طبق سوشي",
      description: "تشكيلة من لفائف السوشي الطازجة، النيغيري، والساشيمي.",
      price: "₪80",
      image: dish2,
      tags: [faFish],
      seasonal: false,
    },
    {
      id: 14,
      name: "دجاج تيكا ماسالا",
      description: "قطع دجاج طرية في صلصة كريمية وحارة على أساس الطماطم، تقدم مع أرز بسمتي.",
      price: "₪70",
      image: dish3,
      tags: [faDrumstickBite],
      seasonal: false,
    },
  ],
  'الحلويات': [
    {
      id: 15,
      name: "كعكة الشوكولاتة السائلة",
      description: "كعكة شوكولاتة دافئة مع مركز سائل، تقدم مع آيس كريم الفانيليا.",
      price: "₪30",
      image: dish4,
      tags: [faIceCream],
      seasonal: false,
    },
    {
      id: 16,
      name: "بقلاوة",
      description: "معجنات حلوة مصنوعة من طبقات من الفيلو محشوة بالمكسرات ومحلّاة بالعسل.",
      price: "₪25",
      image: dish5,
      tags: [faBreadSlice],
      seasonal: false,
    },
  ],
  'الآيس كريم': [
    {
      id: 17,
      name: "آيس كريم الفانيليا",
      description: "آيس كريم كلاسيكي مصنوع من حبوب الفانيليا الحقيقية.",
      price: "₪20",
      image: dish6,
      tags: [faIceCream],
      seasonal: false,
    },
    {
      id: 18,
      name: "سندويش الشوكولاتة",
      description: "آيس كريم الشوكولاتة الغني مغطى بصوص الشوكولاتة الساخن",
      price: "₪20",
      image: dish6,
      tags: [faLemon],
      seasonal: false,
    },
  ],
  'اللحوم': [
    {
      id: 19,
      name: "آيس كريم الفانيليا",
      description: "آيس كريم كلاسيكي مصنوع من حبوب الفانيليا الحقيقية.",
      price: "₪20",
      image: dish6,
      tags: [faHotdog],
      seasonal: false,
    },
    {
      id: 20,
      name: "سندويش الشوكولاتة",
      description: "آيس كريم الشوكولاتة الغني مغطى بصوص الشوكولاتة الساخن",
      price: "₪20",
      image: dish6,
      tags: [faBacon],
      seasonal: false,
    },
  ],
  'المشروبات': [
    {
      id: 21,
      name: "آيس كريم الفانيليا",
      description: "آيس كريم كلاسيكي مصنوع من حبوب الفانيليا الحقيقية.",
      price: "₪20",
      image: dish6,
      tags: [faCoffee],
      seasonal: false,
    },
    {
      id: 22,
      name: "سندويش الشوكولاتة",
      description: "آيس كريم الشوكولاتة الغني مغطى بصوص الشوكولاتة الساخن",
      price: "₪20",
      image: dish6,
      tags: [faCocktail],
      seasonal: false,
    },
  ]
};

export default MenuDataArabic;