const express = require("express")
// const Phones = require('./data')
const app = express();

const logger = (req, res, next)=>{
    console.log(`${new Date()} , Request[${req.method}] , [${req.url}]`);
    next();
}
app.use(logger);
app.get('/', (req, res)=>{
    res.send("Home");
})
app.get('/about', (req, res)=>{
    res.send("About");
})
app.get('/contact', (req, res)=>{
    res.send("contact");
})
app.listen(3000, ()=>{
    console.log("Server is running");
})