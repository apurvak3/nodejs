const http = require('http');
const server = http.createServer((req,res) =>{
    res.end("I am Ninja");
})
const Port = 8080;
server.listen(Port);
console.log(`server is listening at https://localhost:${Port}`);