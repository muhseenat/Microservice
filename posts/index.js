const express = require ('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const {randomBytes} = require('crypto')


const app = express();
app.use(bodyParser.json())
app.use(cors());
// app.use(cors({
//   origin:["http://localhost:3000"]
// }));
const posts={}

app.post('/posts',(req,res)=>{
const id= randomBytes(4).toString('hex');
const {title}= req.body;

posts[id]={
    id,title
}
res.status(201).send(posts[id]);
})


app.get('/posts',(req,res)=>{
    res.send(posts)
})


app.listen(4000,()=>{
    console.log('Listen to Port 4000');
})