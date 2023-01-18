const express = require('express')
const mongoose = require('mongoose')
const port = process.env.port || 20000
// var bodyParser = require('body-parser')
// bodyParser = bodyParser.urlencoded({ extended: true })

const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/shopping?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('mongodb connection succesfully')
})


//all request(Get,Post,Put,Patch,Delete)
app.use(express.json())

const loginRoutes=require('./routes/login.routes');
const userdetailsRoutes=require('./routes/user_details.routes')
const productDetailesRoutes=require('./routes/product_details.routes')
const categoryDetailesRoutes=require('./routes/category_details.routes')

app.use('/login',loginRoutes)
app.use('/user-details',userdetailsRoutes)
app.use('/product-details',productDetailesRoutes)
app.use('/category-details',categoryDetailesRoutes)

app.route('/').get((req,res)=>{
    res.send('hello welcom')
 })

 


app.listen(port, () => {
    console.log('server start')
})