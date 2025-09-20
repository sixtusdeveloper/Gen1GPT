import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User Schema

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    credits: { type: Number, default: 20 }, // Default credits
  },
  { timestamps: true }
);

// Hash Password Before Saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// userSchema.plugin(require("mongoose-autopopulate")); // Not needed for your current schema

const User = mongoose.model("User", userSchema);

export default User;
