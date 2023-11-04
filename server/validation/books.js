import { body } from "express-validator";

export const booksValidator = [
  body("title", "Invalid does not Empty").isEmpty(),
  body("author", "Invalid email").isEmpty(),
  body("publishYear", "The minimum password length is 4 characters").isLength({
    min: 4,
  }),
];
