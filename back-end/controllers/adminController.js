const db = require('../config/dbConfig');

// Admin login
exports.login = (req, res) => {
    const { username, password } = req.body;
    // Implement authentication logic (e.g., check against database)
    // For simplicity, assume successful login
    res.status(200).json({ message: 'Admin logged in successfully' });
};

// Get user submissions
exports.getUserSubmissions = (req, res) => {
    const query = 'SELECT * FROM users';

    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};
