function validateGithubUsername(username) {
  if (!username) {
    return false;
  }
  if (username.length > 39) {
    return false;
  }
  if (username.startsWith('-') || username.endsWith('-')) {
    return false;
  }
  return true;
}

module.exports = { validateGithubUsername };
