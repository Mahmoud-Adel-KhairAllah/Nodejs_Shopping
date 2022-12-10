const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const User=Schema({
    mobileNo:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:false,
        unique:false
    }
})


module.exports=mongoose.model('User',User)