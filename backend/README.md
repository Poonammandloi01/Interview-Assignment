# Product Management Backend API

This is the backend service for the Product Management application built using the MERN stack. It provides authentication, product management, and profile management APIs.

## Features

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcrypt
* Product CRUD Operations
* User Profile View and Update
* MongoDB Database Integration
* Protected Routes using JWT Middleware

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcryptjs
* dotenv
* cors

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

## Installation

1. Clone the repository

git clone <repository-url>

2. Navigate to backend folder

cd backend

3. Install dependencies

npm install

4. Create a .env file

PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

5. Start the server

npm run dev

Server will run on:

http://localhost:5000

## API Endpoints

### Authentication

POST /api/auth/signup

Register a new user.

POST /api/auth/login

Login user and receive JWT token.

### Products

GET /api/products

Get all products.

GET /api/products/:id

Get a single product by ID.

POST /api/products

Create a new product (Protected Route).

PUT /api/products/:id

Update a product (Protected Route).

DELETE /api/products/:id

Delete a product (Protected Route).

### User Profile

GET /api/users/profile

Get logged-in user profile (Protected Route).

PUT /api/users/profile

Update logged-in user profile (Protected Route).

## Authentication

Protected routes require a JWT token in the request header.

Authorization: Bearer <your_token>

## Database

MongoDB is used as the primary database. The application is connected using Mongoose.

## Author

Poonam Mandloi

Built as part of a MERN Stack Developer technical assignment to demonstrate backend development, authentication, database integration, and REST API design.
