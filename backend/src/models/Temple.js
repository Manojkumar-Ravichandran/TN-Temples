const mongoose = require('mongoose');

const templeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    deity: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    history: String,
    description: String,
    timings: {
        morning: String,
        evening: String,
        specialNotes: String
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        coordinates: {
            type: [Number], // [longitude, latitude]
            required: true
        },
        address: String
    },
    images: [String],
    festivals: [{
        name: String,
        month: String,
        description: String
    }],
    contributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isApproved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

// Index for geo queries
templeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Temple', templeSchema);
