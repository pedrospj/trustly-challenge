const getFilesLinks = require('../helpers/getFilesLinks');

class RepoControler {
  getRepoinfo = async (req, res) => {
    const path = 'pedrospj/lista-de-videos/file-list/master';
    const fileLinks = await getFilesLinks(path, res);
    res.status(200).json({
      hello: fileLinks,
    });
  };
}

module.exports = RepoControler;
