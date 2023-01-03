const { req, res } = require("express");

const UserModel = require("./model");

exports.createUser = async (req, res) => {
  if (!req.body?.firstName || !req.body?.email || !req.body?.password) {
    res
      .status(400)
      .json({ message: `Firsname , email or password are required` });
    return;
  }
  console.log(req.body)
  const createUser = await UserModel.create({ ...req.body });
  res.status(201).json({ message: ` New user is created`, data: createUser });
};
exports.getUsers = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    res.status(200).json({ message: true, data: post });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndUpdate(id, { ...req.body });
    res.status(200).json({
      message: `User with ${req.params.id} id is updated`,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findByIdAndDelete(id, { ...req.body });
    res.status(200).json({
      message: `User with ${req.params.id} id is deleted`,
      data: post,
    });
  } catch (error) {
    return res.status(400).json({ message: true, data: null });
  }
};
exports.loginUser = async (req, res) => {
  const { eamil, password } = req.body;
  const user = await UserModel.findOne({email});
  if (user.password === password) res.send(user.id);
};
