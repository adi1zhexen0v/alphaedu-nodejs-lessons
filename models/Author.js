import mongoose from "mongoose";

const certicateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  { _id: false }
);

const authorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  certificate: {
    type: certicateSchema,
    required: true,
  },
  courses: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
    ref: "Course",
  },
});

export const Author = mongoose.model("Author", authorSchema);
