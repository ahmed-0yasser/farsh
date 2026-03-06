# 🛒 FreshCart - E-Commerce React Application

A modern, fully-featured e-commerce web application built with React.js. Browse products, manage your shopping cart, and enjoy a seamless shopping experience.

## 🌐 Live Demo

[View Live Demo](https://freshcart-ecommerce.vercel.app)

## ✨ Features

- **🔐 Authentication** — Register & Login with form validation (Formik + Yup)
- **🏠 Home Page** — Featured products with image slider and category carousel
- **📦 Products** — Browse all products with ratings and prices
- **🔍 Product Details** — View detailed product information with images
- **🛒 Shopping Cart** — Add, remove, update quantities with real-time feedback
- **📂 Categories** — Browse products by category
- **🏷️ Brands** — Explore products by brand
- **🔒 Protected Routes** — Authenticated access to cart, products, and more
- **📱 Responsive Design** — Works on all devices
- **🌐 Offline Detection** — Shows notification when network is down
- **🔔 Toast Notifications** — Visual feedback for cart actions

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI Framework |
| **React Router v6** | Client-side Routing |
| **React Query** | Server State Management |
| **Context API** | Client State Management |
| **Axios** | HTTP Client |
| **Formik + Yup** | Form Handling & Validation |
| **Bootstrap 5** | CSS Framework |
| **React Slick** | Image Carousels |
| **React Hot Toast** | Notifications |
| **Font Awesome** | Icons |

## 📁 Project Structure

```
src/
├── Assats/                  # Static assets (images, logos)
├── Components/
│   ├── About/               # Featured products grid
│   ├── Brands/              # Brands listing page
│   ├── Cart/                # Shopping cart with CRUD
│   ├── Categoryslider/      # Category carousel
│   ├── Catgories/           # Categories listing page
│   ├── Footer/              # App footer
│   ├── Home/                # Home page
│   ├── Layout/              # Main layout wrapper
│   ├── Login/               # Login form
│   ├── MainSlider/          # Hero image slider
│   ├── Navbar/              # Navigation with cart badge
│   ├── NotFound/            # 404 page
│   ├── ProdactDitals/       # Product details page
│   ├── Products/            # Products page
│   ├── Protected/           # Auth route guard
│   └── Register/            # Registration form
├── Context/
│   ├── CartContext.js        # Cart state & API calls
│   ├── CounterContext.js     # Counter state
│   └── UserContext.js        # Auth state
├── App.js                    # Root component & routes
└── index.js                  # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmed-0yasser/e-commerce.git
   cd e-commerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 🔗 API

This app uses the [Route E-Commerce API](https://ecommerce.routemisr.com):

- `POST /api/v1/auth/signup` — Register
- `POST /api/v1/auth/signin` — Login
- `GET /api/v1/products` — Get products
- `GET /api/v1/products/:id` — Get product details
- `GET /api/v1/categories` — Get categories
- `GET /api/v1/brands` — Get brands
- `POST /api/v1/cart` — Add to cart
- `GET /api/v1/cart` — Get cart
- `PUT /api/v1/cart/:id` — Update quantity
- `DELETE /api/v1/cart/:id` — Remove item

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by **Ahmed Yasser**
