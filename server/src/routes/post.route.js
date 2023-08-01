import express from 'express';

import { createPost, getFeedPosts, likePost } from '../controllers/post.controller.js';
import { verifyToken } from '../middleware/auth.js';
import { upload } from '../utils/multer.js';

const routes = express.Router();

routes.get('/posts', verifyToken, getFeedPosts);
routes.post("/posts", verifyToken, upload.single("picture"), createPost);
routes.patch('/posts/:id/like', verifyToken, likePost);

export default routes;
