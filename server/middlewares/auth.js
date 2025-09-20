import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const protect = async (req, res, next) => {
  let token;

  // ✅ Check if Authorization header exists and starts with Bearer
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Extract token after 'Bearer'
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find user without password
      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Not authorized, user not found!",
        });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error("❌ Auth error:", error.message);
      res.status(401).json({ message: "Not authorized, token failed!" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token!" });
  }
};
