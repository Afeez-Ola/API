const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    publisher: {
        type: String,
        required: true
    },
    image_url: {
        type: String
    },
    pages: {
        type: String,
        required: true
    },
    buy_url: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Book', BookSchema)

module.exports.getBooks = function(callback, limit) {
        Book.getBooks(callback).limit(limit)
    }
    /*
    //module.exports.getBook = function(Id, callback) {
      //Book.findById(Id, callback)
    //}
    */