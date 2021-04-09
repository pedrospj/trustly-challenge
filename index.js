require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./src/constants/routes');
const RepoController = require('./src/controllers/repoController');
const validateUsernameMiddleware = require('./src/middlewares/validationMiddleware');
const cacheMiddleware = require('./src/middlewares/cacheMiddleware');
const { server } = require('./src/__tests__/repoController.test');
const app = express();
app.use(cors());

//mounting routes
app.get(
  routes.REPO_GET,
  validateUsernameMiddleware,
  cacheMiddleware,
  RepoController.getRepoinfo
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});
