import { Schema, models, Model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists"],
    required: [true, "Email is required"],
  },
  username: {
    type: String,
    unique: [true, "Username already exists"],
    required: [true, "Username is required"],
    match: [
      /^[a-zA-Z0-9]+$/,
      "Username is invalid, it should contain only letters and numbers and be unique",
    ],
    minlength: [5, "Username should be at least 3 characters long"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", userSchema);

export default User;
