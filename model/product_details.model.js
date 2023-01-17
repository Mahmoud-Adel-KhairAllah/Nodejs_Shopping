const mongoose=require("mongoose");

const ProductDetails=mongoose.Schema({

name:{
     type:String,
     required:true
},
desc:{
     type:String,
     required:true
},wishlisted:{
     type:String,
     required:true
},actual_price:{
     type:String,
     required:true
},discounte_price:{
     type:String,
     required:true
},descount:{
     type:String,
     required:true
},category:{
     type:String,
     required:true
},sub_category:{
     type:String,
     required:true
},type:{
     type:String,
     required:true
},genre:{
     type:String,
     required:true
},brand:{
     type:String,
     required:true
},image_url:{
     type:String,
     required:true
},rating:{
     type:String,
     required:true
},

});
module.exports=mongoose.model('ProductDetails',ProductDetails)