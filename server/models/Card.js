const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const cardSchema = new Schema(
  {
    rank: {
        type: String,
        required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema]
    
  },
  {
    toJSON: {
      getters: true
    }
  }
);

cardSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});



const Card = model('Card', cardSchema);

module.exports = Card;