const router = require('express').Router()
const blogPostModel = require('../models/blogPosts')

router.post('/api/post', async (req, res) => {
    try {
        const newPost = new blogPostModel({
            title: req.body.title,
            text: req.body.text
        })
        const savePost = await newPost.save()
        res.status(200).json(savePost)
    } catch (error) {
        res.json(error)
    }
})

router.get('/api/posts', async (req, res) => {
    try {
        const allBlogPosts = await blogPostModel.find({})
        res.status(200).json(allBlogPosts)
    } catch (error) {
        res.json(error)
    }
})

router.put('/api/post/:id', async (req, res) => {
  try{
    const updatePost = await blogPostModel.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json('Post updated');
  }catch(error){
    res.json(error);
  }
})

router.delete('/api/post/:id', async (req, res) => {
    try {
        const deletePost = await blogPostModel.findByIdAndDelete(req.params.id)
        res.status(200).json('Post deleted')
    } catch (error) {
        res.json(error)
    }
})

module.exports = router