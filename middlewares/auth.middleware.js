import jwt from "jsonwebtoken";
import "dotenv/config";

const { JWT_SECRET_KEY } = process.env;

export const authUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Токен отсутствует" });
  }

  const token = authHeader.replace(/^Bearer\s+/, "");

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.userId = decoded.userId;
    req.isManager = decoded.isManager;
    next();
  } catch (error) {
    res.status(401).json({ message: "Невалидный токен" });
  }
};

export const checkIsManager = (req, res, next) => {
  if (req.isManager) {
    next();
  } else {
    res.status(403).json({ message: "Нет доступа" });
  }
};
