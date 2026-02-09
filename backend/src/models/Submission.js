const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    templeData: {
        name: { type: String, required: true },
        deity: String,
        district: String,
        location: {
            type: { type: String, default: 'Point' },
            coordinates: [Number],
            address: String
        },
        timings: { morning: String, evening: String },
        history: String,
        images: [String],
    },
    contributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    adminComment: String,
    submissionType: {
        type: String,
        enum: ['new', 'edit'],
        default: 'new'
    },
    originalTemple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple'
    }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);
