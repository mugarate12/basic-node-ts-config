import dotenv from 'dotenv';
import pino from 'pino';

dotenv.config();

// if this is undefined, return false;
const logDisabled = !!process.env.LOG_DISABLED;

const logger = pino({
  enabled: !logDisabled,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

export default logger;