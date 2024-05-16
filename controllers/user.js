const propertyModel = require("../models/user");

exports.saveUserData = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    const newUser = new propertyModel({
      name: name,
      mail: email,
      address: address,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (err) {
    console.error("Error saving user data:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getUserData = async (req, res) => {};

exports.UpdateuserData = async (req, res) => {
  try {
    console.log(666, req.body);
    const user = propertyModel.findOne( {_id: req.params.id});
    console.log(666, user);
  } catch {
    res.status(400).json({ message: "something went wrong", success: false });
  }
};
