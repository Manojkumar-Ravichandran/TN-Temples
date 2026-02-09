const express = require('express');
const router = express.Router();
const Temple = require('../models/Temple');
const { protect, authorize } = require('../middlewares/auth');

// @desc    Get all temples (with search and filters)
// @route   GET /api/v1/temples
// @access  Public
router.get('/', async (req, res) => {
    const { q, district, deity, limit = 10, page = 1 } = req.query;
    const query = { isApproved: true };

    if (q) {
        query.$or = [
            { name: { $regex: q, $options: 'i' } },
            { deity: { $regex: q, $options: 'i' } },
        ];
    }

    if (district) query.district = district;
    if (deity) query.deity = deity;

    try {
        const temples = await Temple.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await Temple.countDocuments(query);

        res.json({
            temples,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get nearby temples
// @route   GET /api/v1/temples/nearby
// @access  Public
router.get('/nearby', async (req, res) => {
    const { lat, lng, radius = 5000 } = req.query; // radius in meters

    if (!lat || !lng) {
        return res.status(400).json({ message: 'Please provide lat and lng' });
    }

    try {
        const temples = await Temple.find({
            isApproved: true,
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(lng), parseFloat(lat)],
                    },
                    $maxDistance: parseInt(radius),
                },
            },
        });

        res.json(temples);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get temple by slug
// @route   GET /api/v1/temples/:slug
// @access  Public
router.get('/:slug', async (req, res) => {
    try {
        const temple = await Temple.findOne({ slug: req.params.slug, isApproved: true });
        if (temple) {
            res.json(temple);
        } else {
            res.status(404).json({ message: 'Temple not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Create a temple (Admin only)
// @route   POST /api/v1/temples
// @access  Private/Admin
router.post('/', protect, authorize('Admin'), async (req, res) => {
    try {
        const temple = await Temple.create({ ...req.body, isApproved: true });
        res.status(201).json(temple);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
