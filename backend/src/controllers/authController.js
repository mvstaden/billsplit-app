import { generateToken } from "../lib/utils/generateToken.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
  try {
    const { username, firstName, lastName, email, password } = req.body;
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long" });
    }

    //Hash password

    //Create Salt
    const salt = await bcrypt.genSalt(10);

    //Hashing password
    const hashedPassword = await bcrypt.hash(password, salt);

    //newUser
    const newUser = new User({
      username,
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    generateToken(newUser.id, res);
    await newUser.save();
    res.status(200).send({ message: "Registration Successfull" });
  } catch (error) {
    console.log(`Error registering user:${error.message}`);
    res.status(500).json({ message: "Server error" });
  }
};
