const express = require('express');
const routes = require('./src/constants/routes');

const RepoController = require('./src/controllers/repoController');

const app = express();

//mounting routes
const repoController = new RepoController();
app.get(routes.REPO_GET, repoController.getRepoinfo);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});
