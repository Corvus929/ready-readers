const Goal = require('../../models/goal')

module.exports = {
  create,
  index,
};

async function create(req, res) {
    try {
      req.body.user = req.user._id
      const createdGoal = new Goal(req.body)
    createdGoal.save()
    console.log(createdGoal)
    res.json(req.body)
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}

async function index(req, res){
  try {
    const allGoals = await Goal.find({});
    res.json(allGoals)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
}