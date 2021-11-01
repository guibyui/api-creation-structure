const express = require("express");
// const Post = require("../models/Post");
const router = express.Router();

// Create Routes is now enabled

// const Post = require('../models/Post')

// Post
router.post("/", async (req, res) => {
  // console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get all posts!
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
  res.send("We are on Posts!");
});

// router.get("/specific", (req, res) => {
//   res.send("We are on Specific");
// });

// Get Specific Post
router.get("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Specific Post
router.delete("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const removedPost = await Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update Specific Post
router.patch("/:postId", async (req, res) => {
  //   console.log(req.params.postId);
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
