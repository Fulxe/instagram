const express = require("express");
const router = express.Router();

const { getUser, createUser, updateUser, deleteUser } = require("./controller");
router
  .post("/", createUser)
  .get("/", getUser)
  .put("/:id", updateUser)
  .delete(":id", deleteUser);

module.exports = router;
