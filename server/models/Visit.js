const mongoose = require('mongoose');
const { Schema } = mongoose;

const visitSchema = new Schema({

    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => timestamp.toLocaleDateString().concat(' ', timestamp.toLocaleTimeString()),
    },
    park: {
        type: String,
        required: true,
    },
    review: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }


})