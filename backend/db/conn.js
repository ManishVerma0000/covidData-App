const mongoose= require('mongoose');

const connection= async()=>{

   await mongoose.connect('mongodb://0.0.0.0:27017/covid').then(()=>{

    console.log('connection is succesful')
    }).catch((error)=>{
        console.log('error in the connection')
    })
}

module.exports= connection;