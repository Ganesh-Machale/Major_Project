# 🏡 WanderLust - Property Listing Web Application

WanderLust is a beginner-friendly full-stack web application for displaying and managing property listings.

The project is built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. It focuses on understanding backend development, MongoDB integration, Mongoose models, Express routing, and server-side rendering with EJS.

## 🚀 Features

- 🏠 Display property listings
- 🗄️ MongoDB database integration
- 🔗 Mongoose schema and model
- ⚡ Express.js server
- 🎨 EJS server-side rendering
- 📄 Dynamic listing pages
- 🧩 Organized MVC-style project structure
- 📱 CSS styling for the frontend

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| EJS | Server-side templating |
| HTML | Page structure |
| CSS | Styling |
| Git & GitHub | Version control |

## 📂 Project Structure

```text
Major_Project/
│
├── init/
│   └── ...                    # Database initialization files
│
├── models/
│   └── listing.js             # Mongoose Listing schema
│
├── public/
│   └── css/
│       └── ...                # CSS files
│
├── views/
│   ├── includes/
│   │   └── ...                # Reusable EJS components
│   │
│   ├── layouts/
│   │   └── ...                # Layout files
│   │
│   └── listings/
│       └── ...                # Listing-related EJS views
│
├── app.js                     # Main Express application
├── package.json               # Project dependencies
├── package-lock.json          # Dependency lock file
└── README.md                  # Project documentation