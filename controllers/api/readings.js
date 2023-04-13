// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const Reading = require('../../models/reading')

module.exports = {
  create,
};

async function create(req, res) {
    try {
      req.body.user = req.user._id
    // Add the user to the db
    // const user = await User.create(req.body);
    // const token = createJWT(user);
    // res.json(token);
    const createdReading = new Reading(req.body)
    createdReading.save()
    res.json(req.body)
  } catch (err) {
    res.status(400).json(err);
  }
}