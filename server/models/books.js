/*--------------------------------------------------------------
# book.js
# Marco Mejia
# 301082190
# 03 Mar 2021

Midterm test web application
----------------------------------------------------------------*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
