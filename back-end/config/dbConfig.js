const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',     // Database host
    user: 'root',  // Database username
    password: '', // Database password
    database: 'w3Assignment', // Database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

module.exports = db;
