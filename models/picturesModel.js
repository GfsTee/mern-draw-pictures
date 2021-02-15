const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PictureSchema = new Schema({
    name: String,
    fields: Object,
    divs: Array
})

module.exports = mongoose.model('picture', PictureSchema)