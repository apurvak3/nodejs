const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email:String ,
    age : Number
});

main().then(() => {
    console.log("Connection successful");
})
.catch((err) => {
    console.log("Error:", err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
