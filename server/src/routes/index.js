import express from 'express';

import authRoutes from './auth.route.js';
import postRoutes from './post.route.js';
import userRoutes from './user.route.js';

const routes = express.Router();

routes.get('/', async (req, res) => {
    res.status(200).json({
        message: 'Hello World!',
    });
});

routes.use(authRoutes);
routes.use(userRoutes);
routes.use(postRoutes);

export default routes;
