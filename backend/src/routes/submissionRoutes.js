const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const Temple = require('../models/Temple');
const { protect, authorize } = require('../middlewares/auth');

// @desc    Submit a new temple or edit
// @route   POST /api/v1/submissions
// @access  Private (Contributor/Admin)
router.post('/', protect, authorize('Contributor', 'Admin'), async (req, res) => {
    try {
        const submission = await Submission.create({
            ...req.body,
            contributor: req.user._id,
        });
        res.status(201).json(submission);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// @desc    Get my submissions
// @route   GET /api/v1/submissions/my
// @access  Private (Contributor/Admin)
router.get('/my', protect, async (req, res) => {
    try {
        const submissions = await Submission.find({ contributor: req.user._id }).sort('-createdAt');
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Get all pending submissions
// @route   GET /api/v1/submissions/pending
// @access  Private/Admin
router.get('/pending', protect, authorize('Admin'), async (req, res) => {
    try {
        const submissions = await Submission.find({ status: 'pending' }).populate('contributor', 'name email');
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// @desc    Approve/Reject submission
// @route   PUT /api/v1/submissions/:id/approve
// @access  Private/Admin
router.put('/:id/:action', protect, authorize('Admin'), async (req, res) => {
    const { action } = req.params;
    const { adminComment } = req.body;

    if (!['approve', 'reject'].includes(action)) {
        return res.status(400).json({ message: 'Invalid action' });
    }

    try {
        const submission = await Submission.findById(req.params.id);
        if (!submission) return res.status(404).json({ message: 'Submission not found' });

        if (action === 'approve') {
            submission.status = 'approved';

            // If approved, create or update temple
            if (submission.submissionType === 'new') {
                const slug = submission.templeData.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                await Temple.create({
                    ...submission.templeData,
                    slug,
                    isApproved: true,
                    contributor: submission.contributor
                });
            } else if (submission.submissionType === 'edit' && submission.originalTemple) {
                await Temple.findByIdAndUpdate(submission.originalTemple, {
                    ...submission.templeData,
                    isApproved: true
                });
            }
        } else {
            submission.status = 'rejected';
        }

        submission.adminComment = adminComment;
        await submission.save();

        res.json({ message: `Submission ${action}d successfully` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
