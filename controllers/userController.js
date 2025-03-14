const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const usr = {name : req.body.name, email: req.body.email, password: req.body.password};
    const user = new User(usr);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({error: err.message});
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}

module.exports = {getAllUsers, createUser};