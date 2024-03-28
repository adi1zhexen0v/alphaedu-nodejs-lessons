import { Course } from "../models/Course.js";
import { Author } from "../models/Author.js";

export async function getCourseById(req, res) {
  try {
    const course = await Course.findById(req.params.id)
      .populate("author")
      .populate("students")
      .exec();

    if (!course) {
      return res.status(404).json({ message: "Курс не найден" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

export async function createCourse(req, res) {
  try {
    const { authorId } = req.params;
    const { title, description } = req.body;

    const newCourse = new Course({ title, description, author: authorId });
    const result = await newCourse.save();

    await Author.findByIdAndUpdate(authorId, {
      $push: { courses: result._id },
    });

    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}
