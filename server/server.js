require('dotenv').config({ path: "config/.env" });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 8000;

// Enable CORS for specific origins
const corsOptions = {
    origin: process.env.Origin
};

app.use(cors(corsOptions)); 
app.use(express.json());

// Use morgan as middleware for logging HTTP requests
app.use(morgan('dev'));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Listening on port http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

app.use('/', mainRoutes);
app.use('/user', userRoutes);