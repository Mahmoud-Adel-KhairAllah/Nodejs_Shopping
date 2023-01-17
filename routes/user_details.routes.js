const express=require('express');
const middelware = require('../middelware');
const User = require('../model/user.model');
const router=express.Router();
router.route("/").get(middelware.chechToken,(req,res)=>{
     console.log(req.decode)
      User.findOne({mobileNo:req.decode.mobileNo},(err,result)=>{
          if(err){
            return res.status(500).json({msg:"Error",result:err});

          }else{
            return res.status(200).json({msg:"Success",result:result});
          }
      });
})
module.exports=router;