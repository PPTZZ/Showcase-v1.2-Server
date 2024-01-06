import { Schema, model } from "mongoose";

const userPostsSchema = new Schema({
    title:{
        type: String
    },
    description: {
        type: String
    },
    link:{
        type: String
    },
    img:{
        data: Buffer,
        contentType: String
    }

}, {timestamps:true})

export const userPost = model('userPost', userPostsSchema)