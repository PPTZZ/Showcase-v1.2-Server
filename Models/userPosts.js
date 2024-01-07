const mongoose = require('mongoose');

const Schema= mongoose.Schema

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
    image:{
        type: String
    },
    user_id:{
        type: String,
        required: true
    },

}, {timestamps:true})

module.exports = mongoose.model('userPost', userPostsSchema)