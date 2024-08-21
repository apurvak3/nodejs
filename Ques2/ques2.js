const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
    const data = fs.readFileSync('ques2.html');
    res.end(data);

})
const Port = 8080;
server.listen(Port);
console.log(`listening to port ${Port}`);