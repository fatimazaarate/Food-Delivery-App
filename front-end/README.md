# FoodyNow

FoodyNow is a modern, responsive food delivery application built with React. This application allows users to browse menu items, add them to their cart, and place orders seamlessly.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Setup](#setup)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

The Food Delivery App is a web application designed to provide users with a smooth and intuitive food ordering experience. It includes features such as user authentication, a dynamic menu, a cart system, and responsive design.

## Features

- **Navigation Bar:** A responsive navigation bar for easy access to different pages.
- **Pages:** Includes Home, Cart, Place Order.
- **React Router Setup:** For seamless navigation between different components and pages.
- **Website Header:** A styled header for branding and navigation.
- **Menu Items:** Dynamic menu items with details and images.
- **Food List Component:** Displays a list of available food items.
- **Footer:** A footer with additional informations.
- **Add-to-Cart Component:** Allows users to add items to their cart.
- **Responsive Design:** Ensures the application works well on various screen sizes.
- **Authentication:** Sign In and Sign Up components for user management.
- **Cart Page:** A page to view and manage items in the cart.
- **Place Order Page:** A page to review and place an order.

## Setup

To get started with the Food Delivery App, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone `https://github.com/fatimazaarate/Food-Delivery-App`
   ```

2. **Navigate to the project directory:**

   ```bash
   cd front-end
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the app.

## Folder Structure

The project is organized as follows:

```
food-delivery-app/
│
├──front-end
│
├── public/
│ └── banner.jpeg
| └── icons8-serve-64.png
│
├── src/
│ ├── assets/
│ │ ├── Burguers.jpg
│ │ ├── Drinks.jpg
│ │ ├── assets.js
│ │ └──
│ ├── components/
│ │ ├── AppDownload/
│ │ │ └── AppDownload.jsx
│ │ │ └── AppDownload.css
│ │ ├── FoodDisplay/
│ │ │ └── FoodDisplay.jsx
│ │ │ └── FoodDisplay.css
│ │ ├── FoodItems/
│ │ │ └── FoodItems.jsx
│ │ │ └── FoodItems.css
│ │ ├── Footer/
│ │ │ └── Footer.jsx
│ │ │ └── Footer.css
│ │ ├── Header/
│ │ │ └── Header.jsx
│ │ │ └── Header.css
│ │ ├── Login/
│ │ │ └── Login.jsx
│ │ │ └── Login.css
│ │ ├── Navbar/
│ │ │ └── Navbar.jsx
│ │ │ └── Navbar.css
│ │ └── OurMenu/
│ │ └── OurMenu.jsx
│ │ └── OurMenu.css
│ ├── context/
│ │ └── storeContext.jsx
│ ├── pages/
│ │ ├── Cart/
│ │ │ └── Cart.jsx
│ │ │ └── Cart.css
│ │ ├── Home/
│ │ │ └── Home.jsx
│ │ │ └── Home.css
│ │ ├── PlaceOrder/
│ │ │ └── PlaceOrder.jsx
│ │ │ └── PlaceOrder.css
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Usage

- **Navigation Bar:** Contains links to Home, Menu, Cart, and Sign in/up.
- **Pages:** Render content based on the route.
- **Food List Component:** Shows all available food items.
- **Footer:** Provides additional links and information.
- **Add-to-Cart:** Allows adding food items to the cart.
- **Sign In / Sign Up:** Manage user authentication.
- **Cart Page:** Displays the items added to the cart.
- **Place Order Page:** Allows users to review and finalize their orders.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.
