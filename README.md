# 🏡 WanderLust — Airbnb-Style Property Listing & Rental Platform

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-90A93A?style=for-the-badge&logo=ejs&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
</p>

<p align="center">
  <b>A full-stack property listing and rental platform built with Node.js, Express.js, MongoDB, and EJS.</b>
  <br/>
  Users can explore properties, create listings, upload images, view locations on interactive maps, and interact with reviews through a secure authentication system.
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-routes">Routes</a> •
  <a href="#-deployment">Deployment</a> •
  <a href="#-interview-questions">Interview Prep</a>
</p>

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Application Preview](#-application-preview)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Routes](#-routes)
- [Data Models](#-data-models)
- [Authentication Flow](#-authentication-flow)
- [Image Uploads](#-image-uploads-cloudinary)
- [Maps & Geocoding](#-maps--geocoding-mapbox)
- [Error Handling & Validation](#-error-handling--validation)
- [Deployment](#-deployment)
- [Common Issues & Fixes](#-common-issues--fixes)
- [Interview Questions](#-interview-questions)
- [Future Scope](#-future-scope)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🌍 About the Project

**WanderLust** is a full-stack property listing and rental web application inspired by the core experience of Airbnb. It follows the **MVC (Model-View-Controller)** architecture and demonstrates a complete backend workflow including database modeling, authentication, image uploads, geolocation, validation, and cloud deployment.

The project was built as a hands-on learning project in backend web development using **Node.js, Express.js, MongoDB, and EJS**.

---

## 🚀 Live Demo

🔗 **Live Application:**
https://wanderlust-1-lzc6.onrender.com/listings

📦 **GitHub Repository:**
https://github.com/shambhavi0608/Wanderlust

> The application is deployed on Render and uses MongoDB Atlas as the cloud database.

---

## ✨ Features

- 🏠 **Property Listing CRUD** — Create, read, update, and delete listings
- 🔐 **User Authentication** — Signup, login, and logout using Passport.js
- 🛡️ **Authorization** — Only authenticated users can create listings
- 👤 **Owner Authorization** — Only listing owners can edit or delete their listings
- 📝 **Review System** — Logged-in users can add and delete reviews with star ratings
- 🖼️ **Image Uploads** — Images are uploaded and hosted using Cloudinary
- 🗺️ **Interactive Maps** — Listing locations are displayed using Mapbox
- 💬 **Flash Messages** — Success and error feedback using connect-flash
- ✅ **Server-side Validation** — Joi validation for listings and reviews
- 🍪 **Persistent Sessions** — Sessions are stored in MongoDB using connect-mongo
- 🚦 **Centralized Error Handling** — Custom ExpressError class and wrapAsync utility
- 📱 **Responsive UI** — EJS templates with custom CSS
- 🔍 **Search & Filter** — Browse listings based on available categories
- ☁️ **Cloud Deployment** — Application deployed using Render with MongoDB Atlas

---

## 🌐 Application Preview

WanderLust provides an Airbnb-inspired rental experience where users can:

- Browse available properties
- Filter listings by categories
- View detailed property information
- Create and manage their own listings
- Upload listing images through Cloudinary
- View property locations using Mapbox
- Register and authenticate securely
- Add and manage reviews
- Receive feedback through flash messages

🔗 **Try the live application:**
https://wanderlust-1-lzc6.onrender.com/listings

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas |
| **ODM** | Mongoose |
| **Templating Engine** | EJS + EJS-Mate |
| **Authentication** | Passport.js + passport-local-mongoose |
| **Session Store** | express-session + connect-mongo |
| **Validation** | Joi |
| **File Uploads** | Multer |
| **Image Hosting** | Cloudinary |
| **Maps & Geocoding** | Mapbox SDK |
| **Flash Messages** | connect-flash |
| **Development Tools** | Nodemon, dotenv |
| **Deployment** | Render |
| **Version Control** | Git & GitHub |

---

## 📁 Folder Structure

```text
Wanderlust/
├── controllers/
│   ├── listings.js
│   ├── review.js
│   └── users.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── map.js
│       └── script.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
├── app.js
├── cloudConfig.js
├── middlewares.js
├── schema.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/shambhavi0608/Wanderlust.git
cd Wanderlust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory.

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_session_secret_key
```

### 4. Seed the database

Optional — only if you want to add sample data.

```bash
node init/index.js
```

### 5. Run the application

```bash
npm start
```

The application will run at:

```
http://localhost:8080
```

---

## 🔑 Environment Variables

The following environment variables are required:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_session_secret_key
```

⚠️ Never commit your `.env` file to GitHub.

Keep `.env` inside `.gitignore` and use environment variables on deployment platforms such as Render.

---

## 🧭 Routes

### Listings

| Method | Route | Description | Authentication |
|---|---|---|---|
| GET | `/listings` | View all listings | No |
| GET | `/listings/new` | Create listing form | Yes |
| POST | `/listings` | Create a listing | Yes |
| GET | `/listings/:id` | View a listing | No |
| GET | `/listings/:id/edit` | Edit listing form | Owner only |
| PUT | `/listings/:id` | Update listing | Owner only |
| DELETE | `/listings/:id` | Delete listing | Owner only |

### Reviews

| Method | Route | Description | Authentication |
|---|---|---|---|
| POST | `/listings/:id/reviews` | Add a review | Yes |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review | Author only |

### Users / Authentication

| Method | Route | Description |
|---|---|---|
| GET | `/signup` | Signup form |
| POST | `/signup` | Register user |
| GET | `/login` | Login form |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Logout user |

---

## 🗃️ Data Models

### Listing

A listing contains:

- Title
- Description
- Image
- Price
- Location
- Country
- Owner
- Reviews
- Geometry coordinates

### Review

A review contains:

- Comment
- Rating
- Author
- Created date

### User

A user contains:

- Username
- Email
- Hashed password

### Relationships

- A Listing has many Reviews
- A Listing belongs to one Owner
- A Review belongs to one Author

---

## 🔐 Authentication Flow

1. User signs up.
2. Password is salted and hashed using passport-local-mongoose.
3. Passport's local strategy authenticates login credentials.
4. A session is created and stored in MongoDB using connect-mongo.
5. Authorization middleware protects restricted routes.
6. On logout, the session is destroyed.

---

## 🖼️ Image Uploads (Cloudinary)

- Cloudinary is configured through `cloudConfig.js`.
- Multer handles incoming file uploads.
- multer-storage-cloudinary sends images directly to Cloudinary.
- Listing documents store the Cloudinary image URL and filename.

---

## 🗺️ Maps & Geocoding (Mapbox)

- Listing locations are converted into latitude and longitude using Mapbox Geocoding.
- The coordinates are stored with the listing.
- `map.js` displays the location using an interactive Mapbox map.

---

## 🚨 Error Handling & Validation

- Joi validates listing and review data.
- ExpressError provides custom application errors.
- wrapAsync forwards asynchronous errors to Express error middleware.
- A dedicated `error.ejs` page displays user-friendly error messages.

---

## ☁️ Deployment

The application is deployed using Render, with MongoDB Atlas as the database.

### Deployment Steps

1. Push the latest code to GitHub.
2. Connect the GitHub repository to Render.
3. Set the Build Command: `npm install`
4. Set the Start Command: `npm start`
5. Add the required environment variables in Render.
6. Configure MongoDB Atlas Network Access.
7. Deploy the application.
8. Render provides the live `.onrender.com` URL.

### Live Deployment

https://wanderlust-1-lzc6.onrender.com/listings

---

## 🩹 Common Issues & Fixes

| Issue | Possible Cause | Fix |
|---|---|---|
| Missing script: start | Start script missing in package.json | Add `"start": "node app.js"` |
| MongoServerSelectionError | MongoDB Atlas access issue | Check Atlas Network Access and connection string |
| Sessions not persisting | Proxy/session configuration | Check production session configuration |
| Images not uploading | Cloudinary configuration issue | Check Cloudinary environment variables |
| Map not showing | Invalid Mapbox token | Check or regenerate Mapbox token |

---

## 💡 Interview Questions

### Node.js & Express

- What is middleware in Express?
- What is the difference between GET, POST, PUT, and DELETE?
- Why is method-override used?
- What does wrapAsync do?
- Explain MVC architecture.

### MongoDB & Mongoose

- What is the difference between MongoDB and Mongoose?
- How are relationships represented in MongoDB?
- What is populate() in Mongoose?
- What is connect-mongo used for?

### Authentication & Security

- What is authentication vs authorization?
- How does passport-local-mongoose handle passwords?
- Why should secrets be stored in environment variables?
- What should you do if an API key is accidentally pushed to GitHub?

### REST & HTTP

- What makes an API RESTful?
- What is the difference between PUT and PATCH?

### Deployment

- Why is MongoDB Atlas Network Access required?
- What is `.gitignore` used for?
- How are environment variables handled differently locally and on Render?

### Frontend

- Why use EJS-Mate?
- What are flash messages and why are they useful?

---

## 🔮 Future Scope

- 💳 Payment gateway integration
- ⭐ Advanced filtering by price, amenities, and categories
- 📧 Email notifications for bookings
- 📊 Admin dashboard
- 🌓 Dark mode
- 🧪 Unit and integration testing

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add: your feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## 👩‍💻 Author

**Shambhavi**

🔗 GitHub: https://github.com/shambhavi0608

---

## 📄 License

This project is open-sourced for learning purposes.

Feel free to explore, learn from, and build upon it.

<p align="center">
  ⭐ If you found this project helpful, consider giving it a star on GitHub!
</p>
