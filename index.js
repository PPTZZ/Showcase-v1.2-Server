require('dotenv').config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./Routes/users.js');
const postsRouter = require('./Routes/posts.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;



mongoose.connect(DATABASE_URI)
    .then(()=>console.log('db connected'))
    .catch((err) => console.log(err));

app.use('/api/posts',postsRouter);
app.use('/api',userRouter);


app.listen (PORT, ()=> console.log (`server running on port ${PORT}`));
