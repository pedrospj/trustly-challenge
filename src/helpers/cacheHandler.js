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
    return this.cacheClient.get(key);
  };
}

module.exports = new CacheHandler();
