const express = require('express')
const {
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost
} = require('../Controllers/postsController')



const postsRouter = express.Router();

postsRouter.get('/:id', getPost);
postsRouter.get('/',getPosts);

postsRouter.post('/', createPost)

postsRouter.delete('/:id', deletePost)

postsRouter.patch('/:id', updatePost)

module.exports = postsRouter