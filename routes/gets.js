const express = require("express");

const router = express.Router();

// Create Routes is now enabled

router.get("/get", (req, res) => {
  res.send("We are on Get!");
});


module.exports = router;