import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  courses: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "Course",
  },
});

export const Student = mongoose.model("Student", studentSchema);
