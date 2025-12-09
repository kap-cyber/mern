const mongoose = require('mongoose');

require("dotenv").config();

const URI = process.env.MONGO_DB_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
