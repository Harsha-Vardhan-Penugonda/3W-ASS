const db = require('../config/dbConfig');

// Submit user data
exports.submitUser = (req, res) => {
    const { name, socialHandle } = req.body;
    const query = 'INSERT INTO users (name, social_handle) VALUES (?, ?)';

    db.query(query, [name, socialHandle], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        const userId = result.insertId;

        // Handle image uploads (not shown here)
        // After storing images, send success response
        res.status(201).json({ message: 'User submitted successfully', userId });
    });
};
