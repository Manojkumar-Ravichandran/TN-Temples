const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple'
    },
    category: {
        type: String,
        enum: ['Announcement', 'Ritual Change', 'Renovation', 'Event'],
        default: 'Announcement'
    },
    isUrgent: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Update', updateSchema);
