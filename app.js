const express = require('express')
const mongoose = require('mongoose')
const port = process.env.port || 20000
var bodyParser = require('body-parser')
bodyParser = bodyParser.urlencoded({ extended: true })

const app = express()
mongoose.connect('mongodb+srv://Mahmoud:rlS04KeJiZMH5Zy7@atlascluster.5cxc0r7.mongodb.net/shopping?retryWrites=true&w=majority')
    .then(() => console.log('Connected!'));

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('mongodb connection succesfully')
})


//all request(Get,Post,Put,Patch,Delete)
    const loginRoute=require('./routes/login.routes')
app.use('/login',loginRoute)

app.route('/login').get((req,res)=>{
    res.send('welcom')
 })

 app.route('/getProfile').get((req,res)=>{
    res.send('welcom')
 })


app.listen(port, () => {
    console.log('server start')
})