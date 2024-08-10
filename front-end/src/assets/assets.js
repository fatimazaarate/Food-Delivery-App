import logo from "./restaurant.png";
import search_icon from "./icons8-chercher.svg";
import panier from "./icons8-add-to-cart-50.png";
import burger from "./Burgers.jpg";
import pizza from "./Pizza.jpg";
import pasta from "./pasta.jpg";
import grilled_dishes from "./Grilled Dishes.jpg";
import salad from "./salads.jpg";
import sushi from "./sushi.jpg";
import dessert from "./Desserts.jpg";
import drinks from "./Drinks.jpg";

export const assets = {
  logo,
  search_icon,
  panier,
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
    menu_name: "Grilled Dishes",
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
