const Reading = require('../../models/reading')

module.exports = {
  create,
  index,
};

async function create(req, res) {
    try {
      req.body.user = req.user._id
      console.log(req.body)
      const createdReading = new Reading(req.body)
    createdReading.save()
    console.log(createdReading)
    res.json(req.body)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function index(req, res){
  try {
    const allReadings = await Reading.find({});
    res.json(allReadings)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}