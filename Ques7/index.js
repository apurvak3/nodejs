const http = require('http');
const server = http.createServer((req,res) =>{
   res.statusCode = 200;
   res.setHeader('content-type' , 'text-plain');
   res.end('I am a Ninja');
})
server.listen(3000, () =>{
   console.log("server is listening to port 3000");
})