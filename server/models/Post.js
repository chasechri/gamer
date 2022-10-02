const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const profileSchema = require('./Profile');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    postText: {
      type: String,
      required: 'Posting will increase your chances of finding teammates!',
      minlength: 1,
      maxlength: 280
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
    comments: [commentSchema],
    profiles: [profileSchema]
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
