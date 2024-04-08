import { body } from "express-validator";
import { createCustomValidatorMiddleware } from "./general.validator.js";

const firstName = body("firstName")
  .exists()
  .withMessage("Поле firstName обязательна!")
  .isString()
  .withMessage("Поле firstName должно быть строкой!");

const lastName = body("lastName")
  .exists()
  .withMessage("Поле lastName обязательна!")
  .isString()
  .withMessage("Поле lastName должно быть строкой!");

const email = body("email")
  .exists()
  .withMessage("Поле email обязательна!")
  .isEmail()
  .withMessage("Поле email должно иметь в себе символ `@`!");

const password = body("password")
  .exists()
  .withMessage("Поле password обязательна!")
  .isString()
  .withMessage("Поле password должно быть строкой!")
  .isStrongPassword()
  .withMessage("Ваш пароль слишком простой!");

export const registerValidator = createCustomValidatorMiddleware([
  firstName,
  lastName,
  email,
  password,
]);

export const loginValidator = createCustomValidatorMiddleware([
  email,
  password,
]);
