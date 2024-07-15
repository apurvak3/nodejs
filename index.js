const express = require('express');
const colors = require('colors')
const app = express();
app.get('/',(req,res) =>{
    return res.status(200).send('<h1>server is listening you.</h1>'.);
})
const port = 8080;
app.listen(port,()=>{
    console.log('server is runing on port 8080'.bgGreen)
});