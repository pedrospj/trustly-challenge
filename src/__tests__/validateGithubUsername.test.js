const validateGithubUsername = require('../utils/validateGithubUsername');
const getStringInfo = require('../utils/getStringInfo');

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
