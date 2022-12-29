const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  firstName: String,
  email: String,
  password: String,

  registerDate: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
