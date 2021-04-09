const Redis = require('ioredis');

class RedisMiddleware {
  // redis instance
  redis;

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL);
  }

  getInfoFromCache = async (req, res, next) => {
    try {
      const value = await this.redis.get(req.originalUrl);
      if (value) {
        return res.status(200).send(value);
      } else {
        next();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
}

module.exports = RedisMiddleware;
