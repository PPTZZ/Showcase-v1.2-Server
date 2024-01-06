import { userPost } from "../Models/userPosts.js";

// get posts

// create posts

export const cereatePost = async(req,res)=>{
    const {title, description, link, img } = req.body

    try{
        const post = await userPost.create({title, description, link, img});
        res.status(200).json(post)
    }catch (err){
        res.status(400).json({error: err.message})
    }
}


// delete posts

// edit posts