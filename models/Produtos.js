const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Produto = new Schema({
    id:{
        type:Number,
        default:32
    },
    nome:{
        type: String
    },
    preco:{
        type:Number
    },
    descricao:{
        type: String
    },
    fornecedor:{
        type:String
    }
})


mongoose.model('Produto', Produto)
