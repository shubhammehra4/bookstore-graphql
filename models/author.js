const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
});

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
