const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
  firstName: {
    type: String,
    required: [true, "Firstname is required"],
    minlength: [6, "Firstname length must be at least 6 charachters"],
    maxlength: [20, "Firstname length must be 6 to 50 charachters"],
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
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;
