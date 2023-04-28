const mongoose = require('mongoose');
const { Schema } = mongoose;
const axios = require('axios');



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
    }

})
