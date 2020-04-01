const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

const Genre = module.exports = mongoose.model('Genre', genreSchema)

module.exports.getGenres = function(callback, limit) {
    Genre.find(callback).limit(limit)
}