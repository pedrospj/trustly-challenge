const validateGithubUsername = require('../utils/validateGithubUsername');

validateUsernameMiddleware = (req, res, next) => {
  if (validateGithubUsername(req.params.username)) {
    next();
  } else {
    return res.status(400).json({
      message: 'Invalid GitHub username',
    });
  }
};

module.exports = validateUsernameMiddleware;
