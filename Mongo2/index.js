const express = require("express");
const app = express();
const mongoose = require('mongoose');
const { connectDB, Chat } = require("./init");  // Assuming Chat model and connectDB function are exported from ./init

// Use EJS for rendering
app.set('view engine', 'ejs');

// Connect to MongoDB
connectDB();  // Ensure this function is properly connecting to MongoDB

// Route for root URL
app.get('/', (req, res) => {
  res.send("Server is listening");
});

// Create a new chat and save it
app.get('/new-chat', async (req, res) => {
  let chat1 = new Chat({
    from: "Neha",
    to: "Apurva",
    message: "Hey Apurva! HOW are you"
  });

  try {
    const savedChat = await chat1.save();  // Save the chat to MongoDB
    res.send(`Chat saved: ${savedChat}`);
  } catch (err) {
    res.send(`Error saving chat: ${err}`);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



