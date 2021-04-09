const { rest } = require('msw');
const { setupServer } = require('msw/node');
const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');
const { mockHtml, mockRawFile } = require('../constants/mock');
const github = require('../constants/github');
const REPO = `pedrospj/trustly-challenge/file-list/main`;

//mock github response
const server = setupServer(
  rest.get(`${github.GITHUB_URL}/*`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(mockHtml));
  }),

  rest.get(`${github.GITHUB_RAW_FILE}/*`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.body(mockRawFile));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('getFilesLinks', () => {
  it('should return files URLs', async () => {
    const links = await getFilesLinks(REPO);

    expect(links).toEqual([
      'pedrospj/trustly-challenge/main/.eslintrc.js',
      'pedrospj/trustly-challenge/main/.gitignore',
      'pedrospj/trustly-challenge/main/.prettierrc',
      'pedrospj/trustly-challenge/main/index.js',
      'pedrospj/trustly-challenge/main/jest.config.js',
      'pedrospj/trustly-challenge/main/package-lock.json',
      'pedrospj/trustly-challenge/main/package.json',
    ]);
  });
});

describe('getFilesLinks', () => {
  it('should return files URLs', async () => {
    const finalObj = {};
    await processFileLink(finalObj, 'pedrospj/trustly-challenge/main/index.js');

    expect(finalObj).toEqual({
      js: { extension: 'js', bytes: 659, lines: 27, count: 1 },
    });
  });
});
