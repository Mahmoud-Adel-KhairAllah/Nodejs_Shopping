const express=require('express');

const router=express.Router();
const CategoryDetails=require('../model/category.model');

router.route('/add').post((req,res)=>{
     const categoryDetails=new CategoryDetails({...req.body});
     categoryDetails.save().then(()=>{
               res.json("Category added succesfully")
     }).catch((error)=>{
               res.status(500).json({error});
     });

     // res.json(req.body),
    
})
router.route("/").get((req,res)=>{
     CategoryDetails.find((error,result)=>{
          if(error){
              return res.status(500).json(error)
          }
          return res.json({data:result})
     })
})

module.exports=router;