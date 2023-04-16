const Reading = require('../../models/reading')

module.exports = {
  create,
  index,
  edit,
  delete: deleteReading,
};

async function create(req, res) {
    try {
      req.body.user = req.user
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
/* 
for every reading
check the reading.user
and if it matches req.user
it becomes part of allReadings
*/

async function index(req, res){
  try {
    
    const allReadings = await Reading.find({});
    // const allReadings = [];
    // for(Reading.find({})) {
    // if (Reading.user === (req.user))
    // allReadings.push() }
    // const allReadings = Reading.each(Reading.user === (req.user)) 
    // for (Reading.user === req.user) allReadings.push();
    // Reading.forEach(reading => reading.user = req.user)
    // Reading.map(reading => {
    // if (reading.user === req.user) allReadings.push(reading)
  // })
    res.json(allReadings)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}

async function edit(req, res) {
  // try {
  //   const reading = await Reading.find({})
  // } catch (err) {
  //   console.log(err)
  //   res.status(400).json(err)
  // }
}

async function deleteReading(req, res){ 
  try {
    await Reading.findByIdAndDelete(req.params._id)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}