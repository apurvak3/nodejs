

const express = require('express');
const app = express();
const Port = 8080;
const path = require('path');
const { title } = require('process');
const { v4: uuidv4 } = require('uuid');
app.use(express.urlencoded({extended : true}));
app.set("view engine" , "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("views" , path.join(__dirname, "public"));

let Books = [{

    id :uuidv4() ,
    Genere: 'Romance' ,
    Title : 'Pride and Prejudice' ,
    imageUrl: 'image1.jpg'
} ,
{
    id:uuidv4() ,
    Genere : 'Romance' ,
    Title :'Jane Eyre'
    imageUrl: 'image1.jpg'
},
{
    id:uuidv4() ,
    Genere : 'Romance' ,
    Title :'Wuthering Height',
    imageUrl: 'image1.jpg'
},
{
    id : uuidv4() ,
    Genere : 'Romance',
    Title : 'Great Expectation',
    imageUrl: 'image1.jpg'

},
{
   id:uuidv4() ,
   Genere : 'Tragedy',
   Title :'Hamlet',
   author:"William Shakespeare",
   imageUrl: 'image1.jpg'
},
{
    id : uuidv4() ,
    Genere:"Tragedy",
    Title: 'Macbeth' ,
   author:  'William Shakespeare',
   imageUrl: 'image1.jpg',
},
{
 id:uuidv4() ,
 Genere:"Tragedy",
 Title:"The Great Gatsby",
 author:"F. Scott Fitzgerald",
 imageUrl: 'image1.jpg',
 
},
{
    id:uuidv4() ,
    Genere:"Tragedy",
    Title:"Romeo and Juliet",
    author:"William shakespeare",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Social Commentary",
    Title:"To Kill a Mockingbird",
    author:"Harper Lee",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Social Commentary",
    Title:"1984",
    author:"George Orwell",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Social Commentary",
    Title:"The Picture of Dorian Gray",
    author:"Oscar Wilde",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Social Commentary",
    Title:"The Count of Monte Cristo",
    author:" Alexandre Dumas",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Horror/Paranormal",
    Title:"Frankenstein",
    author:"Mary Shelley",
    imageUrl: 'image1.jpg',
    
   },
   {
    id:uuidv4() ,
    Genere:"Horror/Paranormal",
    Title:"Dracula",
    author:"Bram Stoker",
    imageUrl: 'image1.jpg',
    
   },
{
    id: uuidv4() ,
    Genere : "Horror/Paranormal",
    Title:" The Turn of the Screw",
    author: " Henry James",
    imageUrl: 'image1.jpg',
},
{
    id: uuidv4() ,
    Genere : "Horror/Paranormal",
    Title:"The Strange Case of Dr. Jekyll and Mr. Hyde",
    author: "Robert Louis Stevenson",
    imageUrl: 'image1.jpg',


}]
app.get('/', (req, res) => {
    res.send("Welcome To the Book Store");
  });
  
  app.get("/Books", (req, res) => {
    res.render('views.ejs', { Books });
  });
  
  app.get("/Books/genre/:genres", (req, res) => {
    const genre = req.params.genres;
    const filteredBooks = Books.filter(book => book.genre === genre);
    res.render("bookBygenres.ejs", { genre, filteredBooks });
  });
  
  app.get('/genres', (req, res) => {
    res.render('genre.ejs', { genres });
  });
  
  app.listen(Port, () => {
    console.log("server is listening to port 8080");
  }); 
