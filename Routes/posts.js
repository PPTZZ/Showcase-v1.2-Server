const express = require('express')
const {
    getPost,
    getPosts,
    createPost,
    deletePost,
    updatePost
} = require('../Controllers/postsController')
const requireAuth = require('../Middleware/requireAuth')
const upload = require('../Middleware/imageUpload')

const postsRouter = express.Router();

postsRouter.use(requireAuth)

postsRouter.get('/:id', getPost);

postsRouter.get('/',getPosts);

postsRouter.post('/',upload.single('image'), createPost)

postsRouter.delete('/:id', deletePost)

postsRouter.patch('/:id', updatePost)

module.exports = postsRouter