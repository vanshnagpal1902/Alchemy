require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const connectDB = require('./config/database');

// Connect to MongoDB first
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

// Set view engine
app.set('view engine', 'ejs');

// Wait for MongoDB connection before setting up session
mongoose.connection.once('open', () => {
    console.log('MongoDB connected, setting up session store');
    
    // Session configuration
    app.use(session({
        secret: process.env.SESSION_SECRET || 'your-secret-key',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
            collectionName: 'sessions',
            ttl: 24 * 60 * 60, // 1 day
            autoRemove: 'native'
        }),
        cookie: {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        }
    }));

    // Import and use routes
    const authRoutes = require('./routes/auth');
    const profileRoutes = require('./routes/profile');
    const projectRoutes = require('./routes/projects');
    const searchRoutes = require('./routes/search');
    const messageRoutes = require('./routes/messages');
    const requestRoutes = require('./routes/requests');
    const notificationRoutes = require('./routes/notifications');
    const dashboardRoutes = require('./routes/dashboard');

    // Routes
    app.use('/auth', authRoutes);
    app.use('/profile', profileRoutes);
    app.use('/projects', projectRoutes);
    app.use('/search', searchRoutes);
    app.use('/messages', messageRoutes);
    app.use('/requests', requestRoutes);
    app.use('/notifications', notificationRoutes);
    app.use('/dashboard', dashboardRoutes);

    // Root route
    app.get('/', (req, res) => {
        if (req.session.user) {
            res.redirect('/dashboard');
        } else {
            res.redirect('/auth/login');
        }
    });

    // Start server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// Handle MongoDB connection errors
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Add this after your routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal Server Error' 
            : err.message 
    });
});

// Add this for handling 404
app.use((req, res) => {
    res.status(404).send('Page not found');
});
