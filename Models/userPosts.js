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
    img:{
        type: String
    }

}, {timestamps:true})

module.exports = mongoose.model('userPost', userPostsSchema)