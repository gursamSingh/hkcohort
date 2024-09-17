// This is a simple way to write an https server using express
const express = require("express");
const app = express();

const port = 3000;

app.get('/', function(req, res) {
    res.send("Hello World Fucking YOUUUUUU");
})

app.listen(port,function(){
    console.log(`App is listening on port ${port}`);
})