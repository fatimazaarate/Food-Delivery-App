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
- **Pages:** Includes Home, Cart, Place Order, and Sign In/Sign Up pages.
- **React Router Setup:** For seamless navigation between different components and pages.
- **Website Header:** A styled header for branding and navigation.
- **Menu Items:** Dynamic menu items with details and images.
- **Food List Component:** Displays a list of available food items.
- **Footer:** A footer with additional information and links.
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
├── front-end/
│ ├── public/
│ │ └── header_img.png
│ │
│ ├── src/
│ │ ├── assets/
│ │ │ ├── icons8-add-to-cart-50.png
│ │ │ ├── icons8-chercher.svg
│ │ │ └── restaurant.png
│ │ ├── components/
│ │ │ ├── Header/
│ │ │ │ └── Header.jsx
│ │ │ └── Navbar/
│ │ │ └── Navbar.jsx
│ │ ├── pages/
│ │ │ ├── Cart/
│ │ │ │ └── Cart.jsx
│ │ │ ├── Home/
│ │ │ │ └── Home.jsx
│ │ │ ├── PlaceOrder/
│ │ │ │ └── PlaceOrder.jsx
│ │ │ └── SignIn/
│ │ │ └── SignIn.jsx
│ │ ├── App.jsx
│ │ └── index.jsx
│ │
│ ├── .gitignore
│ ├── package.json
│ └── vite.config.js
│
└── back-end/ # For Backend Collaborators
```

## Usage

- **Navigation Bar:** Contains links to Home, Cart, and other pages.
- **Pages:** Render content based on the route.
- **Food List Component:** Shows all available food items.
- **Footer:** Provides additional links and information.
- **Add-to-Cart:** Allows adding food items to the cart.
- **Sign In / Sign Up:** Manage user authentication.
- **Cart Page:** Displays the items added to the cart.
- **Place Order Page:** Allows users to review and finalize their orders.

## Contributing

We welcome contributions from the community! If you would like to contribute to this project, please follow these steps:

1. **Fork the Repository:** Click the "Fork" button on the top right of the repository page to create a copy of the repository under your account.

2. **Clone Your Fork:** Clone your forked repository to your local machine.

   ```bash
   git clone <your-fork-repository-url>
   ```

3. **Create a New Branch:** Create a new branch for your changes.

   ```bash
   git checkout -b feature-branch-name
   ```

4. **Make Changes:** Implement your changes in the new branch.

5. **Commit Your Changes:** Commit your changes with a descriptive message.

   ```bash
   git add .
   git commit -m "Description of changes"
   ```

6. **Push to Your Fork:** Push your changes to your forked repository.

   ```bash
   git push origin feature-branch-name
   ```

7. **Submit a Pull Request:** Go to the original repository and submit a pull request from your forked repository.

### Collaborators

For backend contributions, please contact us directly to be added as a collaborator. We are looking for skilled developers to help enhance and maintain the backend of this project.

Thank you for your interest in contributing!
