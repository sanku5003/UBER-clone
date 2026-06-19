# UBER Clone Backend Documentation

## Overview
This repository contains the backend for an Uber-like clone application with basic user authentication. The backend is built with Node.js, Express, MongoDB, and JSON Web Tokens (JWT). Authentication includes user registration, login, profile access, and logout with token blacklist support.

## Features
- User registration with password hashing
- User login with JWT token generation
- Protected profile route using middleware
- Logout functionality with blacklisted token handling
- Request validation using `express-validator`
- Captain registration with vehicle details
- Captain login with JWT authentication
- Captain profile access and logout
- Captain profile management with status tracking
- Location-based captain data storage

## Tech Stack
- Node.js
- Express
- MongoDB / Mongoose
- bcrypt for password hashing
- JSON Web Token (`jsonwebtoken`) for auth tokens
- cookie-parser for token cookies
- express-validator for request validation

## Backend Structure & Architecture

### Entry Point
- **`server.js`** - The main application entry point. It:
  - Connects to MongoDB using the connection string from `.env`
  - Initializes the Express app from `app.js`
  - Starts the HTTP server on the specified PORT
  - Manages database lifecycle

### Application Setup
- **`app.js`** - Configures the Express application with:
  - Middleware setup (body-parser, cookie-parser, etc.)
  - Route registration (user routes, captain routes)
  - Error handling middleware
  - CORS and security configurations

### Database Connection
- **`db/db.js`** - Database connection module:
  - Establishes connection to MongoDB using Mongoose
  - Handles connection errors
  - Exports connection for use in `server.js`

### Data Models (Database Schemas)
- **`models/user.models.js`** - User collection schema:
  - Defines user structure: fullname, email, password, etc.
  - Contains methods: `generateAuthToken()`, `comparePassword()`
  - Contains static method: `hashPassword()` for bcrypt hashing

- **`models/captain.model.js`** - Captain collection schema:
  - Defines captain structure: fullname, email, password, vehicle, status, location
  - Vehicle sub-document with: color, plate, capacity, vehicleType
  - Contains methods: `generateAuthToken()`, `comparePassword()`
  - Contains static method: `hashPassword()`

- **`models/blackListToken.model.js`** - Token blacklist collection:
  - Stores invalidated JWT tokens during logout
  - TTL index to auto-delete tokens after 24 hours

### Middleware
- **`middlewares/auth.middleware.js`** - Authentication middleware:
  - Extracts JWT from cookies or Authorization header
  - Verifies token signature using `JWT_SECRET`
  - Checks if token is in the blacklist
  - Attaches user/captain data to request object
  - Rejects requests without valid tokens

### Request Handlers (Business Logic)
- **`controllers/user.controller.js`** - User operations:
  - `registerUser()` - Validates input, hashes password, creates user, generates token
  - `loginUser()` - Validates credentials, generates token, sets cookie
  - `getUserProfile()` - Returns authenticated user details
  - `logoutUser()` - Blacklists token and clears cookie

- **`controllers/captain.controller.js`** - Captain operations:
  - `registerCaptain()` - Validates input, hashes password, creates captain with vehicle details, generates token
  - Similar pattern to user controller

### Services (Database Operations)
- **`services/user.service.js`** - User data access layer:
  - `createUser()` - Inserts new user into database with hashed password
  - Validates required fields before insertion
  - Returns created user document

- **`services/captain.services.js`** - Captain data access layer:
  - `createCaptain()` - Inserts new captain with full details (name, email, vehicle)
  - Validates all required fields
  - Returns created captain document

### Routes (API Endpoints)
- **`routes/user.routes.js`** - Maps user endpoints:
  - `POST /register` → `userController.registerUser()`
  - `POST /login` → `userController.loginUser()`
  - `GET /profile` → auth middleware → `userController.getUserProfile()`
  - `GET /logout` → auth middleware → `userController.logoutUser()`
  - Includes validation rules via `express-validator`

- **`routes/captain.routes.js`** - Maps captain endpoints:
  - `POST /register` → `captainController.registerCaptain()`
  - `POST /login` → `captainController.loginCaptain()`
  - `GET /profile` → auth middleware → `captainController.getCaptainProfile()`
  - `GET /logout` → auth middleware → `captainController.logoutCaptain()`
  - Includes validation rules for all fields (email, name, password, vehicle)

### Data Flow for Captain Authentication
```
Client sends POST /captain/register
    ↓
Express validates input using express-validator (routes/captain.routes.js)
    ↓
captainController.registerCaptain() processes request
    ↓
Checks if captain email already exists in database
    ↓
captainModel.hashPassword() - bcrypt hashes the password
    ↓
captainService.createCaptain() - saves to MongoDB
    ↓
captain.generateAuthToken() - creates JWT token
    ↓
Response sent with token and captain details
```

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

### Captain Authentication Flow
1. **Captain register**: Captains submit `fullname`, `email`, `password`, and `vehicle` data.
2. The captain password is hashed and saved with vehicle details.
3. A JWT is returned with the captain response.
4. **Captain login**: Captains submit `email` and `password`.
5. On successful authentication, a JWT is returned and may be stored in a cookie.
6. **Captain protected routes**: Use `GET /captain/profile` with a valid JWT.
7. **Captain logout**: Blacklists the token and clears the session cookie.

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

### Register New Captain
- URL: `POST /captain/register`
- Body:
  ```json
  {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@example.com",
    "password": "password123",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- Success response:
  - Status: `201`
  - Body:
    ```json
    {
      "message": "Captain registered successfully",
      "token": "<jwt-token>",
      "captain": {
        "_id": "...",
        "fullname": { "firstname": "Jane", "lastname": "Smith" },
        "email": "jane@example.com",
        "vehicle": { "color": "Black", "plate": "ABC123", "capacity": 4, "vehicleType": "car" },
        "status": "inactive"
      }
    }
    ```
- Validation rules:
  - `email` must be a valid email
  - `fullname.firstname` minimum length 3
  - `password` minimum length 6
  - `vehicle.color` minimum length 3
  - `vehicle.plate` minimum length 3
  - `vehicle.capacity` minimum value 1
  - `vehicle.vehicleType` must be one of: 'car', 'motorcycle', 'auto'

### Captain Login
- URL: `POST /captain/login`
- Body:
  ```json
  {
    "email": "jane@example.com",
    "password": "password123"
  }
  ```
- Success response:
  - Status: `200`
  - Body:
    ```json
    {
      "token": "<jwt-token>",
      "captain": {
        "_id": "...",
        "fullname": { "firstname": "Jane", "lastname": "Smith" },
        "email": "jane@example.com",
        "vehicle": { "color": "Black", "plate": "ABC123", "capacity": 4, "vehicleType": "car" },
        "status": "inactive"
      }
    }
    ```
- The server also sets a cookie: `token=<jwt-token>`.

### Captain Profile
- URL: `GET /captain/profile`
- Requires authentication
- Include token in either:
  - Cookie: `token=<jwt-token>`
  - Header: `Authorization: Bearer <jwt-token>`
- Success response:
  - Status: `200`
  - Body: captain details

### Captain Logout
- URL: `GET /captain/logout`
- Requires authentication
- Clears the `token` cookie and stores the current token in the blacklist
- Success response:
  - Status: `200`
  - Body:
    ```json
    { "message": "Logged out" }
    ```

## Suggestions for Improvement
- Add email verification and password reset flows
- Add refresh token support for longer sessions
- Add user role authorization for admin or driver actions
- Add comprehensive error handling and logging

## Contact
For questions or custom enhancements, review the backend files under `Backend/` or extend the middleware and controller logic as needed.
