Alchemy - Project Collaboration Platform

Alchemy is a web-based platform designed to simplify project collaboration among students. It provides features like project creation, team formation, skill-based matching, and seamless communication, making it easier for students to connect and work on projects aligned with their interests and abilities.

---

## Features

### *User Management & Authentication*
- *Secure User Registration and Login*: Ensures account safety with hashed passwords and email verification.
- *Profile Customization*: Allows users to showcase their skills, interests, and university affiliations.
- *Password Recovery System*: Facilitates secure password reset for users.

### *Project Management*
- *Create and Manage Projects*: Users can create detailed project listings, specifying roles, categories, and team size.
- *Role Management*: Assign multiple roles for better project organization.
- *Categorization System*: Enables easy project classification for better visibility.
- *Status Tracking*: Keep track of ongoing, completed, and upcoming projects.

### *Collaboration Tools*
- *Real-Time Messaging*: Connect with team members instantly via Socket.IO.
- *Application Management*: Users can apply to projects, bookmark favorites, and manage team requests.
- *Search & Discovery*: Use advanced filters like skills, university, and category to find projects or teammates.

### *Notification System*
- *Real-Time Updates*: Get notified for new messages, project applications, status changes, and invitations.

---

## Technical Stack

### *Frontend*
- *EJS*: Embedded JavaScript for server-side rendering.
- *CSS3*: Custom variables and animations for a modern UI.
- *JavaScript (ES6+)*: Enhances interactivity and functionality.
- *AJAX*: Enables asynchronous data loading.
- *Responsive Design*: Optimized for desktop and mobile devices.
- *Icons*: Remix Icons and Font Awesome for enhanced UI elements.

### *Backend*
- *Node.js*: Runtime environment for the server-side application.
- *Express.js*: Framework for building robust APIs and server logic.
- *MongoDB*: Database for storing user, project, and messaging data.
- *Socket.IO*: Real-time communication for messaging and notifications.
- *JWT*: Secure token-based authentication.
- *Bcrypt*: Password hashing for enhanced security.

### *Additional Tools & Libraries*
- *Nodemailer*: For email verification and password recovery.
- *Multer*: Manages file uploads like project images.
- *Express Session*: For session-based authentication.
- *Connect-Mongo*: Stores sessions in MongoDB.
- *Socket.IO*: Implements real-time features like notifications and chat.

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- *Node.js* (v14 or later)
- *MongoDB* (Local or cloud-based)
- *NPM* (Comes with Node.js)

### Steps
1. *Clone the Repository*
   bash
   git clone https://github.com/username/alchemy.git
   cd alchemy
   

2. *Install Dependencies*
   Run the following command to install all required packages:
   bash
   npm install
   

3. *Environment Variables*
   Create a .env file in the root directory and add the following variables:
   
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/alchemy
   JWT_SECRET=your_jwt_secret
   EMAIL_HOST=smtp.your-email-provider.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   

4. *Start MongoDB*
   If running MongoDB locally, ensure the service is running:
   bash
   mongod
   

5. *Start the Server*
   Launch the application:
   bash
   npm start
   

6. *Access the Application*
   Open your browser and navigate to:
   
   http://localhost:3000
   

---

## Folder Structure

plaintext
alchemy/
├── controllers/        # Handles request logic for routes
├── models/             # MongoDB models (User, Project, etc.)
├── routes/             # Defines API and app routes
├── views/              # EJS templates for rendering
├── public/             # Static files (CSS, JS, images)
├── middleware/         # Middleware functions (auth, validation)
├── config/             # Configuration files (database, email)
├── .env.example        # Example environment variables
├── server.js           # Main server file
└── package.json        # Dependencies and scripts


---

## Features in Action

1. *User Registration*  
   Users can register with email verification, set their profiles, and list their skills.

2. *Project Creation*  
   Users can create detailed project listings, upload images, and specify roles.

3. *Real-Time Chat*  
   Collaborate with team members through real-time messaging.

4. *Search & Discover*  
   Advanced filters help users find projects and teammates based on specific criteria.

---

## Contributing
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch:
   bash
   git checkout -b feature-name
   
3. Commit your changes:
   bash
   git commit -m "Add new feature"
   
4. Push to your branch:
   bash
   git push origin feature-name
   
5. Open a pull request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

*Alchemy* - Empowering students to collaborate, innovate, and succeed!
