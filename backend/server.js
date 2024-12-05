const express = require('express');
const path = require('path');
const cors = require('cors'); // Add CORS support for development
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();

// Enable CORS for all origins (for development)
app.use(cors());

// Use middleware to parse JSON and form data
app.use(express.json());  // Replacing body-parser with Express' built-in middleware
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for handling appointment booking, modification, and cancellation
app.use('/api/appointments', bookingRoutes);

// Serve HTML page for booking (Ensure the 'index.html' exists in the 'public' folder)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware (catch-all for other errors)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
