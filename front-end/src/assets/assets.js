import panier from "./panier.png";
import ratingStars from "./rating.png";
import burger from "./Burgers.jpg";
import pizza from "./Pizza.jpg";
import pasta from "./pasta.jpg";
import grilled_dishes from "./Grilled Dishes.jpg";
import salad from "./salads.jpg";
import sushi from "./sushi.jpg";
import dessert from "./Desserts.jpg";
import drinks from "./Drinks.jpg";
import salad_1 from "./Caesar Salad.jpg";
import salad_2 from "./Greek-Salad.jpg";
import salad_3 from "./Cobb Salad.jpg";
import salad_4 from "./Caprese Salad.jpg";
import burger_1 from "./Classic_Cheeseburger.jpg";
import burger_2 from "./Bacon Burger.jpeg";
import burger_3 from "./Veggie Burger.webp";
import burger_4 from "./BBQ Burger.jpg";
import pizza_1 from "./Margherita Pizza.jpg";
import pizza_2 from "./Pepperoni Pizza.webp";
import pizza_3 from "./BBQ Chicken Pizza.jpg";
import pizza_4 from "./Veggie-Pizza.jpg";
import pasta_1 from "./Spaghetti Carbonara.jpg";
import pasta_2 from "./Penne Arrabbiata.webp";
import pasta_3 from "./Fettuccine Alfredo.jpg";
import pasta_4 from "./Lasagna Bolognese.webp";
import grilled_1 from "./Grilled Chicken.jpg";
import grilled_2 from "./Grilled-Salmon.jpg";
import grilled_3 from "./Grilled Steak.jpg";
import grilled_4 from "./Grilled Vegetables.jpg";
import sushi_1 from "./California Roll.webp";
import sushi_2 from "./Spicy_Tuna_Roll.jpg";
import sushi_3 from "./Salmon Nigiri.jpg";
import sushi_4 from "./Eel Avocado Roll.webp";
import dessert_1 from "./ChocolateCake.jpg";
import dessert_2 from "./Cheesecake.jpg";
import dessert_3 from "./Tiramisu.jpg";
import dessert_4 from "./Apple Pie.jpeg";
import drink_1 from "./Lemonade.jpg";
import drink_2 from "./Iced Coffee.jpg";
import drink_3 from "./Green Tea.avif";
import drink_4 from "./Smoothie.webp";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import playstore from "./playstore.png";
import applestore from "./apple-store.png";
import xbutton from "./x-button.png";

export const assets = {
  panier,
  ratingStars,
  facebook,
  instagram,
  linkedin,
  playstore,
  applestore,
  xbutton,
};

export const menu_items = [
  {
    menu_name: "Burgers",
    menu_img: burger,
  },
  {
    menu_name: "Pizza",
    menu_img: pizza,
  },
  {
    menu_name: "Pasta",
    menu_img: pasta,
  },
  {
    menu_name: "Barbecue",
    menu_img: grilled_dishes,
  },
  {
    menu_name: "Salads",
    menu_img: salad,
  },
  {
    menu_name: "Sushi",
    menu_img: sushi,
  },
  {
    menu_name: "Desserts",
    menu_img: dessert,
  },
  {
    menu_name: "Drinks",
    menu_img: drinks,
  },
];

export const food_List = [
  {
    id: 1,
    name: "Caesar Salad",
    image: salad_1,
    price: 80,
    category: "Salads",
  },
  {
    id: 2,
    name: "Greek Salad",
    image: salad_2,
    price: 70,
    category: "Salads",
  },
  {
    id: 3,
    name: "Cobb Salad",
    image: salad_3,
    price: 100,
    category: "Salads",
  },
  {
    id: 4,
    name: "Caprese Salad",
    image: salad_4,
    price: 90,
    category: "Salads",
  },
  {
    id: 5,
    name: "Classic Cheeseburger",
    image: burger_1,
    price: 80,
    category: "Burgers",
  },
  {
    id: 6,
    name: "Bacon Burger",
    image: burger_2,
    price: 100,
    category: "Burgers",
  },
  {
    id: 7,
    name: "Veggie Burger",
    image: burger_3,
    price: 80,
    category: "Burgers",
  },
  {
    id: 8,
    name: "BBQ Burger",
    image: burger_4,
    price: 90,
    category: "Burgers",
  },
  {
    id: 9,
    name: "Margherita Pizza",
    image: pizza_1,
    price: 100,
    category: "Pizza",
  },
  {
    id: 10,
    name: "Pepperoni Pizza",
    image: pizza_2,
    price: 140,
    category: "Pizza",
  },
  {
    id: 11,
    name: "BBQ Chicken Pizza",
    image: pizza_3,
    price: 130,
    category: "Pizza",
  },
  {
    id: 12,
    name: "Veggie Pizza",
    image: pizza_4,
    price: 120,
    category: "Pizza",
  },
  {
    id: 13,
    name: "Spaghetti Carbonara",
    image: pasta_1,
    price: 130,
    category: "Pasta",
  },
  {
    id: 14,
    name: "Penne Arrabbiata",
    image: pasta_2,
    price: 110,
    category: "Pasta",
  },
  {
    id: 15,
    name: "Fettuccine Alfredo",
    image: pasta_3,
    price: 140,
    category: "Pasta",
  },
  {
    id: 16,
    name: "Lasagna Bolognese",
    image: pasta_4,
    price: 150,
    category: "Pasta",
  },
  {
    id: 17,
    name: "Grilled Chicken",
    image: grilled_1,
    price: 120,
    category: "Barbecue",
  },
  {
    id: 18,
    name: "Grilled Salmon",
    image: grilled_2,
    price: 170,
    category: "Barbecue",
  },
  {
    id: 19,
    name: "Grilled Steak",
    image: grilled_3,
    price: 190,
    category: "Barbecue",
  },
  {
    id: 20,
    name: "Grilled Vegetables",
    image: grilled_4,
    price: 100,
    category: "Barbecue",
  },
  {
    id: 21,
    name: "California Roll",
    image: sushi_1,
    price: 80,
    category: "Sushi",
  },
  {
    id: 22,
    name: "Spicy Tuna Roll",
    image: sushi_2,
    price: 100,
    category: "Sushi",
  },
  {
    id: 23,
    name: "Salmon Nigiri",
    image: sushi_3,
    price: 120,
    category: "Sushi",
  },
  {
    id: 24,
    name: "Eel Avocado Roll",
    image: sushi_4,
    price: 110,
    category: "Sushi",
  },
  {
    id: 25,
    name: "Chocolate Cake",
    image: dessert_1,
    price: 60,
    category: "Desserts",
  },
  {
    id: 26,
    name: "Cheesecake",
    image: dessert_2,
    price: 70,
    category: "Desserts",
  },
  {
    id: 27,
    name: "Tiramisu",
    image: dessert_3,
    price: 80,
    category: "Desserts",
  },
  {
    id: 28,
    name: "Apple Pie",
    image: dessert_4,
    price: 50,
    category: "Desserts",
  },
  {
    id: 29,
    name: "Lemonade",
    image: drink_1,
    price: 30,
    category: "Drinks",
  },
  {
    id: 30,
    name: "Iced Coffee",
    image: drink_2,
    price: 40,
    category: "Drinks",
  },
  {
    id: 31,
    name: "Moroccan Tea",
    image: drink_3,
    price: 20,
    category: "Drinks",
  },
  {
    id: 32,
    name: "Smoothie",
    image: drink_4,
    price: 50,
    category: "Drinks",
  },
];
