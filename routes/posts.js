const express=require("express");
const res = require("express/lib/response");
const router =express.Router();

const Post=require('../model/Post')

router.get('/',(req,res)=>{
    res.send("hello world");
});

router.post('/',(req,res)=>{
    console.log(req.body);
    /* const post=new Post({
        title:req.body.title,
        description:req.body.description
    });

     post.save()
    
    .then(data=>{
        res.json(data);//to see data onscreen
    })
    .catch(err=>{
        res.json(err)
    }) ; */

})
module.exports=router;
