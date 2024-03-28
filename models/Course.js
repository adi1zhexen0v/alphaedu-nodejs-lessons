import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
  students: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student",
    default: [],
  },
});

export const Course = mongoose.model("Course", courseSchema);
