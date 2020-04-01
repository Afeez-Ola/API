const express = require('express');
const mongoose = require('mongoose');
const Book = require('/My projects/book-store')

const app = express();
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/BOOK-STORE', { useUnifiedTopology: true });

Genre = require('./models/genre.js')
Books = require('./models/book.js')

const db = mongoose.connection
app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if (err) {
            throw err
        }
        res.json(genres);
    })
});

app.get('/api/books', async(req, res) => {
    try {
        const books = await Book.getBooks()
        res.json(books)
    } catch (err) {
        console.log(err)
    }
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});