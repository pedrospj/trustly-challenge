const request = require('supertest');

const HEROKU_URL = 'https://pedrospj-trustly-challenge.herokuapp.com';
const REPO = '/pedrospj/trustly-challenge';

describe(`GET ${REPO}`, () => {
  it('should return 200 and the info about the repo', (done) => {
    request(HEROKU_URL)
      .get(`${REPO}/main`)
      .expect(200)
      .then((resp) => {
        const jsonInfo = resp.body.find((info) => info.extension === 'json');
        expect(jsonInfo.count).toBe(2);
        expect(jsonInfo.bytes).toBe(117114);
        expect(jsonInfo.lines).toBe(3026);
        done();
      });
  });

  it('should return 400 Bad Request', (done) => {
    request(HEROKU_URL).get(`${REPO}/master`).expect(400, done);
  });
});
