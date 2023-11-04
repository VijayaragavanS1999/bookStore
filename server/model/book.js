import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  publishYear: {
    type: Number,
    require: true,
  },
});

export const Books = new mongoose.model("books", bookSchema);
