const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/BOOK-STORE', { useUnifiedTopology: true });


mongoose.connection.on('error', err => console.error(err));
mongoose.connection.on('connected', () => console.log("connected!"));

Genre = require('./models/genre.js')
Book = require('./models/book.js')

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/api/genres', async(req, res) => {

    try {
        let genres = await Genre.find();
        res.json(genres);
    } catch (err) {

        console.error(err);
        res.status(500);
    }
});

app.get('/api/books', async(req, res) => {
    try {
        let books = await Book.find()
        res.json(books)
    } catch (err) {
        console.log(err)
    }
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
