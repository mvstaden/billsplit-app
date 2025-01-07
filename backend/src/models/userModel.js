import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  profileImg: {
    type: String,
    default: "",
  },
  friends: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
  ],
  bills: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bill",
      default: [],
    },
  ],
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

export default User;
