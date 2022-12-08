const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/home'){
        res.write('welcom to home')
    }else if(req.url=='/product'){
        res.write('welcome to products')
    }else{
        res.statusCode=404;
        res.write('not fount '+res.statusCode)
    }
   
    res.end()
})

server.listen(20000,()=>{
    console.log('server start')
})