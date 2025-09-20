import express from "express";
import { protect } from "../middlewares/auth.js";
import {
  loginUser,
  registerUser,
  getUser,
  getUserCredits,
  updateUserCredits,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

// ✅ New route to get current logged-in user
userRouter.get("/data", protect, (req, res) => {
  res.json(req.user); // `req.user` is attached by protect middleware
});

userRouter.get("/:id", protect, getUser);
userRouter.get("/credits/:email", protect, getUserCredits);
userRouter.put("/credits/:email", protect, updateUserCredits);

export default userRouter;
