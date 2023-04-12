const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const readingSchema = new Schema({
    pages: Number,
    time: Number, //help time input?
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
    })