const express = require("express");
const app = express() ; 
  const Port = 3030;
  app.listen(Port, (req,res) =>{
    console.log(`server is listening to  ${Port}`);
  })
  app.use((req,res) =>{
    console.log(req);
    console.log("request Received");
  })