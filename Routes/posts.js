const express = require('express')
const {
    getPosts,
    createPost,
    deletePost,
    updatePost
} = require('../Controllers/postsController')
const requireAuth = require('../Middleware/requireAuth')
const upload = require('../Middleware/imageUpload')

const postsRouter = express.Router();

postsRouter.use(requireAuth)

postsRouter.get('/',getPosts);

postsRouter.post('/',upload.single("image"), createPost)

postsRouter.delete('/:id', deletePost)

postsRouter.patch('/:id', updatePost)

module.exports = postsRouter