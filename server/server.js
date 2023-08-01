import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

import app from './src/app.js';
// import { posts, users } from './src/mock-data/index.js';
// import Post from './src/models/Post.js';
// import User from './src/models/User.js';

dotenv.config();

// configurations static path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// mongoose setup
const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running port: ${PORT}`));

        // Create mock data - run once time
        // User.insertMany(users);
        // Post.insertMany(posts);
    })
    .catch((error) => console.log(`${error} did not connect`));
