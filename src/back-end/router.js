const express = require("express");
const router = express.Router();

const { getUser, createUser, updateUser, deleteUser } = require("./controller");
router
  .get("/", getUser)
  .post("/", createUser)
  .put("/:id", updateUser)
  .delete(":id", deleteUser);

module.exports = router;
