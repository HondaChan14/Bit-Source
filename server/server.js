const express = require('express');
const app = express();
const cors = require('cors');
//const mongoose = require('mongoose');
//Connect to MongoDB
//mongoose.connect(process.env.MONGODB_URI)

const mainRoutes = require('./routes/main');

require('dotenv').config({ path: './config/.env' });

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

const corsOptions = {
  origin: `${process.env.Origin}`,
};

app.use(cors(corsOptions));

app.use('/', mainRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
