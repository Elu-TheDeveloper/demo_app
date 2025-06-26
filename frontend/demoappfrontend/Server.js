const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Redirect all other requests to index.html (for SPA routing)
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server on port 80
app.listen(80, () => {
    console.log('Server running on http://localhost');
});
