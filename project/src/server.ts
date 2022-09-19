import server from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = !process.env.PORT ? 8000 :  process.env.PORT;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});