const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // <--- FIRST: require cors

const app = express();
const port = 5000;

// Setup CORS middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Setup DB pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'demoapp',
    password: 'demoapp',
    database: 'demo_app',
    connectionLimit: 10
});

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Test');
});

app.post("/add-employee", (req, res) => {
    console.log("Received request to add employee");

    const sql = `INSERT INTO \`employee test\` (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
    const values = [
        req.body.first_name,
        req.body.last_name,
        req.body.email,
        req.body.password
    ];

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ error: 'Database error' }); 
            return;
        }

        console.log('Insert result:', result);
        res.json({ message: 'Employee added successfully' });
        
    });
});


// Start server
app.listen(port, () => {
    console.log(`Listening on port ${port}`);

    // Test DB connection after server starts
    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database');
        connection.release();
    });
});
