const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  firstName: {
    type: String,
    required: [true, "Firstname is required"],
  },
  email: {
    type: String,
    required: [true, " Email is required"],
  },
  password: String,

  registerDate: {
    type: Date,
    default: Date.now,
  },
  image: String
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
