const express=require("express");
const app =express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');
//import routes
const postRoute=require('./routes/posts');

app.use('/posts',postRoute);
app.use(bodyParser.json());
app.use(express.json());

//middleware
/* app.use('/posts',()=>{
    console.log('this is a middleware')
}) *///this function is called whenever we hit /posts

//routes
/* app.get("/",(req,res)=>{
    res.send("shinu");
}); */ //get the information


/* app.get('/posts',(req,res)=>{
    res.send("shinu and chikku");
}); */

//connect to db
mongoose.connect(process.env.db_connect,()=>{
    console.log("connected to db")
});

//listening to server
app.listen(3000);
