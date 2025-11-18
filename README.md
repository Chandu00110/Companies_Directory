# Companies Directory – React Frontend Project

A modern, responsive **Companies Directory** built using **React**, **Tailwind CSS**, and **Framer Motion**.  
This project showcases clean UI, smooth animations, CRUD operations, filtering, sorting, pagination, and dark mode — everything implemented **on the frontend only** with a JSON data source.

---

## 🚀 Features

### ✅ **Core Features**
- View a list of companies in a modern table UI  
- Company board view (grid-style cards)  
- Full dark mode support with toggle  
- Client-side data management (no backend required)

### 🧩 **Filtering & Sorting**
- Search companies  
- Filter by industry  
- Filter by location  
- Sort ascending / descending  
- Pagination for large datasets  

### 🛠 **CRUD Operations**
- Add a new company (modal form)  
- Edit an existing company  
- Delete a company  
- Bulk delete multiple selected companies  
- All operations happen in the frontend state  

### 🎨 **UI Enhancements**
- Smooth animations using **Framer Motion**  
- Avatar images via `pravatar.cc`  
- Heroicons for icons  
- Drawer view for detailed company profile  
- Status badges (Active / Prospect / Inactive)  
- Responsive layout with Tailwind CSS  

---

## 📂 Folder Structure

project/
│
├── public/
│ └── companies.json # Initial dataset
│
├── src/
│ ├── components/ # All UI components
│ │ ├── modals/ # CRUD modal components
│ │ ├── CompaniesTable.jsx
│ │ ├── CompanyRow.jsx
│ │ ├── CompanyCard.jsx
│ │ ├── Header.jsx
│ │ ├── Drawer.jsx
│ │ ├── Pagination.jsx
│ │ └── Toast.jsx
│ │
│ ├── context/
│ │ └── CompaniesContext.jsx
│ │
│ ├── utils/
│ │ ├── flags.js
│ │ ├── sort.js
│ │ ├── useDebounce.js
│ │ └── toastUtils.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
└── README.md

yaml
Copy code

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the development server
bash
Copy code
npm run dev
The app will be available at:

👉 http://localhost:5173

🛡 Tech Stack
Technology	Purpose
React.js	UI framework
Vite	Fast development server
Tailwind CSS	Styling
Framer Motion	Animations
Heroicons	Icons
JSON File	Mock API data

🌐 Deployment
This project can be deployed on:

Vercel (recommended)

Netlify

Render (static site)

Deploy on Vercel:
Push your code to GitHub

Go to https://vercel.com

Import your repository

Select Framework: Vite

Click Deploy

📊 Sample JSON Data
The app loads its initial data from:

pgsql
Copy code
public/companies.json
This contains 10 fully structured sample companies.

📽 Demo Video (Optional for submission)
Record a short video including:

Overview of folder structure

Brief explanation of components

CRUD flow (add, edit, delete)

Filtering & sorting

Deployment link

🙌 Author
Your Name Here
Frontend Developer
GitHub: https://github.com/your-username
LinkedIn: https://linkedin.com/in/your-profile

📝 License
This project is for educational and assessment purposes.
You may reuse and modify freely.

yaml
Copy code

