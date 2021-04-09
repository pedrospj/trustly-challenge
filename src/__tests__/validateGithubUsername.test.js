const validateGithubUsername = require('../utils/validateGithubUsername');

describe('validateGithubUsername', () => {
  it('should return true for valid usernames', () => {
    expect(validateGithubUsername('pedrospj')).toBe(true);
  });
  it('should return false for invalid usernames', () => {
    expect(
      validateGithubUsername('longUsernameLongUsernameLongUsernameLongUsername')
    ).toBe(false);
    expect(validateGithubUsername('-hyphen')).toBe(false);
    expect(validateGithubUsername('hyphen-')).toBe(false);
  });
});
