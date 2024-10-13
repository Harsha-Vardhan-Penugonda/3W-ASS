const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to submit user data and images
router.post('/submit', userController.submitUser);

module.exports = router;
