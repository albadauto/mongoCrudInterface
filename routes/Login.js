const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Login')
const LoginModel = mongoose.model('Login')

router.get('/', (req,res) => { 
    res.render('Login', {error: req.flash('error')}) 
})

router.post('/verificaLogin', async (req, res) => {
    try{
        const result = await LoginModel.find({ login: req.body.login, senha: req.body.senha})
        if (result.length > 0){
            req.session.login = req.body.login
            res.redirect('/produtos')
        }else{
            req.flash('error', 'Senha ou login incorreto!')
            res.redirect('/')
        }
    }catch(err){
        console.log(err)
    }
    
})

router.get('/cadastroRapido/:login/:senha', async (req,res) => {
    try{
        const insert = {
            login: req.params.login, 
            senha: req.params.senha
        }
        await new LoginModel(insert).save()
        res.send("Tudo certo")
    }catch(err){
        console.log(err)
    }
   

})

router.get('/destroySession', (req, res) => {
    req.session.destroy()
    res.redirect('/')
})



module.exports = router