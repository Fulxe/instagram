const express = require("express");
const router = express.Router();

const { getUser, createUser, updateUser, deleteUser  , getUsers } = require("./controller");
router
  .get("/", getUsers)
  .get("/:id", getUser)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete(":id", deleteUser);

module.exports = router;
