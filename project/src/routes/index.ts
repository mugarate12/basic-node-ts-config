import { Router } from 'express';

import example from './example.routes';	

const routes = Router();

example(routes);

export default routes;