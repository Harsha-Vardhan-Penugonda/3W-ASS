const User = require('../models/User');
const Image = require('../models/Image');
const upload = require('../middleware/fileUpload');

// Submit user data and images
exports.submitUser = (req, res) => {
    // First handle file uploads
    upload(req, res, (err) => {
        if (err) {
            return res.status(400).json({ error: err });
        }

        const { name, socialHandle } = req.body;

        // Create user in the database
        User.create(name, socialHandle, (userErr, userId) => {
            if (userErr) {
                return res.status(500).json({ error: userErr.message });
            }

            // Save images
            const imagePromises = req.files.map(file => {
                return new Promise((resolve, reject) => {
                    Image.create(userId, file.path, (imageErr, result) => {
                        if (imageErr) {
                            reject(imageErr);
                        } else {
                            resolve(result);
                        }
                    });
                });
            });

            // Handle image saving completion
            Promise.all(imagePromises)
                .then(() => {
                    res.status(201).json({ message: 'User and images submitted successfully' });
                })
                .catch((imageErr) => {
                    res.status(500).json({ error: imageErr.message });
                });
        });
    });
};
