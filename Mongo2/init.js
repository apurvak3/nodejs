const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().catch(err => console.log("Database connection error: ", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
  console.log("Connected to database");

  let allChats = [
    {
      from: "Neha",
      to: "Apurva",
      message: "Hey Apurva! HOW are you",
      created_at: new Date(),
    },
    {
      from: "Shivam",
      to: "Apurva",
      message: "I love uh Apu",
      created_at: new Date(),
    },
    {
      from: "Apurva",
      to: "Shivam",
      message: "I love uh more",
      created_at: new Date(),
    },
    {
      from: "Shivam",
      to: "Apurva",
      message: "What are uh doing apu",
      created_at: new Date(),
    },
    {
      from: "Apurva",
      to: "Shivam",
      message: "Tmhe yaad sk",
      created_at: new Date(),
    },
    {
      from: "Apurva",
      to: "Shivam",
      message: "Bht yaad aati yr!",
      created_at: new Date(),
    }
  ];

  try {
    await Chat.insertMany(allChats);
    console.log("Chats inserted successfully");
  } catch (err) {
    console.log("Error inserting chats: ", err);
  }

  mongoose.connection.close();  // Close the connection when done
}

