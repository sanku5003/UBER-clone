# UBER Clone Documentation

## Overview
This project is an Uber-style application with both backend and frontend completed for user and captain authentication flows. The backend is built with Node.js, Express, MongoDB, and JWT, while the frontend uses React, Vite, Axios, and React Router.

The current implementation includes:
- User registration and login
- Captain registration and login
- Protected user and captain routes
- Token-based authentication connected to the frontend
- User-facing ride request UI and captain-facing ride management UI

## Completed Features
- User sign up and login UI
- Captain sign up and login UI
- User and captain profile requests via protected frontend wrappers
- Token stored in `localStorage` and sent as `Authorization: Bearer <token>`
- Connected frontend to backend at `VITE_BASE_URL`
- Navigation between user and captain flows

## Frontend Flow

### User Flow
1. Landing page at `/` sends users to `/login`.
2. User can sign in at `/login` or register at `/signup`.
3. After successful login or registration, the frontend stores the returned JWT in `localStorage`.
4. The user is redirected to `/home`.
5. `UserProtectedWrapper` verifies the token and fetches `/user/profile`.
6. The user can use the ride search UI, select pickup and destination, and proceed through ride panels.

### Captain Flow
1. Captain login is available at `/captain-login` and registration at `/captain-signup`.
2. After successful registration or login, the frontend stores the JWT in `localStorage`.
3. The captain is redirected to `/captain-home`.
4. `CaptainProtectedWrapper` verifies the token and fetches `/captain/profile`.
5. The captain UI displays ride details and popup controls for managing rides.

## Frontend Routing
- `/` → `Start` landing page
- `/login` → `UserLogin`
- `/signup` → `UserSignUp`
- `/home` → `Home` inside `UserProtectedWrapper`
- `/user/logout` → `UserLogout` inside `UserProtectedWrapper`
- `/captain-login` → `CaptainLogin`
- `/captain-signup` → `CaptainSignUp`
- `/captain-home` → `CaptainHome` inside `CaptainProtectedWrapper`
- `/captain/logout` → `CaptainLogout` inside `CaptainProtectedWrapper`

## Frontend Authentication and State
- Token saved to `localStorage` under `token`
- User registration/login POST requests send form data to `/user/register` and `/user/login`
- Captain registration/login POST requests send form data to `/captain/register` and `/captain/login`
- Protected wrappers fetch `/user/profile` or `/captain/profile` on load
- Logout pages call `/user/logout` or `/captain/logout` and remove the token from `localStorage`

## Frontend Environment
The `Frontend/.env` file should include:
```env
VITE_BASE_URL=http://localhost:4000
```
This points the React app to the backend server.

## Backend Environment
The `Backend/.env` file should include:
```env
PORT=4000
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
```

## Backend Setup
1. Open a terminal in `Backend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   node server.js
   ```
4. The backend is available at `http://localhost:4000`

## Frontend Setup
1. Open a terminal in `Frontend`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend dev server:
   ```bash
   npm run dev
   ```
4. Open the URL shown by Vite in the browser.

## Backend API Endpoints

### User Endpoints
- `POST /user/register`
- `POST /user/login`
- `GET /user/profile`
- `GET /user/logout`

### Captain Endpoints
- `POST /captain/register`
- `POST /captain/login`
- `GET /captain/profile`
- `GET /captain/logout`

## Authentication Details
- Registration request returns a JWT and profile data
- Login request returns a JWT and profile data
- Protected routes require `Authorization: Bearer <token>`
- Token is also supported in a `token` cookie from the server
- Logout blacklists the JWT so it cannot be reused

## Notes
- User and captain UI are implemented and connected to the backend
- The frontend currently uses `localStorage` for session handling
- `UserProtectedWrapper` and `CaptainProtectedWrapper` redirect unauthorized users to login pages
- The app supports separate user and captain experiences with dedicated pages and ride UI

## Future Improvements
- Add refresh tokens for longer sessions
- Add better error handling and feedback in the frontend forms
- Add actual ride dispatch logic and backend ride matching
- Add role-based authorization and admin controls

## Contact
Review the `Backend/` folder for server logic and the `Frontend/src/` pages for user and captain UI flow.

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
