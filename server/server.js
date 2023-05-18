require('dotenv').config({ path: './config/.env' });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/user');

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: process.env.Origin,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Connected to database');
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((err) => {
        console.error(err);
    });

app.use('/', mainRoutes);
app.use('/user', userRoutes);
