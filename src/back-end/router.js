const express = require("express");
const { getUsers } = require("../../../Test/node/controller");
const router = express.Router();

const { getUser, createUser, updateUser, deleteUser } = require("./controller");
router
  .get("/", getUser)
  .post("/", createUser)
  .get("/:id", getUsers)
  .put("/:id", updateUser)
  .delete(":id", deleteUser);

module.exports = router;
