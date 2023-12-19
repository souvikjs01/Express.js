const express = require("express");
const app = express();
const path = require('path')

app.get('/', (req,res)=>{
    res.send('<h1>contact</h1>')
})
app.get('/files', (req, res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/jsones', (req,res)=>{
    res.json([{
        firstName: "John",
        lastName: "Cena"
    },{
        firstName: "Randy",
        lastName: "Ortan"
    }])
})
app.all('*', (req, res)=>{
    res.send("Not found")
})
app.listen(3000, ()=>{
    console.log("Server is running");
})