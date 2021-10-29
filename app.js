const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const index = require('./routes/index');
const login = require('./routes/login');
const flash = require('connect-flash')//SERVE PARA CRIAR MENSAGENS DE ERRO NO PROJETO INTEIRO
const session = require('express-session');//NECESSARIO PARA O CONNECT FLASH


//CONFIG
app.use(session({
    secret:'Adauto',
    saveUninitialized:true,
    resave:true
}))
app.use(flash())//USAR O FLASH
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }));
app.use(express.json())
//ROUTES
app.use('/', login)
app.use('/produtos', index)
//DATABASE
mongoose.connect("mongodb://localhost/Projeto", () => console.log("All ok in Database!"))
//SERVER
app.listen(port, () => console.log(`listening in ${port}`))


