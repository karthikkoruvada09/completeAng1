const express=require('express');
const body=require('body-parser');
const cors=require('cors');
const config=require('config');
const app=express();
app.use(cors());

app.use(body.json());
console.log(process.env.NODE_ENV)
app.post('/',(req,res)=>{
    console.log("working post")
   console.log(req.body);
   res.send(req.body)
})

// const por
const port=config.get('port');

app.listen(port,()=> console.log(`port is ${port}`))