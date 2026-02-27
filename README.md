# 📝 MERN Stack Todo List Application

A simple and efficient Todo List web application built using the MERN Stack (MongoDB, Express, React, Node.js).
This project demonstrates full-stack CRUD operations with real-time database interaction.


---

🚀 Features

➕ Add new tasks

📥 View all tasks

❌ Delete tasks

🔄 Instant UI updates after operations

🌐 REST API integration using Axios



---

🛠️ Tech Stack

Frontend: React JS

Backend: Node JS, Express JS

Database: MongoDB

ODM: Mongoose

HTTP Client: Axios

Styling: CSS



---

📁 Project Structure

All files are available in the main branch:

MainPage.js   → React frontend component
MainPage.css  → Styling for the frontend
server.js     → Express backend with MongoDB connection


---

⚙️ Setup Instructions

1️⃣ Install Dependencies

Initialize Node project and install backend packages:

npm init -y
npm install express mongoose cors

Install frontend dependency:

npm install axios


---

2️⃣ Start MongoDB

Ensure MongoDB is running locally on:

mongodb://127.0.0.1:27017/todoDB


---

3️⃣ Run Backend

node server.js

Server runs at:

http://localhost:5000


---

4️⃣ Run React App

Make sure MainPage.js is imported into your App.js, then run:

npm start

Frontend runs at:

http://localhost:3000


---

🔌 API Endpoints

Method	Endpoint	Description

GET	/get	Fetch all todos
POST	/add	Add new todo
DELETE	/delete/:id	Delete a todo



---

📚 Learning Objectives

Understanding full-stack development using MERN

Building REST APIs with Express

Connecting MongoDB using Mongoose

Managing state and API calls in React

Performing CRUD operations



---
