# Library Management System API

## Overview
The **Library Management System API** is built using **Node.js, Express.js, MongoDB, and Mongoose**. It provides authentication, role-based access control (Admin & Member), and features for managing books, authors, users, and borrowing transactions.

## Features
- **User Authentication** (JWT-based login & registration)
- **Role-Based Access Control** (Admin & Member)
- **Book Management** (Add, update, delete, and list books)
- **Author Management** (Manage authors and their books)
- **User Management** (Admins can manage users)
- **Borrowing Transactions** (Users can borrow and return books)
- **Middleware** for authentication, authorization, and error handling

## Installation & Setup
### Prerequisites
- **Node.js** (v14 or later)
- **MongoDB** (Local or cloud-based like MongoDB Atlas)

### Steps to Run the API
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd library-management-system-api
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Run the Server:**
   ```bash
   npm start
   ```


## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get a JWT token

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user by ID
- `PATCH /api/users/:id` - Update user info (Admin only)
- `DELETE /api/users/:id` - Delete user (Admin only)

### Books
- `POST /api/books` - Add a new book (Admin only)
- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `PATCH /api/books/:id` - Update book details (Admin only)
- `DELETE /api/books/:id` - Delete book (Admin only)

### Authors
- `POST /api/authors` - Add a new author (Admin only)
- `GET /api/authors` - Get all authors
- `GET /api/authors/:id` - Get author by ID
- `PATCH /api/authors/:id` - Update author details (Admin only)
- `DELETE /api/authors/:id` - Delete author (Admin only)

### Borrowing Transactions
- `POST /api/borrow` - Borrow a book (Member only)
- `POST /api/return/:id` - Return a borrowed book (Member only)
- `GET /api/transactions` - Get all transactions (Admin only)

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT
- **Middleware:** Express middleware for authentication & error handling

