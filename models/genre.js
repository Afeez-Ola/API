const mongoose = require('mongoose');
const Schema = mongoose.Schema

const genreSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Genre', genreSchema)
