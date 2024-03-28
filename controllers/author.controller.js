import { Author } from "../models/Author.js";

export async function getAuthorById(req, res) {
  try {
    const author = await Author.findById(req.params.id).populate("courses");

    if (!author) {
      return res.status(404).json({ message: "Автор не найден" });
    }

    res.json(author);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}

export async function createAuthor(req, res) {
  try {
    const newAuthor = new Author(req.body);
    const result = await newAuthor.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error.toString());
  }
}
