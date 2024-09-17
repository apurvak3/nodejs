const mongoose = require("mongoose");

// Define schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});

// Create model
const Book = mongoose.model("Book", bookSchema);

// Create instance of model
let Book1 = new Book({
    title: "Mathematics",
    author: "RD SHARMA",
    price: 1200,  // Changed 'Price' to 'price'
});

// Save instance to the database
Book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.error(err);
});
