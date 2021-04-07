class RepoControler {
  getRepoinfo = async (req, res) => {
    res.status(200).json({
      hello: 'world',
    });
  };
}

module.exports = RepoControler;
