const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');
const cacheHandler = require('../helpers/cacheHandler');

getRepoinfo = async (req, res) => {
  try {
    const username = req.params.username;
    const repoName = req.params.repoName;
    const branch = req.params.branch ?? 'master';

    const path = `${username}/${repoName}/file-list/${branch}`;

    //get all files links from the repo
    const filesLinks = await getFilesLinks(path);

    //object that's gonna hold the final response
    const responseObj = {};

    const promises = filesLinks.map((link) =>
      processFileLink(responseObj, link)
    );

    //get files info
    await Promise.all(promises);
    const data = Object.values(responseObj);

    const cacheKey = `/${username}/${repoName}/${branch}`;
    await cacheHandler.addToCache(cacheKey, JSON.stringify(data));

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

module.exports = { getRepoinfo };
