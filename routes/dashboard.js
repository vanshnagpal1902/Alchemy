const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { requireAuth } = require('../middleware/auth');

router.get('/', requireAuth, async (req, res) => {
    try {
        // Get unique universities for the filter
        const universities = await User.distinct('university');
        
        res.render('dashboard', { 
            user: req.session.user,
            universities: universities,
            title: 'Dashboard'
        });
    } catch (error) {
        console.error('Error loading dashboard:', error);
        res.status(500).send('Error loading dashboard');
    }
});

module.exports = router; 