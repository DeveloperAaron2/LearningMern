🏋️ Workout Tracker - MERN Stack Application
This is a Workout Tracker web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The app allows users to create an account, log in, and track their workouts. Each user has their own workout routines stored securely, thanks to JSON Web Tokens (JWT) for authentication and user-specific data access.

🚀 Features
User Registration: New users can sign up and create an account.
User Authentication: Users can log in using JWT for secure session management.
Create & Manage Workouts: Users can create, edit, and delete their workouts.
User-Specific Workouts: Workouts are associated with each user, meaning one user's workouts won't be visible to others.
Responsive UI: The app is mobile-friendly, providing a great user experience across devices.
🛠️ Technologies Used
Frontend
React.js: Single-page application (SPA) framework for creating a responsive, dynamic user interface.
CSS/SCSS: Styled components or custom styling to enhance the UI.
Axios: HTTP client used for making API requests from the frontend to the backend.
Backend
Node.js: JavaScript runtime used for the server-side environment.
Express.js: Web framework for building RESTful APIs.
MongoDB: NoSQL database to store user data and workout information.
Mongoose: ODM (Object Data Modeling) library for MongoDB, providing a schema-based solution for interacting with the database.
JSON Web Tokens (JWT): Used for user authentication and protecting routes.
bcryptjs: For password hashing and security.
🔑 User Authentication & Authorization
JWT Authentication: Users are authenticated using JWT. Upon successful login, a token is generated and sent back to the client. The token is stored in the client's local storage and used to access protected routes like creating or managing workouts.
Password Security: Passwords are hashed using bcryptjs to ensure data security.
📂 Folder Structure
bash
LearningMern
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  ├─ userController.js
│  │  └─ workoutsControllers.js
│  ├─ Db
│  │  └─ mongodb.js
│  ├─ middleware
│  │  └─ requireAuth.js
│  ├─ models
│  │  ├─ userModel.js
│  │  └─ workoutModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ user.js
│  │  └─ workouts.js
│  └─ server.js
├─ frontend
│  └─ Mern-Project
│     ├─ eslint.config.js
│     ├─ index.html
│     ├─ package-lock.json
│     ├─ package.json
│     ├─ public
│     │  └─ vite.svg
│     ├─ README.md
│     ├─ src
│     │  ├─ App.css
│     │  ├─ App.jsx
│     │  ├─ assets
│     │  │  └─ react.svg
│     │  ├─ components
│     │  │  ├─ NavBar.jsx
│     │  │  ├─ WorkoutDetails.jsx
│     │  │  └─ WorkoutForm.jsx
│     │  ├─ context
│     │  │  ├─ AuthContext.jsx
│     │  │  └─ WorkoutContext.jsx
│     │  ├─ index.css
│     │  ├─ main.jsx
│     │  └─ pages
│     │     ├─ Home.jsx
│     │     ├─ Login.jsx
│     │     └─ SignUp.jsx
│     └─ vite.config.js
├─ package-lock.json
└─ package.json
└── README.md
⚙️ Installation & Setup
Clone the repository
bash
git clone https://github.com/DeveloperAaron2/LearningMern.git
cd workout-tracker
Install dependencies
Backend:
bash

cd backend
npm install
Frontend:
bash

cd frontend
npm install
Environment Variables
Create a .env file in the backend folder and add the following environment variables:

env
PORT: your_Port
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
Run the Application
Start the backend server:
bash

cd backend
npm run dev
Start the frontend development server:
bash

cd frontend
npm run dev
Access the application: Open your browser and go to http://localhost:5173.
🧪 API Endpoints
User Routes
POST /api/users/register – Register a new user.
POST /api/users/login – Log in and receive a JWT token.
Workout Routes (Protected)
GET /api/workouts – Get all workouts for the authenticated user.
POST /api/workouts – Create a new workout.
PUT /api/workouts/:id – Update a workout by ID.
DELETE /api/workouts/:id – Delete a workout by ID.
🤝 Contributing
Fork the project.
Create your feature branch: git checkout -b feature/my-feature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/my-feature.
Open a pull request.

Feel free to improve or customize the app as needed. Happy coding! 💻
