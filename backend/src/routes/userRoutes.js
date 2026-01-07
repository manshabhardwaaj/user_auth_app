const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

// @route   GET /api/user/me
// @desc    Get logged-in user profile
// @access  Private
router.get("/me", protect, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;