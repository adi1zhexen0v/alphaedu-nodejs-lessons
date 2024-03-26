import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Поле 'username' обязателен"],
    trim: true,
  },
  age: {
    type: Number,
    required: [true, "Поле 'age' обязателен"],
  },
  email: {
    type: String,
    required: [true, "Поле 'email' обязателен"],
    unique: true,
  },
});

export const User = mongoose.model("User", userSchema);