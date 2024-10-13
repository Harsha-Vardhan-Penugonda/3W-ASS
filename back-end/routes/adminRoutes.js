const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin login route
router.post('/login', adminController.login);

// Route to get all user submissions
router.get('/submissions', adminController.getUserSubmissions);

module.exports = router;
