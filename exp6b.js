const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "JavaScript Basics", author: "John Smith" },
    { id: 2, title: "Learning Node.js", author: "David Brown" }
];

app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {

    const newBook = {
        id: req.body.id || books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);

    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const book = books.find(b => b.id === id);

    if (book) {

       
        book.title = req.body.title;
        book.author = req.body.author;

        res.json({
            message: "Book updated successfully",
            book: book
        });

    } else {

        res.status(404).json({
            error: "Book not found"
        });
    }
});

app.delete('/books/:id', (req, res) => {

    const id = parseInt(req.params.id);

    // Remove the book with the given ID
    books = books.filter(b => b.id !== id);

    res.json({
        message: `Book ${id} deleted`,
        remainingBooks: books
    });
});

app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});