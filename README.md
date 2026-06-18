# UBER Clone Backend Documentation

## Overview
This repository contains the backend for an Uber-like clone application with basic user authentication. The backend is built with Node.js, Express, MongoDB, and JSON Web Tokens (JWT). Authentication includes user registration, login, profile access, and logout with token blacklist support.

## Features
- User registration with password hashing
- User login with JWT token generation
- Protected profile route using middleware
- Logout functionality with blacklisted token handling
- Request validation using `express-validator`

## Tech Stack
- Node.js
- Express
- MongoDB / Mongoose
- bcrypt for password hashing
- JSON Web Token (`jsonwebtoken`) for auth tokens
- cookie-parser for token cookies
- express-validator for request validation

## Backend Structure
- `app.js` - Express app configuration and middleware setup
- `server.js` - HTTP server bootstrap and database connection
- `controllers/user.controller.js` - Authentication and user route handlers
- `routes/user.routes.js` - User routes and validation rules
- `middlewares/auth.middleware.js` - JWT verification and protected route handling
- `models/user.models.js` - User schema, password hashing, and token generation
- `models/blackListToken.model.js` - Blacklisted token schema for logout
- `services/user.service.js` - User creation service
- `db/db.js` - Database connection logic

## Environment Variables
Create a `.env` file in the `Backend` folder with the following values:

```env
PORT=3000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

## Setup
1. Open a terminal in `Backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. The backend runs on `http://localhost:3000` by default.

## Authentication Flow
1. **Register**: The user submits `fullname`, `email`, and `password`.
2. The password is hashed using `bcrypt`.
3. A JWT is generated using `JWT_SECRET` and returned to the client.
4. **Login**: The user submits `email` and `password`.
5. The backend verifies the password and returns a new JWT.
6. **Protected routes**: Requests must include the JWT in either a cookie named `token` or an `Authorization` header.
7. **Logout**: The token is stored in a blacklist collection, so it cannot be reused.

## API Endpoints

### Register New User
- URL: `POST /user/register`
- Body:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Success response:
  - Status: `201`
  - Body:
    ```json
    {
      "token": "<jwt-token>",
      "user": {
        "_id": "...",
        "fullname": { "firstname": "John", "lastname": "Doe" },
        "email": "john@example.com"
      }
    }
    ```
- Validation rules:
  - `email` must be a valid email
  - `fullname.firstname` minimum length 3
  - `password` minimum length 6

### Login User
- URL: `POST /user/login`
- Body:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- Success response:
  - Status: `200`
  - Body:
    ```json
    {
      "token": "<jwt-token>",
      "user": {
        "_id": "...",
        "fullname": { "firstname": "John", "lastname": "Doe" },
        "email": "john@example.com"
      }
    }
    ```
- The server also sets a cookie: `token=<jwt-token>`.

### Protected Profile
- URL: `GET /user/profile`
- Requires authentication
- Include token in either:
  - Cookie: `token=<jwt-token>`
  - Header: `Authorization: Bearer <jwt-token>`
- Success response:
  - Status: `200`
  - Body: user details

### Logout
- URL: `GET /user/logout`
- Requires authentication
- Clears the `token` cookie and stores the current token in the blacklist
- Success response:
  - Status: `200`
  - Body:
    ```json
    { "message": "Logged out" }
    ```

## Important Notes
- The blacklist token model uses a TTL index set to expire tokens after 24 hours. This prevents infinite storage growth.
- The `authUser` middleware checks for a valid JWT and if the token is blacklisted.
- The JWT token payload contains the user `_id` only.
- Passwords are stored hashed and never returned by default.

## Suggestions for Improvement
- Add email verification and password reset flows
- Add refresh token support for longer sessions
- Add user role authorization for admin or driver actions
- Add comprehensive error handling and logging

## Contact
For questions or custom enhancements, review the backend files under `Backend/` or extend the middleware and controller logic as needed.
