const { req, res } = require("express");

const UserModel = require("./model");

exports.createUser = async (req, res, next) => {
  if (!req.body?.firstName || !req.body?.email || !req.body?.password) {
    res
      .status(400)
      .json({ message: `Firsname , email or password are required` });
    return;
  }

  const createUser = await UserModule.create({ ...req.body });
  res.status(201).json({ message: ` New user is created`, data: createUser });
};
