const reading = require('../../models/reading');
const Reading = require('../../models/reading')

module.exports = {
  create,
  index,
  edit,
  delete: deleteReading,
};

async function create(req, res) {
    try {
      console.log(req.body.reading)
      req.body.reading.user = req.user
      const createdReading = new Reading(req.body.reading)
    createdReading.save()
    res.json(req.body)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function index(req, res){
  try {
    const allReadings = await Reading.find({user: req.user._id});
    res.json(allReadings)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function edit(req, res) {
  try {
    const editedLog = await Reading.findByIdAndUpdate(req.params.id, req.body.reading, {new: true})
    res.json(editedLog)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function deleteReading(req, res){ 
  try {
    console.log(req.body.reading)
    await Reading.findByIdAndDelete(req.body.reading)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}