const cacheHandler = require('../helpers/cacheHandler');

cacheMiddleware = async (req, res, next) => {
  try {
    //check if route has branch name
    const hasBranchName = req.originalUrl.split('/').length > 3;
    const key = hasBranchName ? req.originalUrl : `${req.originalUrl}/master`;

    const value = await cacheHandler.getFromCache(key);

    if (value) {
      //return from cache
      return res.status(200).send(value);
    } else {
      // proceed to controller
      next();
    }
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = cacheMiddleware;
