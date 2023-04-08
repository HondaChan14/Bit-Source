require('dotenv').config({ path: './config/.env' });
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const mainRoutes = require('./routes/main');

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

const corsOptions = {
    origin: `${process.env.Origin}`,
};

app.use(cors(corsOptions));

// Routes
app.use('/home', mainRoutes);

//Connect to MongoDB
mongoose
    .connect(process.env.DB_STRING)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(
                `Server running on port ${process.env.PORT} & Connected to MongoDB`
            );
        });
    })
    .catch((error) => {
        console.log(error);
    });
