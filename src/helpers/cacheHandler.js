const Redis = require('ioredis');

class CacheHandler {
  cacheClient;

  constructor() {
    this.cacheClient = new Redis(process.env.REDIS_URL);
  }

  addToCache = async (key, value) => {
    await this.cacheClient.set(key, value);
    await this.cacheClient.expire(key, process.env.REDIS_TTL);
  };

  getFromCache = async (key) => {
    const value = await this.cacheClient.get(key);
    return value;
  };
}

module.exports = new CacheHandler();
