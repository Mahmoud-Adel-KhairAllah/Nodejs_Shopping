const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const User=require('../model/user.model');

router.route('/').post((req,res)=>{
    console.log('login sssssss',req.body)
    User.findOne(
    {
    mobileNo:req.body.mobileNo,
   
   },
   (errro,result)=>{
    if(errro){
        return res.status(500).json({msg:"somthing error "})
    }

        if(result!==null){
            //login
            sendToken(req.body.mobileNo,'login succesful',res);

            console.log('login');
        }else{
          
            console.log('register11');
                res.json({msg:'register'})

        }
  
   })
});

router.route('/register').post((req,res)=>{
    console.log('register')
    const user=new User({
        mobileNo:req.body.mobileNo,
        password:req.body.password,
        fullName:req.body.fullName,
        Email:req.body.Email,
        gender:req.body.gender,
        alternateMoNumber:req.body.alternateMoNumber,
        hint:req.body.hint,
       
    });
    user.save().then(()=>{
        sendToken(req.body.mobileNo,req.body.password,'register succesful',res);
    }).catch((err)=>{
        res.status(500).json({token:err.body,msg:'55'})
    });
    console.log('register')
 })

const sendToken=(mobileNo,msg,res)=>{
    let token=jwt.sign({mobileNo:mobileNo},'this is mahmoud clone');
    res.json({token:token,msg:msg});
};


module.exports=router;