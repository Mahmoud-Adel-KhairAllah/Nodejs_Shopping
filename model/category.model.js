const mongoose=require('mongoose');
const LeafCategory=mongoose.Schema({
     name:{
          type:String,
          required:true 
     }
});
const SubCategory=mongoose.Schema({
     name:{
          type:String,
          required:true
     },
     imageUrl:{
          type:String,
          required:true
     },
     isExpandable:{
          type:Boolean,
          required:true
     },
     leafcategory:[LeafCategory]

});
const CategoryDetails=mongoose.Schema({
name:{
     type:String,
     required:true
},
desc:{
     type:String,
     required:true
},
imageUrl:{
     type:String,
     required:true
},
backgroundColor:{
     type:String,
     required:true
},
subCategory:[SubCategory]
}) ;
module.exports=mongoose.model('CategoryDetails',CategoryDetails);