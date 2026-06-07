# Product Management App (Frontend)

Hey 👋  
This is a simple yet powerful Product Management web app built using React + Vite.

It allows users to create accounts, login securely, and manage products easily with a clean UI.

---

## Live App
👉 https://interview-assignment-rho-six.vercel.app/?_vercel_share=9eXMRxsrcrY4HBwVeKkDbw3A1fBVnv7a

---

## What this project does

Basically, this app helps you:

- Create a new account (Signup)
- Login securely using JWT authentication
- View all products in a nice UI
- Add new products
- Edit existing products
- Delete products (with confirmation)
- View product details
- Update your profile

---

## Tech Stack

- React.js (Frontend)
- Vite (Build tool)
- React Router DOM (Routing)
- Axios (API calls)
- Tailwind CSS (Styling)
- JWT (Authentication)

---

##  Authentication Flow

- When you login, backend sends a JWT token
- That token is saved in localStorage
- Every API request automatically sends the token
- If token is missing → user is redirected to login page

---


---

## How to run locally

Just follow these simple steps:

###  Install dependencies

npm install

npm run dev

http://localhost:5173

Create a .env file:
VITE_API_URL=http://localhost:5000/api

For production:
VITE_API_URL=https://your-backend.onrender.com/api

