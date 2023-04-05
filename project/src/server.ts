import server from './app';

import { constants } from './config';
import { logger } from './utils';

server.listen(constants.PORT, () => {
  logger.info(`listening on port ${constants.PORT}`);
});