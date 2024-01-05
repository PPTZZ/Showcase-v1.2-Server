import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userProfileSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
       type: String,
       required: true 
    },
    password:{
        type: String,
        required: true 
    },
    dateJoined:{
        type: Date,
        default: Date.now
    },
    posts:[
        {
            title:{
                type: String,
            },
            description:{
                type: String
            },
            link:{
                    type: String
            },
            img:{
                data: Buffer,
                contentType: String,
            },
        },
    ],
});

export const userProfile = model('userProfile', userProfileSchema);