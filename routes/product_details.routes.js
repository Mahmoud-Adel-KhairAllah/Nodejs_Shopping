const express = require('express');
const router = express.Router();
const multer = require('multer');
const csv=require('csvtojson');
const ProductDetails=require('../model/product_details.model')
const storege = multer.diskStorage({
     destination: (_req, _file, cb) => {
          cb(null, "./upload");
     },
     filename: (_req, file, cb) => {
          cb(null, file.originalname)
     }
});
const upload=multer({
     storage:storege
});
router.route("/uploadAll").post(upload.single("csv"),async (_req, res) => {
     const jsonArray=await csv().fromFile(_req.file.path);
     ProductDetails.insertMany(jsonArray,(error,resulr)=>{
          if(error){
               return res.status(500).json(error);
          }
          return res.json("added succesfully");
     });
   
});

router.route("/getAll").get((req,res)=>{
     ProductDetails.find((error,result)=>{
          if(error){
               return res.status(500).json(error)
          }
          return res.json({
               data:result
          });
     });
});
module.exports = router;