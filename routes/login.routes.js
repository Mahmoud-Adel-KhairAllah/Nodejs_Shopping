const express=require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router=express.Router();

router.route('/').post((req,res)=>{
    res.jsonp('welcome login');
    console.log('we are inside login')
})

// router.route('/register').get((req,res)=>{
//     res.json('ssssssss');
//     console.log('we are inside login')
// })
module.exports=router