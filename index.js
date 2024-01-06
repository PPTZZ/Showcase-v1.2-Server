import express, { urlencoded } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './Routes/users.js';
import { postsRouter } from './Routes/posts.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:false}))

const PORT = process.env.PORT || 3000;
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI)
    .then(()=>console.log('db connected'))
    .catch((err) => console.log(err));

app.use('/api/posts',postsRouter);
app.use('/api',userRouter);

app.listen (PORT, ()=> console.log (`server running on port ${PORT}`));
