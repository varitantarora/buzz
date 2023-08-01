import express from 'express';

import { login, register } from '../controllers/auth.controller.js';
import { upload } from '../utils/multer.js';

const routes = express.Router();

routes.post('/auth/register', upload.single('picture'), register);
routes.post('/auth/login', login);

export default routes;
