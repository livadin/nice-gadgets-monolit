# Monolit Digital Store Website
The **Monolit Digital Store** is a modern e-commerce web application for selling gadgets such as smartphones, tablets, and accessories.
The project is built using Atomic Design principles, fully responsive layout, and a modern JavaScript stack.
### Live Demo
Experience the live website: [Monolit Digital Store Demo](https://fs-aug25-monolit-digital.github.io/nice-gadgets-monolit/)
## ✨ Features — Detailed Overview

### ✅ Product Catalog (Phones / Tablets / Accessories)

The application provides a well-structured and user-friendly product catalog divided into three main categories:

- **Phones**
- **Tablets**
- **Accessories**

Each category has its own dedicated page displaying a list of products. All product data is retrieved from local JSON files stored in the `public/gadgets` folder. Every product is displayed using a reusable `ProductCard` component, which includes:

- Product image  
- Product name and model  
- Price and full price (if discounted)  
- Key specifications (screen size, capacity, RAM)  
- Action buttons (Add to Cart, Add to Favourites)  

This modular approach makes the catalog easy to scale and maintain.

---

### ✅ Product Filtering and Sorting

Users can sort products by:

- **Newest**
- **Oldest**
- **Cheapest**
- **Most expensive**

This feature is implemented using:

- URL **search parameters** (`useSearchParams`)
- Controlled sorting logic
- A custom hook responsible for syncing sorting with the URL

As a result, sorting is **persistent** and can be shared simply by copying the page URL.

---

### ✅ Pagination

Products are split into pages to improve performance and user experience.

Pagination features include:

- Dynamic page calculation based on selected items per page  
- Navigation buttons (Previous / Next, Page numbers)  
- “...” (ellipsis) for better UX with large page ranges  
- Smooth page switching  
- Automatic scroll to top on page change  

Pagination state is synchronized with URL parameters, so any page can be opened directly via a link.

---

### ✅ Add to Cart

Users can add products to the shopping cart with a single click.

Cart functionality includes:

- Product quantity control (increase / decrease)
- Total price calculation
- Removing products from the cart
- Product counter in the header
- Persisted state in `localStorage`

The cart is powered by a **Zustand store**, which allows global access across the entire application.

---

### ✅ Add to Favourites

Users can save products to their favourites list using a heart icon.

Favourites functionality includes:

- Persistent storage via `localStorage`
- Visual indicators for favourite products
- Favourites counter in the header
- Dedicated Favourites page

This feature is also managed by a **Zustand store** for consistency and performance.

---

### ✅ Toast / Notification System

The application includes a custom notification system to give instant feedback, for example:

- “Product added to cart”
- “Product removed from favourites”
- Error and info messages

Features of the notification system:

- Built with **Radix UI Toast**
- Supports notification types: `success`, `error`, `info`
- Smooth open/close animations
- Auto-close after a specific duration
- Optional manual close button

This significantly improves the overall user experience.

---

### ✅ Skeleton Loaders & Main Loader

To prevent blank screens during data fetching, two different loaders are used:

1. **Main Loader**  
   Displayed while entire pages are loading.

2. **Skeleton Loader**  
   Displayed inside product cards and product pages while content is loading.

This creates a smooth and professional loading experience.

---

### ✅ Responsive Design (Mobile / Tablet / Desktop)

The application is fully responsive and optimized for all screen sizes:

- **Mobile:** 320px+
- **Tablet:** 768px+
- **Desktop:** 1200px+

Using Tailwind CSS, the layout adapts in real-time by changing:

- Grid structure
- Font sizes
- Image sizes
- Navigation layout

The design follows a **mobile-first** approach.

---

### ✅ Persisted State (localStorage)

The application saves important user data in `localStorage`, including:

- Cart products
- Favourite products
- Current filters / page via URL parameters

This ensures that the user's choices are preserved even after refreshing the page.

## 🛠 Technologies used

### Core
- **React + TypeScript** – A modern framework and typed language combo used to build a scalable, maintainable, and type-safe user interface.
- **Tailwind CSS v4** – A utility-first CSS framework used for building responsive and consistent UI design with minimal custom CSS.

---

### State Management & Data
- **Zustand** – A lightweight and flexible state management library used to handle global states such as cart, favourites, filters, and notifications.
---

### Routing & Navigation
- **React Router** – Handles client-side routing and navigation between pages such as Home, Products, Product Details, Cart, and Favourites.
---

### UI / UX & Components
- **Atomic Design Methodology** – Components are structured into atoms, molecules, organisms, templates, and pages for better scalability and reusability.
- **Radix UI – Used for accessible, unstyled UI primitives and customizable components (e.g., toast notifications, buttons, modals).
- **Swiper.js** – Implements responsive and interactive sliders for product showcases.
- **Classnames (cn)** – Simplifies conditional class handling for dynamic styling.

---

### Architecture & Structure
- **Atomic Design** – Enforces a structured, scalable, and maintainable component hierarchy.
---

### Development & Deployment
- **Git / GitHub** – Version control and collaboration within the team.
- **Vite** – A fast build tool and development server that significantly improves performance and hot module replacement speed during development.
- **GitHub Actions (CI/CD)** – Automated testing, linting, and deployment pipelines.
- **ESLint & Prettier** – Maintain consistent code style and quality.
- **Husky (pre-commit hooks)** – Prevents bad commits and enforces formatting and linting rules.
- **GitHub Pages** – Used as the platform for hosting and deploying the static website.

## 🚀 Getting Started

Follow the instructions below to run the project locally on your machine.

### ✅ Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (version 18+ recommended)
- **npm** (or **yarn** / **pnpm**)
- **Git** – for cloning the repository

To check if these tools are installed, run:

```bash
node -v
npm -v
git --version
```

### 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/fs-aug25-Monolit-Digital/nice-gadgets-monolit.git
cd nice-gadgets-monolit
```
2. **Install dependencies:**
```bash
npm install  
*or*  
yarn install  
```
This will download and install all required project dependencies listed in the package.json file.

3. **Run the project locally:**
 ```bash
npm run dev
```

