import dotenv from 'dotenv';
import server from './app';
import { logger } from './utils';

dotenv.config();

const PORT = !process.env.PORT ? 8000 :  process.env.PORT;

server.listen(PORT, () => {
  // console.log(`listening on port ${PORT}`);
  logger.info(`listening on port ${PORT}`);
});