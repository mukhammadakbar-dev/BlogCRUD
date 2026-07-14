import { Router } from "express";

import userRouter from '../router/user.router.js'
import postRouter from '../router/post.router.js'

const router = Router();

router 
    .use('/user', userRouter)
    .use('/post', postRouter);

export default router;

