/*--------------------------------------------------------------
# index.js
# Marco Mejia
# 301082190
# 03 Mar 2021

Midterm test web application
----------------------------------------------------------------*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
