const { Schema } = require('mongoose');


const profileSchema = new Schema(
  {
    gamertag: {
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
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = profileSchema;
