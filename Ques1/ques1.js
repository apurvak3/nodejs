const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Response received at port 8080")
});
const Port = 8080;
server.listen(Port);
console.log(`server is listening to ${Port}`)