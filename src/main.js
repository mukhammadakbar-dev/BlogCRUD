import express from 'express';
import router from './router/index.router.js'

import { env } from './config/env.js';
import { connectDB } from './config/db.js';
import { GlobalErrorHandler } from './middleware/global-error-handler.js';


const app = express();

app.use(express.json());

await connectDB();

app.use('/api', router);

app.use(GlobalErrorHandler);

app.listen(env.PORT, () => console.log(`Server running on ${env.PORT}`));