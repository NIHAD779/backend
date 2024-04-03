const mongoose = require('mongoose')


const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  movie_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});


const comments = mongoose.model('comments', commentsSchema)
module.exports = {
  comments
};