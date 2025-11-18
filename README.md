# 🏢 Companies Directory -- React + Vite + Tailwind

A modern, responsive **Companies Directory** built with **React**,
**Vite**, **Tailwind CSS**, and **Framer Motion**.\
Includes **full CRUD**, **filters**, **sorting**, **pagination**, **dark
mode**, and a polished UI --- all **100% client-side** using local JSON
data.

## 🔗 Live Demo

👉 https://companies-directory-neon.vercel.app/

## ✨ Features

### 🔹 Core Features

-   Beautiful company listing --- **Table View** & **Grid View**
-   Fully responsive (Tailwind)
-   **Light/Dark mode**
-   100% front-end only --- no backend

### 🔹 Filters & Sorting

-   Search by name\
-   Filter by **industry**
-   Filter by **location**
-   Sort **A--Z / Z--A**
-   Pagination for large datasets

### 🔹 CRUD Operations

-   ➕ Add Company\
-   ✏️ Edit Company\
-   ❌ Delete Company\
-   🗑️ Bulk Delete\
-   State handled using **React Context**

### 🔹 UI & UX Enhancements

-   ✨ Smooth animations (Framer Motion)\
-   🖼 Auto-generated avatars (`pravatar.cc`)\
-   🧭 Right-side Drawer for details\
-   🔖 Status Badges\
-   🔔 Toast Notifications\
-   ⚡ Heroicons for UI

## 📁 Project Structure

    Companies_Directory/
    │
    ├── public/
    │   └── companies.json
    │
    ├── src/
    │   ├── components/
    │   │   ├── modals/
    │   │   ├── CompaniesTable.jsx
    │   │   ├── CompanyRow.jsx
    │   │   ├── CompanyCard.jsx
    │   │   ├── Header.jsx
    │   │   ├── Drawer.jsx
    │   │   ├── Pagination.jsx
    │   │   └── Toast.jsx
    │   │
    │   ├── context/
    │   │   └── CompaniesContext.jsx
    │   │
    │   ├── utils/
    │   │   ├── flags.js
    │   │   ├── sort.js
    │   │   ├── useDebounce.js
    │   │   └── toastUtils.js
    │   │
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    └── README.md

## 🛠 Installation

``` bash
git clone https://github.com/Chandu00110/Companies_Directory.git
cd Companies_Directory
npm install
npm run dev
```

## 📦 Sample Data

public/companies.json

## 🚀 Deployment (Vercel)

1.  Push to GitHub\
2.  Go to Vercel\
3.  Import repo\
4.  Select Vite\
5.  Deploy

## 🛡 Tech Stack

React, Vite, Tailwind, Framer Motion, Heroicons, Context API, JSON

## 👨‍💻 Author

Chandra Shekhar\
GitHub: https://github.com/Chandu00110\
LinkedIn: https://www.linkedin.com/in/chandra-shekhar-pepakayala/

## ⭐ Support

If you like this project, please ⭐ the repo!
