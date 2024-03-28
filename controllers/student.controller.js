import { Student } from "../models/Student.js";
import { Course } from "../models/Course.js";

export async function createStudent(req, res) {
  try {
    const { fullName, age } = req.body;
    const newStudent = new Student({ fullName, age });
    const result = await newStudent.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

export async function enrollStudentInCourse(req, res) {
  try {
    const { courseId, studentId } = req.body;

    const studentUpdate = await Student.findByIdAndUpdate(studentId, {
      $push: { courses: courseId },
    });
    const courseUpdate = await Course.findByIdAndUpdate(courseId, {
      $push: { students: studentId },
    });

    if (!studentUpdate || !courseUpdate) {
      return res.status(404).json({ message: "Студент или курс не найден" });
    }

    res.json({ message: "Курс был успешно добавлен студенту." });
  } catch (error) {
    res.status(500).send(error.toString());
  }
}
