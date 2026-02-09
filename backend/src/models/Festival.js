const mongoose = require('mongoose');

const festivalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    temple: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Temple'
    },
    district: String,
    description: String,
    images: [String],
}, { timestamps: true });

module.exports = mongoose.model('Festival', festivalSchema);
