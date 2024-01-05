import { userProfile } from "./schema.js";
import mongoose from "mongoose";

// get posts 
export const getPost = async (req,res)=>{
    const userPosts = await userProfile.find({},{posts})
    res.status(200).json(userPosts)
}


// create post
export const createPost = async (req, res) =>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: 'Not a valid ID'})
    }

    const userPosts = await userProfile.findOneAndUpdate({_id: id},{posts:{...req.body}});

    res.status(200).json(userPosts)

}

// edit post

// delete post



// folosit sa verifici daca primesti mereu id pt mongodb
// if(!mongoose.Types.ObjectId.isValid(id)){
//     res.status(404).json({error: 'Not a valid ID'})
// }