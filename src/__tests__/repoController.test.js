const { rest } = require('msw');
const { setupServer } = require('msw/node');
const request = require('supertest');
const {
  mockHtmlResponse,
  mockHtml,
  mockRawFile,
} = require('../constants/mock');

const HEROKU_URL = 'https://pedrospj-trustly-challenge.herokuapp.com';
const REPO = '/pedrospj/trustly-challenge';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const server = setupServer(
  rest.get('https://raw.githubusercontent.com/*', (req, res, ctx) => {
    console.log('server', req.url.href);
    return res(ctx.status(400), ctx.body(mockRawFile));
  })
);

const sortInfo = (a, b) => a.lines - b.lines;

it('should return 200 and the info about the repo', (done) => {
  request('http://localhost:3000')
    .get(`${REPO}/main`)
    .expect(200)
    .then((resp) => {
      console.log(resp.body);
      expect(resp.body.sort(sortInfo)).toEqual(mockHtmlResponse.sort(sortInfo));
      done();
    });
});

module.exports = { server };
