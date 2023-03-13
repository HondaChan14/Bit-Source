const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})