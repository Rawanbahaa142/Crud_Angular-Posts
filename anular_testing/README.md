# Angular Posts CRUD App

This is a simple Angular application for managing posts (CRUD operations).  
The project was built as a practice task to apply **Angular Standalone Components**, **Routing**, and **LocalStorage** for data persistence.

---

## 🚀 Features
- Add a new post (ID, Title, Body).
- View all posts in a list.
- Edit post details.
- Delete posts.
- View single post details.
- Data is saved in `localStorage` so it persists after refresh.

---

## 🛠️ Technologies Used
- **Angular 18+**
- **TypeScript**
- **Bootstrap 5** (for styling)
- **LocalStorage API**

---

## 📂 Project Structure
src/app/
│
├── app.ts # Root standalone App component
├── app-routing-module.ts # Application routes
│
├── Basic/
│ ├── all-posts/ # List + Add new post
│ ├── post-details/ # Post details, Update, Delete
│ ├── edit-post/ # Edit post form
│ ├── nav-bar/ # Navbar
│ └── footer/ # Footer
│
├── index.html # Main HTML file
├── styles.css # Global styles
├── main.ts # Entry point
├── polyfills.ts # Polyfills
├── tsconfig.json # TypeScript configuration
├── angular.json # Angular configuration
├── package.json # Project dependencies
├── README.md # Project documentation
└── .gitignore # Git configuration

---

## 🎯 Purpose

This project was built to practice:

Angular Standalone Components.

Angular Routing with parameters.

CRUD operations with LocalStorage.

Component communication and navigation.