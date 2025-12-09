// models/User.js
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
// Define the schema
const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone_number: {
    type: String,
    default: null 
  },
  password: {
    type: String,
    default: null 
  },
  google_id: {
    type: String,
    default: null 
  },
  picture: {
    type: String,
    default: null
  },
  auth_type: {
    type: String,
    enum: ['manual', 'google'],
    default: 'manual'
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre("save",async function(next){
    const User = this;
    if(!User.isModified("password")){
        return next();
    }
    try {
     const salt = await bcrypt.genSalt(10);
     User.password = await bcrypt.hash(User.password,salt); 
    } catch (error) {
      next(error);
    }

})

const User = new mongoose.model('User', userSchema);

module.exports = User;
