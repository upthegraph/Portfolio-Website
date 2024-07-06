const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const cors = require('cors'); // Import cors package

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());
app.use(cookieParser());

// Enable CORS with options
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true // Allow cookies from cross-origin requests
}));

// Link the router files
app.use(require('./router/auth'));

const PORT = process.env.PORT || 5000; // Use a default port if PORT is not defined

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
