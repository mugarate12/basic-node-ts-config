import dotenv from 'dotenv';
import server from './app';

import { constants } from './config';
import { logger } from './utils';

dotenv.config();

const PORT = !process.env.PORT ? 8000 :  process.env.PORT;

server.listen(constants.PORT, () => {
  logger.info(`listening on port ${constants.PORT}`);
});