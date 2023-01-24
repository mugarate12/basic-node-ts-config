import dotenv from 'dotenv';

dotenv.config();

const applicationType = String(process.env.NODE_ENV);
const processName = process.env.name || 'primary';

const PORT = !process.env.PORT ? 8000 :  process.env.PORT;

export default {
  applicationType,
  processName,

  PORT
};
