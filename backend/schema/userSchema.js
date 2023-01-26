const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    phone:{
        type:Number,
        require:true
    }
    


})

const user= mongoose.model('user',userSchema)

module.exports= user;