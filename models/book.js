const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: String,
    genre: String,
    authorId: {
        type: Schema.Types.ObjectId,
        ref: "Author",
    },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
