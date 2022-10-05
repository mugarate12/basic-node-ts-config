import { RedisClientType } from 'redis';

const redis = require('redis');

let redisClient: RedisClientType | undefined;
const url = process.env.REDIS_URL || 'redis://localhost:6379';

(async () => {
  redisClient = redis.createClient({ url });

  redisClient?.on("error", (error) => console.error(`Error : ${error}`));

  // console.log('trying to connect to redis');
  await redisClient?.connect();
  // console.log('redis connected');
})();

async function get(key: string) {
  return new Promise<string>((resolve, reject) => {
    try {
      redisClient?.get(key)
        .then((data: any) => resolve(data))
        .catch((error: any) => reject('wont work'));
    } catch (error) {
      reject('wont work');
    }
  });
}

async function set(key: string, payload: string) {
  return new Promise<boolean>((resolve, reject) => {
    try {
      redisClient?.set(key, payload)
        .then((data: any) => resolve(true))
        .catch((error: any) => reject(false));
    } catch (error) {
      reject(false);
    }
  });
}

export default {
  ...redisClient,
  getAsync: get, 
  setAsync: set
}
