const express = require("express");
const router = express.Router();

// @route   GET api/restaurants
// @desc    get all restaurants for user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get all restaurants");
});

// @route   POST api/restaurants
// @desc    add new restaurants
// @access  Private
router.post("/", (req, res) => {
  res.send("Add new restaurant");
});

// @route   PUT api/restaurant/:id
// @desc    Update a restaurants
// @access  Private
router.put("/:id", (req, res) => {
  res.send("Update restaurant");
});

// @route   DELETE api/restaurant/:id
// @desc    Delete a restaurants
// @access  Private
router.delete("/:id", (req, res) => {
  res.send("Delete restaurant");
});

module.exports = router;
