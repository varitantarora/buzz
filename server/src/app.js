import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(cors());
app.use(
    express.json({
        limit: '30mb',
        extended: true,
    }),
);
app.use(
    express.urlencoded({
        limit: '30mb',
        extended: true,
    }),
);

// routes
app.use(routes);

export default app;
