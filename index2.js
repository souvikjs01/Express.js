const express = require("express")
const path = require('path')
const app = express();

app.use(express.static('Project10'))

// app.get("/", (req, res)=>{
//     res.sendFile(path.join(__dirname))
// })

app.listen(4000, ()=>{
    console.log("Server is running");
})