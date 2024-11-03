const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Chat = require("./models/chat"); 
const { connectDB } = require("./init");
const methodOverride = require("method-override");
const path = require("path");
const ExpressError = require("./ExpressError");

// Use EJS for rendering
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Connect to MongoDB
connectDB();

// Route for root URL
app.get('/', (req, res) => {
  res.send("Server is listening");
});

app.get('/chats/new', (req, res) => {
  res.render("new.ejs");
});

// Create a new chat and save it
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  let newChat = new Chat({
    from: "Neha",
    to: "Apurva",
    message
  });

  try {
    const savedChat = await newChat.save(); // Save the chat to MongoDB
    res.send(`Chat saved: ${savedChat}`);
  } catch (err) {
    res.send(`Error saving chat: ${err}`);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "Some error occurred" } = err;
  res.status(status).send(message);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
