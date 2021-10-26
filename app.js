const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const index = require('./routes/index');

//CONFIG
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }));
app.use(express.json())
//ROUTES
app.use('/', index)
//DATABASE
mongoose.connect("mongodb://localhost/Projeto", () => console.log("All ok in Database!"))
//SERVER
app.listen(port, () => console.log(`listening in ${port}`))


