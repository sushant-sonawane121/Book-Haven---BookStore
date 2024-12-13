import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    category: { type: String, required: true },
    coverImage: {
      data: Buffer,
      contentType: String,
    },
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, required: true },
        review: { type: String },
      },
    ],
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
