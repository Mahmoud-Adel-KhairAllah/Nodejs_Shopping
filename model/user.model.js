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
        required:true,
        unique:false
    },
    fullName:{
        type:String
    },
    Email:{
        type:String
    },
    gender:{
        type:String
    },
    alternateMoNumber:{
        type:String
    },
    hint:{
        type:String
    }


})


module.exports=mongoose.model('User',User)