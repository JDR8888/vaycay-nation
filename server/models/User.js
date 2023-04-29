const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

// want to keep track of parks user has been to
const visitedParkSchema = new Schema({
    parkId: {
      type: Number,
      required: true,
    },
    // Add any other properties you want to save
  });

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 30,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        maxLength: 20,
        match:  [/^\S+$/, 'Usernames may not contain spaces'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 25,
        match: [/.+@.+\..+/, 'Must match an email address']
    },
    password: {
        type: String,
        require: true,
        unique: true,
        maxLength: 20,
        match: [/.+@.+\..+/, 'Must match an email address'],
    },
    // list of friends - model should be self-referencing
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    visited: [visitedParkSchema] 
});

// pre-save middleware to create encrypted password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;