import express from "express";
import mongoose from "mongoose";
import { Books } from "./model/book.js";
import { validationResult } from "express-validator";
import { booksValidator } from "./validation/books.js";

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  return res.send("hi");
});

//insert Book
app.post("/insertBook", booksValidator, async (req, res) => {
  try {
    const booksData = req.body;
    const errors = validationResult(booksData);
    // if (errors.isEmpty()) {
    //   // in case request params meet the validation criteria
    //   return res.status(404).send({ errors: errors.array() });
    // } else {
    const book = Books.create(booksData);
    return res.status(200).send(book);
    // }
  } catch (error) {
    console.log(error);
  }
});
mongoose
  .connect(
    "mongodb+srv://sasigaviprt:nXyVUl7P5i0ZWMQi@cluster0.dtqmjo1.mongodb.net/Book-store?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen("3008", (port) => {
      console.log("SD");
    });
  })
  .catch((err) => {
    console.log(err);
  });
