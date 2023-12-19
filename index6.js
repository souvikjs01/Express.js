const express = require("express");
const app = express();
app.use(express.json());
let books = [
    {id: 1, title: 'Book1', author: 'Author1'},
    {id: 2, title: 'Book2', author: 'Author2'},
    {id: 3, title: 'Book3', author: 'Author3'}
]
app.get("/books", (req, res)=>{
    res.json(books);
})
app.post("/books", (req, res)=>{
    console.log(req.body);
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(books);
})
app.put("/books/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book => book.id === id);

    if(index !== -1){
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({error: 'Book not found'});
    }
})
app.delete("/books/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const index = books.findIndex(book => book.id === id)
    if(index !== -1){
        const deleteBook = books[index];
        books.splice(index, 1);
        res.json(deleteBook);
    }
    else{
        res.status(404).json({error: 'Book not found'});
    }
})
app.listen(3000, ()=>{
    console.log("Server is running");
})