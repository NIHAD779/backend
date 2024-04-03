const express = require('express')
const router = express.Router()
const {comments} = require('./model')

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


module.exports = router