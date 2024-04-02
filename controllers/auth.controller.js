import { User } from "../models/User.js";
import { hashPassword } from "../services/bcrypt.js";

export async function register(req, res) {
  try {
    const { firstName, lastName, email, password } = req.body;

    const emailAlreadyExists = await User.findOne({ email });
    if (emailAlreadyExists) {
      res.status(409).json({ message: "Данная электронная почта занята." });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
