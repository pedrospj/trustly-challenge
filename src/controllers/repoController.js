const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');

class RepoControler {
  projectFolder = '';

  constructor() {
    this.projectFolder = process.cwd();
  }

  getRepoinfo = async (req, res) => {
    try {
      const path = 'pedrospj/lista-de-videos/file-list/master';
      const filesLinks = await getFilesLinks(path, res);

      const responseObj = {};
      const promises = [];
      for (const link of filesLinks) {
        promises.push(processFileLink(responseObj, link));
      }

      await Promise.all(promises);

      res.status(200).json(Object.values(responseObj));
    } catch (error) {}
  };
}

module.exports = RepoControler;
