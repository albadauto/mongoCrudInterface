const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Produtos')
const Produtos = mongoose.model('Produto');

router.get('/',  async (req, res) => {
  try{
      await Produtos.find({}, function(err,pr){
      if (err) return console.error(err)
      res.render('index', {produtos: pr, diretorio:__dirname})
    }).clone()
  }catch(err){
    console.log(err);
  }
})

router.post('/CadastraProduto', async (req, res) => {
  try{
    const Insert = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      fornecedor: req.body.fornecedor,
    }
    await new Produtos(Insert).save()
    res.redirect('/')
  }catch(err){
    console.log(err)
  }
})


router.post('/editar', async(req, res) => {
  try{
    const ID = req.body.hdId
    const Insert = {
      nome: req.body.nome,
      preco: req.body.preco,
      descricao: req.body.descricao,
      fornecedor: req.body.fornecedor,
    }
    await Produtos.findOneAndUpdate({_id:ID}, Insert, () => {
      res.redirect('/')
    }).clone()
    
  }catch(err){
    console.log(err)
  }
})


router.get('/excluir/:id', async (req, res) => {
  try{
    await Produtos.findOneAndDelete({_id:req.params.id}, () => {
      res.redirect('/')
    }).clone()

  }catch(err){
    console.log(err)
  }
})

module.exports = router