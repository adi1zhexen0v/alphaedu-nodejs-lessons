import jwt from "jsonwebtoken";

export const authUser = (req, res, next) => {
  // Получаем заголовок авторизации
  const authHeader = req.headers.authorization;

  // Проверяем, существует ли заголовок
  if (!authHeader) {
    return res.status(401).json({ message: "Токен отсутствует" });
  }

  // Удаляем префикс "Bearer " из заголовка, если он присутствует
  // Регулярное выражение /^Bearer\s+/ удаляет "Bearer " и все пробелы после него в начале строки
  const token = authHeader.replace(/^Bearer\s+/, "");

  try {
    const decoded = jwt.verify(token, "secretkey");
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
