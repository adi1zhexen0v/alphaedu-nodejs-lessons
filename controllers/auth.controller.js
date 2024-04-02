import { User } from "../models/User.js";
import { hashPassword, isPasswordValid } from "../services/bcrypt.js";
import jwt from "jsonwebtoken";

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

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Неверный логин и пароль" });
    }

    const passwordIsValid = await isPasswordValid(password, user.password);
    if (!passwordIsValid) {
      res.status(404).json({ message: "Неверный логин и пароль" });
    }

    const token = jwt.sign(
      { userId: user._id, isManager: user.isManager },
      "secretkey",
      { expiresIn: "12h" }
    );

    res.json({
      token,
    });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
