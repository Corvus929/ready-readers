const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalSchema = new Schema ({
    goalName: String,
    pageGoal: Number,
    timeGoal: Number,
    readings: [{
        type: Schema.Types.ObjectId,
        ref: 'Reading'
    }]
})

module.exports = mongoose.model('Goal', goalSchema)