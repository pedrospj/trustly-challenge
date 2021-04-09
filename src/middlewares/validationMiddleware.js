const { validateGithubUsername } = require('../utils/validateParams');
class ValidationMiddleware {
  validateUsername = (req, res, next) => {
    if (validateGithubUsername(req.params.username)) {
      next();
    } else {
      return res.status(400).json({
        message: 'Invalid GitHub username',
      });
    }
  };
}

module.exports = ValidationMiddleware;
