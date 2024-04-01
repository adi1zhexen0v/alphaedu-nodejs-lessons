import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isManager: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export const User = mongoose.model("User", userSchema);
