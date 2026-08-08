const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {

    res.json({
        message: "Welcome to the Book Library API!",
        status: "Active",
        timestamp: new Date()
    });

});
app.get('/books', (req, res) => {

    const bookList = [
        {
            id: 101,
            title: "Java Programming",
            author: "James",
            category: "Programming"
        },
        {
            id: 102,
            title: "Web Development",
            author: "Robert",
            category: "Web"
        },
        {
            id: 103,
            title: "Data Science",
            author: "David",
            category: "Technology"
        }
    ];

    res.json(bookList);

});



app.get('/book/:id', (req, res) => {

    const bookId = req.params.id;

    res.json({
        requestedId: bookId,
        title: "Java Programming",
        author: "James",
        category: "Programming",
        available: true,
        tags: ["java", "coding", "beginner"]
    });

});

app.listen(PORT, () => {

    console.log(
        `JSON Server is running at http://localhost:${PORT}`
    );

});