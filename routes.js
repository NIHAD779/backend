const express = require('express')
const router = express.Router()
const {movies,comments} = require('./model')

router.get("/comments/:movieID", async (req, res) => {
  try {
    const movieID = req.params.movieID;
    console.log(movieID);
    const Comment = await comments.find({ movie_id: movieID });
    if (!Comment) {
      return res.status(404).json({ message: "Comments not found" });
    }
    res.json(Comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});


router.get("/movies", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit; 

    // Filtering parameters
    let filter = {};
    if (req.query.title) {
      filter.title = new RegExp(req.query.title, "i");
    }
    if (req.query.year) {
      filter.year = req.query.year;
    }
    const Movies = await movies
      .find(filter, {
        title: 1,
        year: 1,
        cast: 1,
      })
      .skip(skip)
      .limit(limit);

    const totalCount = await movies.countDocuments(filter);

    res.json({
      totalPages: Math.ceil(totalCount / limit),
      currentPage: page,
      movies: Movies,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
});



module.exports = router