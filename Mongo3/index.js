const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chatBot');
}

main()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => console.log(err));

let chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
  },
  created_At: {
    type: Date,
    required: true,
    default: Date.now, // Set default value
  }
});

// Define model after schema
const chat = mongoose.model("chat", chatSchema);

let chat1 = new chat({
  from: "neha",
  to: "Apurva",
  message: "Hey! Apurva how are uhh"
});
app.get("/" , (req,res) => {
  res.send("hey, I am root!")
})
// Server listening on port 8080
app.listen(8080, () => {
  console.log("Server is listening to port 8080");
});

module.exports = chat1;
