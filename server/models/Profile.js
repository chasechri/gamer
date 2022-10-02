const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const profileSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    rank: {
        type: String,
        required: true
    },
    platform: {
        type: String, 
        required: true
    },
    hours: {
        type: String, 
        required: true
    },
    comms: {
        type: String, 
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = profileSchema;
