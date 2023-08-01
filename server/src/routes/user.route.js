import express from 'express';

import { getUserPosts } from '../controllers/post.controller.js';
import { addRemoveFriend, getUser, getUserFriends } from '../controllers/user.controller.js';
import { verifyToken } from '../middleware/auth.js';

const routes = express.Router();

routes.get('/users/:id', verifyToken, getUser);
routes.get('/users/:id/friends', verifyToken, getUserFriends);
routes.patch('/users/:id/:friendId', verifyToken, addRemoveFriend);
routes.get('/users/:id/posts', verifyToken, getUserPosts);

export default routes;
