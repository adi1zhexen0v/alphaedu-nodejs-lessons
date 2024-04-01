import { User } from "../models/User.js";
import { hashPassword } from "../services/bcrypt.js";

export async function register(req, res) {
  try {
    // деструк. тело запроса
    const { username, password } = req.body;

    // шифрование пароля
    const hashedPassword = await hashPassword(password);

    // создание нового пользователя
    const newUser = new User({ username, password: hashedPassword });
    const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
}
