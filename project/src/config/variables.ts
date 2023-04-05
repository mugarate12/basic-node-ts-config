import dotenv from 'dotenv';

dotenv.config();

const applicationType = String(process.env.NODE_ENV);
const processName = process.env.name || 'primary';
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

const PORT = !process.env.PORT ? 8000 :  process.env.PORT;

export default {
  applicationType,
  processName,

  PORT,
  JWT_SECRET
};
