const express = require('express');
const router = express.Router();
const blogSchema = require('../models/index');


// GET /home page
router.get('/blog', async (req, res)=>{
    try{
        const blog = await blogSchema.find();
        res.json(blog);
    }catch(err){
      res.send(err);
    }
});

// POST /home page
router.post('/blog', async (req, res)=>{
    const blogDB = new blogSchema({
      title : req.body.title,
      des: req.body.des,
    });
    if(blogDB.title && blogDB.des){
      await blogDB.save();
      res.sendStatus(200);
    }
});

// EDITE /home page
router.put('/blog/:id', async (req, res)=>{
  const blog = await blogSchema.findById(req.params.id);
  blog.title = req.body.title;
  blog.des = req.body.des;
  if(blog.title && blog.des){
    await blog.save();
    res.sendStatus(200); 
  }   
});

// DELETE /home page
router.delete('/blog/:id', async (req, res)=>{
  const blog = await blogSchema.findById(req.params.id);
  try{
    await blog.deleteOne(blog);
    res.sendStatus(200);
  }catch(err){
    res.send(err);
  }
  

});

module.exports = router;