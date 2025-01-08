import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookie["auth_token"];
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    const decoded = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized:Invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error verifying token");
    res.status(500).json({ message: "Server error" });
  }
};
