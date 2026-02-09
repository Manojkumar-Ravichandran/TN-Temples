const express = require('express');
const router = express.Router();
const Update = require('../models/Update');
const { protect, authorize } = require('../middlewares/auth');

// @desc    Get all updates
// @route   GET /api/v1/updates
// @access  Public
router.get('/', async (req, res) => {
    try {
        const updates = await Update.find().sort('-createdAt').populate('temple', 'name slug');
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create an update
// @route   POST /api/v1/updates
// @access  Private/Admin
router.post('/', protect, authorize('Admin'), async (req, res) => {
    try {
        const update = await Update.create(req.body);
        res.status(201).json(update);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
