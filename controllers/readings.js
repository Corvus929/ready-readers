const reading = require('../models/reading');
const goal = require('../models/goal');
const { default: ReadingsPage } = require('../src/pages/ReadingsPage/ReadingsPage');
const { default: ReadingsDetails } = require('../src/pages/ReadingsDetailPage/ReadingsDetailPage');
const { default: NewReading } = require('../src/pages/NewReadingPage/NewReadingPage');

module.exports = {
    index,
    show,
    // new: NewReading,
    create,
};

async function index(req, res) {
    const readings = await ReadingsPage.find({}).exec();
    res.json(readings);
}

async function show(req, res) {
    const reading = await ReadingsDetails.findById(req.params.id);
    res.json(reading);
}

async function create(req, res) {
    const reading = new Reading(req.body)
    reading.save();
    
}

// async function newReading(req, res) {
    

// }