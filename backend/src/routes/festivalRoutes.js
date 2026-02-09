const express = require('express');
const router = express.Router();
const Festival = require('../models/Festival');
const { protect, authorize } = require('../middlewares/auth');

// @desc    Get all festivals
// @route   GET /api/v1/festivals
// @access  Public
router.get('/', async (req, res) => {
    try {
        const festivals = await Festival.find().populate('temple', 'name slug');
        res.json(festivals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a festival
// @route   POST /api/v1/festivals
// @access  Private/Admin
router.post('/', protect, authorize('Admin'), async (req, res) => {
    try {
        const festival = await Festival.create(req.body);
        res.status(201).json(festival);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
