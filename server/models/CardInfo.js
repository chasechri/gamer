const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const cardInfoSchema = new Schema(
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
    voiceChat: {
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

const CardInfo = model('CardInfo', cardInfoSchema);

module.exports = CardInfo;
