import express from 'express';
import { loginUser, register } from '../Controllers/userController.js';

export const userRouter = express.Router();

// login
userRouter.post('/', loginUser);




// register
userRouter.post("register", register);

