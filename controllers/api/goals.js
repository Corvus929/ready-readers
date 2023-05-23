const Goal = require('../../models/goal')

module.exports = {
  create,
  index,



};

async function create(req, res) {
    try {
      console.log(req.body.goal)
      req.body.goal.user = req.user
      const createdGoal = new Goal(req.body.goal)
    createdGoal.save()
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