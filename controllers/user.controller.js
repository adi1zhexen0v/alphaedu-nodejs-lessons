import { User } from "../models/User.js";

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { firstName, lastName, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, email },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "Пользователь не найден" });
    }

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
}
