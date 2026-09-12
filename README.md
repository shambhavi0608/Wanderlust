# 🏡 WanderLust — Airbnb-Style Listing & Booking Platform

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-90A93A?style=for-the-badge&logo=ejs&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
</p>

<p align="center">
  <b>A full-stack MERN-adjacent (Node + Express + MongoDB + EJS) web application</b><br/>
  where users can list properties, browse stays, leave reviews, and book their next getaway — inspired by Airbnb.
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
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Routes](#-routes)
- [Data Models](#-data-models)
- [Authentication Flow](#-authentication-flow)
- [Image Uploads (Cloudinary)](#-image-uploads-cloudinary)
- [Maps & Geocoding (Mapbox)](#-maps--geocoding-mapbox)
- [Error Handling & Validation](#-error-handling--validation)
- [Deployment (Render)](#-deployment)
- [Common Issues & Fixes](#-common-issues--fixes)
- [Interview Questions](#-interview-questions)
- [Future Scope](#-future-scope)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🌍 About the Project

**WanderLust** is a full-stack property listing and booking web application built to replicate the core experience of Airbnb. It follows the **MVC (Model-View-Controller)** architecture and demonstrates a complete production-style workflow — from database modeling to authentication, image handling, geolocation, and cloud deployment.

This project was built as part of a hands-on learning journey into backend web development with **Node.js**, **Express.js**, and **MongoDB**, and showcases real-world practices like environment variable management, session-based authentication, RESTful routing, and secure deployment.

---

## 🚀 Live Demo

🔗 **Deployed Link:** _[Add your Render URL here once live]_
📦 **Repository:** [github.com/shambhavi0608/Wanderlust](https://github.com/shambhavi0608/Wanderlust)

---

## ✨ Features

- 🏠 **Create, Read, Update, Delete (CRUD)** operations for property listings
- 🔐 **User Authentication & Authorization** using Passport.js (signup, login, logout)
- 🛡️ **Route protection** — only logged-in users can create/edit listings; only the owner can edit/delete their own listing
- 📝 **Review System** — logged-in users can add and delete reviews with star ratings
- 🖼️ **Image Uploads** to Cloudinary with Multer (no local storage clutter)
- 🗺️ **Interactive Maps** — each listing shows its location using Mapbox geocoding
- 💬 **Flash Messages** for real-time feedback (success/error) using `connect-flash`
- ✅ **Server-side validation** with Joi schemas for both listings and reviews
- 🍪 **Persistent Sessions** stored in MongoDB via `connect-mongo` (sessions survive server restarts)
- 🚦 **Centralized Error Handling** using custom `ExpressError` class and `wrapAsync` utility
- 📱 **Responsive UI** built with EJS templating and custom CSS
- 🔍 **Search & Filter** listings (category-based, if implemented)
- 🌐 **Production-ready deployment** on Render with MongoDB Atlas as the cloud database

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (Atlas) with Mongoose ODM |
| **Templating Engine** | EJS + EJS-Mate (layout support) |
| **Authentication** | Passport.js + `passport-local-mongoose` |
| **Session Store** | `express-session` + `connect-mongo` |
| **Validation** | Joi |
| **File Uploads** | Multer + `multer-storage-cloudinary` |
| **Image Hosting** | Cloudinary |
| **Maps/Geocoding** | Mapbox SDK |
| **Flash Messages** | `connect-flash` |
| **Dev Tools** | Nodemon, dotenv |
| **Deployment** | Render (server) + MongoDB Atlas (database) |
| **Version Control** | Git & GitHub |

---

## 📁 Folder Structure

```
Wanderlust/
├── controllers/            # Business logic (separated from routes)
│   ├── listings.js
│   ├── review.js
│   └── users.js
├── init/                   # Database seeding scripts
│   ├── data.js
│   └── index.js
├── models/                 # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/style.css
│   └── js/
│       ├── map.js
│       └── script.js
├── routes/                 # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js     # Custom error class
│   └── wrapAsync.js        # Async error wrapper
├── views/                  # EJS templates
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   ├── layouts/
│   ├── listings/
│   ├── users/
│   └── error.ejs
├── app.js                  # Entry point
├── cloudConfig.js          # Cloudinary configuration
├── middlewares.js          # Custom middleware (auth checks, etc.)
├── schema.js               # Joi validation schemas
├── .env                    # Environment variables (NOT committed)
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Installation

Follow these steps to run the project locally:

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
Create a `.env` file in the root directory (see [Environment Variables](#-environment-variables) below).

### 4. Seed the database (optional, for sample data)
```bash
node init/index.js
```

### 5. Run the app
```bash
npx nodemon app.js
```

The app will be live at **`http://localhost:8080`**

---

## 🔑 Environment Variables

Create a `.env` file in the project root with the following keys:

```env
MONGO_URL=your_mongodb_atlas_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_access_token
SECRET=your_session_secret_key
```

> ⚠️ **Never commit your `.env` file.** It should always be listed in `.gitignore`. If a secret is ever accidentally pushed, rotate it immediately on the provider's dashboard (Mapbox/Cloudinary/MongoDB) and remove it from git history using `git filter-repo`.

---

## 🧭 Routes

### Listings

| Method | Route | Description | Auth Required |
|---|---|---|---|
| GET | `/listings` | View all listings | No |
| GET | `/listings/new` | Form to create a new listing | Yes |
| POST | `/listings` | Create a new listing | Yes |
| GET | `/listings/:id` | View a single listing | No |
| GET | `/listings/:id/edit` | Form to edit a listing | Yes (Owner only) |
| PUT | `/listings/:id` | Update a listing | Yes (Owner only) |
| DELETE | `/listings/:id` | Delete a listing | Yes (Owner only) |

### Reviews

| Method | Route | Description | Auth Required |
|---|---|---|---|
| POST | `/listings/:id/reviews` | Add a review to a listing | Yes |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review | Yes (Author only) |

### Users / Auth

| Method | Route | Description |
|---|---|---|
| GET | `/signup` | Signup form |
| POST | `/signup` | Register a new user |
| GET | `/login` | Login form |
| POST | `/login` | Authenticate user |
| GET | `/logout` | Log the user out |

---

## 🗃️ Data Models

**Listing Schema** — title, description, image (url + filename), price, location, country, reviews (ref), owner (ref), geometry (for map coordinates)

**Review Schema** — comment, rating (1–5), author (ref), createdAt

**User Schema** — email, username, password (hashed via `passport-local-mongoose`)

Relationships:
- A **Listing** `has many` Reviews
- A **Listing** `belongs to` one Owner (User)
- A **Review** `belongs to` one Author (User)

---

## 🔐 Authentication Flow

1. User signs up → password is salted & hashed automatically by `passport-local-mongoose`
2. On login, Passport's local strategy verifies credentials
3. A session is created and stored in MongoDB (`connect-mongo`) — not in memory, so sessions persist across server restarts
4. `middlewares.js` contains guards like `isLoggedIn` and `isOwner` / `isAuthor` that protect sensitive routes
5. On logout, the session is destroyed and the user is redirected

---

## 🖼️ Image Uploads (Cloudinary)

- `cloudConfig.js` configures the Cloudinary SDK using credentials from `.env`
- `multer-storage-cloudinary` is used as the storage engine for Multer, so uploaded images go **directly to Cloudinary** instead of the local filesystem
- Each listing stores the Cloudinary `url` and `filename` for later reference/deletion

---

## 🗺️ Maps & Geocoding (Mapbox)

- When a listing is created, its location string is geocoded into latitude/longitude coordinates using the **Mapbox Geocoding API**
- `public/js/map.js` renders an interactive map on the listing's show page using Mapbox GL JS

---

## 🚨 Error Handling & Validation

- **Joi schemas** (`schema.js`) validate incoming form data on the server side before it touches the database
- **`ExpressError`** is a custom error class (`utils/ExpressError.js`) used to throw operational errors with a status code and message
- **`wrapAsync`** wraps every async route handler so errors are automatically forwarded to Express's error-handling middleware instead of crashing the server
- A dedicated `error.ejs` view renders a friendly error page instead of a raw stack trace

---

## ☁️ Deployment

This project is deployed on **[Render](https://render.com)** with **MongoDB Atlas** as the database layer.

### Steps:
1. Push the latest code to GitHub (`.env` excluded via `.gitignore`)
2. On Render → **New +** → **Web Service** → connect the GitHub repo
3. Build Command: `npm install`
4. Start Command: `node app.js`
5. Add all environment variables from `.env` into Render's **Environment** tab
6. In MongoDB Atlas → **Network Access**, allow `0.0.0.0/0` so Render's dynamic IPs can connect
7. Deploy — Render provides a live `.onrender.com` URL

---

## 🩹 Common Issues & Fixes

| Issue | Cause | Fix |
|---|---|---|
| GitHub blocked push (`Push cannot contain secrets`) | `.env` file committed with a real API token | Remove `.env` from history with `git filter-repo --path .env --invert-paths --force`, then rotate the exposed key |
| `MongoServerSelectionError` / SSL alert | IP not whitelisted on Atlas, or Node/OpenSSL version mismatch | Whitelist your IP (or `0.0.0.0/0`), update `mongoose`, or use Node LTS |
| Sessions not persisting on Render | Cookie `secure: true` behind Render's proxy without trust setting | Add `app.set('trust proxy', 1)` when in production |
| Images not uploading | Missing/incorrect Cloudinary env vars | Double-check `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` |
| Map not showing | Invalid or expired Mapbox token | Regenerate token on Mapbox dashboard and update `.env` |

---

## 💡 Interview Questions

A curated set of questions an interviewer could ask based on this project — with the key concept behind each answer.

### 🔹 Node.js & Express
1. **What is the role of middleware in Express, and how does `app.use()` work?**
   Middleware functions have access to `req`, `res`, and `next()`; they can modify the request/response or end the cycle. `app.use()` registers middleware globally or per-path.
2. **What is the difference between `app.get()`, `app.post()`, `app.put()`, and `app.delete()`?**
   They map to HTTP verbs and represent CRUD-style operations in RESTful routing.
3. **Why do we use `method-override` in this project?**
   HTML forms only support GET and POST natively; `method-override` lets forms simulate PUT/DELETE requests via a query string (`?_method=PUT`).
4. **What does `wrapAsync` do and why is it necessary?**
   It wraps async route handlers in a try/catch equivalent, forwarding rejected promises to Express's error handler via `next(err)`, avoiding unhandled promise rejections.
5. **Explain the MVC pattern as used in this project.**
   Models (Mongoose schemas) handle data; Views (EJS templates) handle presentation; Controllers contain the business logic, keeping routes thin.

### 🔹 MongoDB & Mongoose
6. **What is the difference between MongoDB and Mongoose?**
   MongoDB is the NoSQL database itself; Mongoose is an ODM (Object Data Modeling) library that provides schema validation, casting, and query building on top of MongoDB.
7. **How are relationships (like Listing → Reviews) modeled in a NoSQL database?**
   Via **referencing** — storing an array of `ObjectId`s (ref to the Review model) inside the Listing schema, then using `.populate()` to fetch full documents.
8. **What happens if you delete a Listing? Do its Reviews get deleted too?**
   Not automatically — you need a **Mongoose middleware hook** (e.g., `post('findOneAndDelete')`) to cascade-delete associated reviews.
9. **What is `connect-mongo` used for here?**
   It stores session data in MongoDB instead of server memory, so sessions survive server restarts and scale across multiple instances.

### 🔹 Authentication & Security
10. **How does `passport-local-mongoose` handle passwords?**
    It automatically salts and hashes passwords using PBKDF2, and adds `authenticate()`, `serializeUser()`, and `deserializeUser()` methods to the User model — so plaintext passwords are never stored.
11. **What's the difference between authentication and authorization?**
    Authentication verifies *who* you are (login); authorization determines *what* you're allowed to do (e.g., only the owner can edit their listing).
12. **Why store secrets in `.env` instead of hardcoding them?**
    To avoid committing sensitive credentials to version control, and to allow different configs per environment (dev/staging/prod) without code changes.
13. **What would you do if an API key got leaked on GitHub?**
    Immediately rotate/revoke the key on the provider's dashboard, then scrub it from git history (`git filter-repo` or BFG) — history rewriting alone isn't sufficient since the key must be treated as compromised.

### 🔹 REST & HTTP
14. **What makes an API "RESTful"?**
    Statelessness, resource-based URLs, use of standard HTTP verbs, and predictable CRUD mapping (as seen in the `/listings` routes here).
15. **What's the difference between PUT and PATCH?**
    PUT replaces the entire resource; PATCH updates only specific fields. This project uses PUT for full listing updates.

### 🔹 Deployment & DevOps
16. **Why does MongoDB Atlas require IP whitelisting, and why use `0.0.0.0/0` for cloud deployment?**
    Atlas blocks unknown IPs for security. Since platforms like Render use dynamic IPs, `0.0.0.0/0` (allow all) is a common (though less strict) workaround; a more secure option is Atlas's private networking/VPC peering.
17. **What is the purpose of a `.gitignore` file?**
    To exclude files (like `node_modules/`, `.env`) from version control that are either regenerable or sensitive.
18. **How do environment variables differ between local development and a platform like Render?**
    Locally they're loaded from `.env` via `dotenv`; on Render they're set directly in the dashboard's Environment tab and injected into `process.env` at runtime — no `.env` file is needed or committed.

### 🔹 Frontend/Templating
19. **Why use EJS-Mate instead of plain EJS?**
    EJS-Mate adds **layout support** (like a `boilerplate.ejs`), letting you define a common header/footer once instead of repeating it in every view.
20. **How are flash messages implemented and why are they useful?**
    `connect-flash` stores one-time messages in the session; they're read and cleared on the next request — ideal for "Listing created successfully!" type feedback after a redirect.

---

## 🔮 Future Scope

- 💳 Payment gateway integration for real bookings
- ⭐ Advanced filtering (price range, amenities, category tags)
- 📧 Email notifications (booking confirmations via Nodemailer)
- 📊 Admin dashboard for managing listings/users
- 🌓 Dark mode toggle
- 🧪 Unit & integration testing (Jest/Mocha)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add: your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 👩‍💻 Author

**Shambhavi**
🔗 GitHub: [@shambhavi0608](https://github.com/shambhavi0608)

Built as part of a hands-on backend web development learning journey — inspired by the Apna College Web Dev course project structure.

---

## 📄 License

This project is open-sourced for learning purposes. Feel free to explore, learn from, and build upon it.

---

<p align="center">⭐ If you found this project helpful, consider giving it a star on GitHub!</p>
