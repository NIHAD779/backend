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

const moviesSchema = new mongoose.Schema({
  plot: {
    type: String,
  },
  genres: {
    type: Array,
  },
  runtime: {
    type: Number,
  },
  cast: {
    type: Array,
  },
  poster: {
    type: String,
  },
  title: {
    type: String,
  },
  languages: {
    type: Array,
  },
  released: {
    type: Date,
  },
  directors: {
    type: Array,
  },
  awards: {
    win: {
      type: Number,
    },
    nominations: {
      type: Number,
    },
    text: {
      type: String,
    },
  },
  lastUpdated: {
    type: Date,
  },
  year: {
    type: Number,
  },
  imdb: {
    rating: {
      type: Number,
    },
    votes: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  countires: {
    type: Array,
  },
  type: {
    type: String,
  },
  tomatoes: {
    viewer: {
      rating: {
        type: Number,
      },
      numReviews: {
        type: Number,
      },
      meter: {
        type: Number,
      },
    },
    fresh: {
      type: Number,
    },
    critic: {
      rating: {
        type: Number,
      },
      numReviews: {
        type: Number,
      },
      meter: {
        type: Number,
      },
    },
    rotten: {
      type: Number,
    },
    lastUpdated:{
      type: Date,
    }
  },
});


const comments = mongoose.model('comments', commentsSchema)
const movies = mongoose.model('movies', moviesSchema) 
module.exports = {
  comments,
  movies
};