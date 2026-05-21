const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint for Cloud Run
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API endpoint for contact form (if needed in the future)
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // In a production environment, you would:
  // 1. Validate the input
  // 2. Send an email using a service like SendGrid, Nodemailer, etc.
  // 3. Store the message in a database
  
  console.log('Contact form submission:', { name, email, message });
  
  res.status(200).json({
    success: true,
    message: 'Thank you for your message! I will get back to you soon.'
  });
});

// Serve static files from the React app build directory
// In Docker: __dirname is /app, so ./client/build is correct
// In development: __dirname is server/, so ../client/build is correct
const buildPath = path.join(__dirname, process.env.NODE_ENV === 'production' ? './client/build' : '../client/build');
app.use(express.static(buildPath));

// Serve React app for all other routes (SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check available at http://localhost:${PORT}/health`);
});

