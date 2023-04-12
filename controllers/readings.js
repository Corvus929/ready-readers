const reading = require('../models/reading');
const goal = require('../models/goal');
const { default: ReadingsPage } = require('../src/pages/ReadingsDetailPage/ReadingsDetailPage');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const readings = await ReadingsPage.find({}).exec();
    res.json(readings);
}

async function show(req, res) {
    const reading = await ReadingsPage.findById(req.params.id);
    res.json(reading);
}