const userPost = require('../Models/userPosts');
const mongoose = require('mongoose');

// get posts

const getPosts = async (req, res) => {
    const user_id = req.user._id

    const posts = await userPost.find({user_id}).sort({createdAt: -1})

    res.status(200).json(posts)
}

// create posts

const createPost = async(req,res)=>{
    
    const {title, description, link, image} = req.body
    
    try{
        const user_id = req.user._id
        const post = await userPost.create({image , title, description, link, user_id});
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
    deletePost,
    updatePost,
}