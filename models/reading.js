const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    bookName: String,
    pages: Number,
    time: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
    })

module.exports = mongoose.model('Reading', readingSchema);