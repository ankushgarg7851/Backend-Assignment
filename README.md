# Backend Assignment – User Management API

## Project Overview
This project is a backend application developed using Node.js, Express.js, and MongoDB. It provides REST APIs for user registration, login, and CRUD (Create, Read, Update, Delete) operations.

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- Postman Desktop

## Project Structure
```text
Backend Assignment/
├── config/
│   └── db.js
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── .gitignore
├── package.json
└── server.js
```

## Installation and Setup

1. Clone the repository:
   `git clone https://github.com/ankushgarg7851/Backend-Assignment.git`

2. Open the project folder:
   `cd Backend-Assignment`

3. Install dependencies:
   `npm install`

4. Create a `.env` file in the root folder:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

5. Start the server:
   `node server.js`

6. Open in your browser:
   `http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:3000/api/users`

| Method | Endpoint | Description |
|---|---|---|
| POST | /register | Register a new user |
| POST | /login | Login user |
| GET | / | Get all users |
| GET | /:id | Get user by ID |
| PUT | /:id | Update user |
| DELETE | /:id | Delete user |

## API Testing
All APIs were tested using Postman Desktop. Successful responses were verified for registration, login, retrieving users, updating users, and deleting users.

## Database
MongoDB Atlas is used as the cloud database, and Mongoose is used for database connection and schema management.

## Security
- Passwords are hashed using bcryptjs.
- Passwords are excluded from API responses.
- Environment variables are stored in `.env`.
- `.env` and `node_modules` are excluded using `.gitignore`.

## Author
**Ankush Garg**  -250305
B.Tech CSE3  
BML Munjal University