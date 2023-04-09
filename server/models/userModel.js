const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

// Static signup Method
userSchema.statics.signup = async function (email, password) {
    //validate email and password
    if (!email || !password) {
        throw new Error('All feilds are required');
    }
    // Validate email is valid
    if (!validator.isEmail(email)) {
        throw new Error('Email is invalid');
    }
    // Validate password is strong
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }

    const emailExists = await this.findOne({ email });

    if (emailExists) {
        throw new Error('Email already in use');
    }

    // Salt the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create the user
    const user = await this.create({
        email,
        password: hashedPassword,
    });

    return user;
};

module.exports = mongoose.model('User', userSchema);
