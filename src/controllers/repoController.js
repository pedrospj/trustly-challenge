const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');
const cp = require('child_process');

class RepoControler {
  projectFolder = '';

  constructor() {
    this.projectFolder = process.cwd();
  }

  getRepoinfo = async (req, res) => {
    const username = req.params.username;
    const repoName = req.params.repoName;
    const branch = req.params.branch ?? 'master';

    //creatring child process for concurrency
    const child = cp.fork(
      `${this.projectFolder}/src/modules/processRepoModule.js`,
      []
    );

    child.on('message', (info) => {
      if (info.status === 'success') {
        // handle success
        return res.status(200).json(info.value);
      } else {
        // handle error
        const { error } = info;
        return res.status(400).json(error);
      }
    });

    child.on('error', () => {
      return res.status(500).json({
        message: 'Something went wrong, conact the developer',
      });
    });

    child.send({ username, repoName, branch });
  };
}

module.exports = RepoControler;
