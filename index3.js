const express = require("express")
const Phones = require('./data')
const app = express();

app.get("/", (req, res)=>{
    res.send('<h1>Home Page</h1><a href="./api/phone" >Phones</a>')
})
/* app.get("/api/phone/:PhonesId", (req, res)=>{
    // const newItem = Phones.map((n)=>{
    //     const {name,price} = n;
    //     return {name, price};
    // })
    // res.json(newItem); 

    const {PhonesId} = req.params;
    console.log(req.params);
    const singleItem = Phones.find((item)=> item.id === Number(PhonesId))
    if(!singleItem){
        res.status(404).send('Product not found');
    }
    res.json(singleItem);
})   */

app.get('/api/v1/query', (req, res)=>{
    // console.log(req.query);
    let sortedPhone = [...Phones];
    const {search, limit} = req.query;
    if(search){
        sortedPhone = sortedPhone.filter((item)=>{
            return item.name.toLowerCase().startsWith(search);
        })
    }
    res.json(sortedPhone);
    
})
app.listen(5000, ()=>{
    console.log("Server is running");
})