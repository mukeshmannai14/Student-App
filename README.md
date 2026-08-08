# 🎓 Favourite Student List

A simple React JS application that allows users to view a list of students and manage their favourite students.

This project demonstrates **React Router**, **useContext**, **createContext**, **useState**, conditional rendering, and dynamic rendering using the `map()` method.

## 🚀 Live Demo

🔗 Live Demo: https://student-app-iota-three.vercel.app/

## 📌 Features

- 📋 Display a list of students
- ⭐ Add students to the favourite list
- 🚫 Prevent duplicate students from being added
- ❌ Remove students from the favourite list
- 🔄 Favourite list updates instantly
- 🌐 Navigate between pages without page reload
- 📱 Responsive user interface
- ⚛️ Global state management using React Context API
- 🔀 Client-side routing using React Router
- 🎨 Styled using normal CSS

## 📄 Pages

### 1. Student List

Displays all available students with:

- Student name
- Roll number / ID
- Add to Favourite button

### 2. Favourite Students

Displays all students added to the favourite list.

If no students have been added, the application displays:

> No favourite students added yet

## 🛠️ Technologies Used

- React JS
- Vite
- React Router DOM
- React Context API
- `useContext`
- `useState`
- JavaScript
- HTML
- CSS

## 🧠 React Concepts Used

### `createContext()`

Used to create a global Student Context for managing favourite students.

### `useContext()`

Used to access the favourite student data and functions from different components.

### `useState()`

Used to manage the favourite student list.

### `map()`

Used to dynamically display student data.

### Conditional Rendering

Used to display either the favourite students or the message:

```text
No favourite students added yet
