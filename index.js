require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./src/constants/routes');

const RepoController = require('./src/controllers/repoController');
const RedisMiddleware = require('./src/middlewares/redisMiddleware');
const ValidationMiddleware = require('./src/middlewares/validationMiddleware');

const app = express();

app.use(cors());

//mouting middleware
const redisMiddleware = new RedisMiddleware();
const validationMiddleware = new ValidationMiddleware();
app.use(routes.REPO_GET, validationMiddleware.validateUsername);
app.use(redisMiddleware.getInfoFromCache);

//mounting routes
const repoController = new RepoController();
app.get(routes.REPO_GET, repoController.getRepoinfo);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});
