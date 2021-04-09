const Redis = require('ioredis');
const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');

class RepoControler {
  redis;

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL);
  }
  getRepoinfo = async (req, res, next) => {
    try {
      const username = req.params.username;
      const repoName = req.params.repoName;
      const branch = req.params.branch ?? 'master';

      const path = `${username}/${repoName}/file-list/${branch}`;

      //get all files links from the repo
      const filesLinks = await getFilesLinks(path);

      //object that's gonna hold the final response
      const responseObj = {};

      const promises = [];
      for (const link of filesLinks) {
        promises.push(processFileLink(responseObj, link));
      }

      //get files info
      await Promise.all(promises);
      const data = Object.values(responseObj);

      const redisKey = `/${username}/${repoName}/${branch}`;
      await this._cacheRepoInfo(redisKey, JSON.stringify(data));

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };

  _cacheRepoInfo = async (key, data) => {
    await this.redis.set(key, data);
    await this.redis.expire(key, 600);
  };
}

module.exports = RepoControler;
