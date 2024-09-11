const express = require("express");
const app = express();
const Port = 8080;
const path =require("path");
app.use(express.urlencoded({extended: true}));

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));
app.set(express.static( path.join(__dirname ,"public")));

let posts = [{
username : "Apna college",
content :"I LOVE CODING",
},
{
username : "shardha kapra",
content : "Hard work is important to achieve sucess",
},
{
    username: 'Apurva',
    content:"Holy Cross School",
},
{
username:"Ankita",
content : "Delhi Public School",
}
]

app.get("/" , (req, res) =>{
    res.send("server working well");
});
app.get("/posts" , (req,res) =>{
    res.render("views.ejs" , {posts});
})
app.get("/posts/new",(req,res) =>{
    res.render("new.ejs")
});
app.post("/posts" , (req, res) =>{
    let {username , content } = req.body;
    posts.push({username, content});
    res.redirect("/posts");
})
app.listen(Port , () => {
    console.log("server is listening to Port 8080");
}) ;