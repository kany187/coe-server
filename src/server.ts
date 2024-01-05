import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import routesSetup from './startup/routes'

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(helmet());

routesSetup(app);

export default app;


