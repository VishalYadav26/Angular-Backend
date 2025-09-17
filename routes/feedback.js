const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback");

// POST: add feedback
router.post("/", async (req, res) => {
  try {
    const feedback = new Feedback({
      username: req.body.username,
      note: req.body.note
    });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET: list all feedbacks (optional)
router.get("/", async (req, res) => {
  try {
    const allFeedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(allFeedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
