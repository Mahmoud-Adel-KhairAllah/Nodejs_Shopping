const express=require('express');
const jwt=require('jsonwebtoken');
const router=express.Router();
const User=require('../model/user.model');

router.route('/').post((req,res)=>{
    console.log('login sssssss',req.body)
    User.findOne(
    {
    mobileNo:req.body.mobileNo,
    password:req.body.password
   },
   (errro,result)=>{
    if(errro){
        return res.status(403).json({msg:"somthing error "})
    }

        if(result!==null){
            //login
            sendToken(req.body.mobileNo,req.body.password,'login succesful',res);

            console.log('login');
        }else{
            //register
                const user=new User({
                    mobileNo:req.body.mobileNo,
                    password:req.body.password
                });
                user.save().then(()=>{
                    sendToken(req.body.mobileNo,req.body.password,'register succesful',res);
                }).catch((err)=>{
                    res.status(500).json({token:err.body,msg:'55'})
                });
                console.log('register')
                //res.json({msg:'register'})

        }
  
   })
});

const sendToken=(mobileNo,password,msg,res)=>{
    let token=jwt.sign({mobileNo:mobileNo,password:password},'this is mahmoud clone');
    res.json({token:token,msg:msg});
};


module.exports=router;