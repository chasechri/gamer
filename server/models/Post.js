const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
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

postSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});



const Post = model('Post', postSchema);

module.exports = Post;
