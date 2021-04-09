const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');

class RepoControler {
  projectFolder = '';

  constructor() {
    this.projectFolder = process.cwd();
  }

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

      const promises = [];
      for (const link of filesLinks) {
        promises.push(processFileLink(responseObj, link));
      }

      //get files info
      await Promise.all(promises);

      return res.status(200).json(Object.values(responseObj));
    } catch (error) {
      return res.status(400).json(error);
    }
  };
}

module.exports = RepoControler;
