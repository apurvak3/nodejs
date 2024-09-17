const faker = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require('express');
const path = require('path');  // Correct path module import
const app = express();

// Set the view engine to EJS correctly
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));  // Point to the directory containing your EJS files

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    database: 'deltaApp',
    password: 'godbless',
});

// Function to generate a random user (though it's not used in this case)
let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// Route for home page
app.get('/', (req, res) => {
    let q = `SELECT count(*) AS userCount FROM user`;  // Correct SQL query
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error occurred");  // Send error response
        }
        let count = result[0].userCount;  // Access userCount from the result
        res.render('home', { count });  // Render the 'home.ejs' file with the 'count' variable
    });
});

// Route for fetching all users
app.get('/user', (req, res) => {
    let q = `SELECT * FROM user`;
    connection.query(q, (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error occurred");  // Send error response
        }
        res.send(result);
    });
});

// Make sure the connection ends when the app is terminated
process.on('SIGINT', () => {
    connection.end();
    console.log('MySQL connection closed');
    process.exit();
});

// Start the server
app.listen(3001, () => {
    console.log('App is listening on port 3001');
});


