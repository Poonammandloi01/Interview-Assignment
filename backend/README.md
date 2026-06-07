# Product Management Backend API

This is the backend service for a **Product Management System** built using the MERN stack.

It handles authentication, product management, and user profile features using secure JWT-based authorization.

---

##  Features

-  User Registration (Signup)
-  User Login (JWT Authentication)
-  Password hashing using bcrypt
-  Full Product CRUD operations
-  User Profile (View & Update)
-  Protected Routes using JWT middleware
-  MongoDB database integration

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (Authentication)
- bcryptjs (Password hashing)
- dotenv (Environment variables)
- cors (Cross-origin support)

---

## Project Structure
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── .env
├── server.js
└── package.json


---

##  Installation & Setup

### Clone the repository

git clone repo

Move into backend folder
cd backend

Install dependencies
npm i

Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start the server
npm run dev


http://localhost:5000



* API Endpoints
Authentication
POST /api/auth/signup → Register new user
POST /api/auth/login → Login user & get JWT token

Products
GET /api/products → Get all products
GET /api/products/:id → Get single product
POST /api/products → Create product (Protected)
PUT /api/products/:id → Update product (Protected)
DELETE /api/products/:id → Delete product (Protected)   

User Profile
GET /api/users/profile → Get user profile (Protected)
PUT /api/users/profile → Update user profile (Protected)

Authentication Flow
User logs in using email & password
Server generates JWT token
Token is sent to frontend
Frontend stores token in localStorage
Every request sends token in headers:
Authorization: Bearer <token>


Database
MongoDB Atlas is used as database
Mongoose handles schema & connection
Deployment
Backend: Render
Database: MongoDB Atlas
Frontend: Vercel