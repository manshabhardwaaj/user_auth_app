# User Authentication App

## Overview
User Authentication App is a web application designed to demonstrate a complete and secure user authentication workflow. The project covers the core requirements of user identity management, including user registration, login, logout, and access to protected routes. It is structured to clearly separate backend authentication logic from the frontend user interface, making it easy to understand, extend, and reuse as a starter template for larger applications.
This repository is intended for learners and developers who want a clean, practical reference implementation of modern authentication practices.

## Features
* User registration with secure password handling
* User login with authentication validation
* Logout functionality
* Protected routes accessible only to authenticated users
* Clear separation of frontend and backend concerns
* Scalable and modular project structure

## Tech Stack
### Backend
* Node.js– JavaScript runtime environment
* Express.js – Web framework for building RESTful APIs
* MongoDB – NoSQL database for storing user data
* Mongoose – ODM for MongoDB
* JWT (JSON Web Tokens) – Token-based authentication
* bcrypt– Secure password hashing
* dotenv – Environment variable management
* CORS – Cross-origin resource sharing configuration
### Frontend
* HTML / CSS / JavaScript (or React, if extended)
* Fetch API / Axios– Communication with backend APIs
* Simple UI for user interaction (register, login, protected views)

## Project Structure
user_auth_app/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js            # Database connection
│   │   ├── controllers/         # Request handling logic
│   │   ├── models/              # Mongoose schemas
│   │   ├── routes/              # API route definitions
│   │   ├── middleware/          # Authentication & route protection
│   │   └── app.js               # Express app configuration
│   │
│   ├── server.js                # Server entry point
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/          # UI components
│   │   ├── services/            # API service calls
│   │   └── App.js               # Main frontend entry
│   └── package.json
│
└── README.md

## Backend Explanation

The backend is responsible for handling all authentication logic and data management.
* **User Model**: Defines the user schema, including email/username and hashed password.
* **Authentication Controller**: Handles registration, login, and token generation.
* **JWT Authentication**: On successful login, a JWT is generated and sent to the client. This token is used to access protected routes.
* **Middleware**: Verifies JWT tokens before allowing access to protected endpoints.
* **Protected Routes**: Routes that require a valid authentication token to be accessed.

Passwords are never stored in plain text. They are hashed using bcrypt before being saved to the database.

## Frontend Explanation
The frontend provides the user interface for interacting with the authentication system.
* Registration and login forms collect user credentials.
* API requests are sent to the backend for authentication.
* Authentication tokens are stored securely (commonly in memory or local storage, depending on implementation).
* Protected pages are only accessible when the user is authenticated.

The frontend is intentionally kept simple to focus on authentication flow rather than UI complexity.

## Environment Variables

Create a `.env` file in the backend directory and define the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

## Installation and Setup

1. Clone the repository:
git clone https://github.com/manshabhardwaaj/user_auth_app.git
  
2. Navigate to the backend directory and install dependencies:
cd backend
npm install
   
3. Configure environment variables in `.env`.

4. Start the backend server:
npm start
   
5. Navigate to the frontend directory, install dependencies, and start the frontend server:
npm run dev

## API TESTING WITH POSTMAN 
All authentication endpoints in this project were tested using Postman to verify request handling, authentication flow, and response structure.
## Login API Test
## Endpoint
POST /api/auth/login
## Description
This endpoint authenticates an existing user and returns a JWT token along with basic user details. The token is required to access protected routes.
## Request Configuration (Postman)
Method: POST
URL: http://localhost:5000/api/auth/login

Headers:

Content-Type: application/json

Body (raw JSON):
{
  "email": "mansha@test.com",
  "password": "mypassword123"
}

Successful Response
{
  "token": "JWT_TOKEN",
  "user": {
    "id": "695e10f762b8f1147cb83215",
    "name": "Mansha",
    "email": "mansha@test.com",
    "role": "user"
  }
}

<img width="1915" height="1072" alt="postman c" src="https://github.com/user-attachments/assets/8859ed0d-46e7-49b5-9b6d-7d24442ddd3f" />

## Use Cases
* Learning authentication fundamentals
* Starter template for web applications
* Practice project for Node.js, Express, and MongoDB
* Foundation for role-based access control and advanced security features

## Future Improvements
* Improved frontend UI
* Input validation and rate limiting
* OAuth-based authentication

## Conclusion
This project provides a clear and practical implementation of user authentication in a full-stack environment. 
It emphasizes security, modularity, and clarity, making it suitable both for learning purposes and as a base for production-ready applications.


