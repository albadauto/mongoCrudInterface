const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Login = new Schema({
    login:{
        type:String
    },
    senha:{
        type:String
    },
    createdBy:{
        type:String,
        default: Date.now()
    }

})

mongoose.model('Login', Login)