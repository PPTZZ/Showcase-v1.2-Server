const userPost = require('../Models/userPosts');
const mongoose = require('mongoose');

// get a post

const getPost = async (req, res) =>{
    const {id} = req.params
    const post = await userPost.findById(id)

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no post found'})
    }
    
    if (!post){
        return res.status(404).json({error: 'no post found'})
    }

    res.status(200).json(post)
}

// get posts

const getPosts = async (req, res) => {
    const posts = await userPost.find({}).sort({createdAt: -1})

    res.status(200).json(posts)
}

// create posts

const createPost = async(req,res)=>{
    
    const {title, description, link } = req.body

    try{
        const post = await userPost.create({title, description, link});
        res.status(200).json(post)
    }catch (err){
        res.status(400).json({error: err.message})
    }
}


// delete posts

const deletePost = async (req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no post found'})
    }
    const post = await userPost.findOneAndDelete({_id:id})

    if(!post){
        return res.status(400).json({error: 'post not found'})
    }
    res.status(200).json(post);
} 

// edit posts

const updatePost = async (req,res)=>{
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no post found'})
    }
    const post = await userPost.findOneAndUpdate({_id: id}, {
        ...req.body
    })
     if(!post){
        return res.status(400).json({error: 'post not found'});
    }
    res.status(200).json(post);
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    deletePost,
    updatePost,
}