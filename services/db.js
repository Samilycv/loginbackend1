//Mongodb connection with nodejs


//1. Connection library - mongoose - npm i mongoose

//import Mongoose
const mongoose = require('mongoose')

//2. Define connection between mongoose and node
mongoose.connect('mongodb://localhost:27017/login')

const Login=mongoose.model('Login',{
    username:String,
    password:String,
    year:Number
})

module.exports={
    Login
}