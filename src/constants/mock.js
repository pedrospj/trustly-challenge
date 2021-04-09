const mockRawFile = `
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const routes = require('./src/constants/routes');
const RepoController = require('./src/controllers/repoController');
const validateUsernameMiddleware = require('./src/middlewares/validationMiddleware');
const cacheMiddleware = require('./src/middlewares/cacheMiddleware');

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
  console.log("App is listening in port {PORT}");
});
`;

const mockHtml = `
  <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
     <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title=".eslintrc.js" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/.eslintrc.js">.eslintrc.js</a></span>
  </div>
  <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
     <span class="css-truncate css-truncate-target d-block width-fit">
     <a data-pjax="true" title="chore: add eslint and prettier" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/e6a4ecbbc65b0087df3edfe919d7bf02d84cbc67">chore: add eslint and prettier</a>
     </span>
  </div>
  <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
     <time-ago datetime="2021-04-07T23:13:33Z" class="no-wrap ">Apr 7, 2021</time-ago>
  </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
     <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
        <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
           <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
        </svg>
     </div>
     <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
        <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title=".gitignore" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/.gitignore">.gitignore</a></span>
     </div>
     <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
        <span class="css-truncate css-truncate-target d-block width-fit">
        <a data-pjax="true" title="Feat: add redis cache (#4)
           * feat: add env variables
           * feat: redis connect
           * fix: change branch name conditional
           * feat: add username validation
           * chore: remove body-parser" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/e4d8e4b86f859ca263d7d445a849eae408a05c06">Feat: add redis cache (</a><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="854125006" data-permission-text="Title is private" data-url="https://github.com/pedrospj/trustly-challenge/issues/4" data-hovercard-type="pull_request" data-hovercard-url="/pedrospj/trustly-challenge/pull/4/hovercard" href="https://github.com/pedrospj/trustly-challenge/pull/4">#4</a><a data-pjax="true" title="Feat: add redis cache (#4)
           * feat: add env variables
           * feat: redis connect
           * fix: change branch name conditional
           * feat: add username validation
           * chore: remove body-parser" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/e4d8e4b86f859ca263d7d445a849eae408a05c06">)</a>
        </span>
     </div>
     <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
        <time-ago datetime="2021-04-09T03:48:21Z" class="no-wrap ">Apr 9, 2021</time-ago>
     </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
     <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
        <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
           <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
        </svg>
     </div>
     <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
        <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title=".prettierrc" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/.prettierrc">.prettierrc</a></span>
     </div>
     <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
        <span class="css-truncate css-truncate-target d-block width-fit">
        <a data-pjax="true" title="chore: add eslint and prettier" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/e6a4ecbbc65b0087df3edfe919d7bf02d84cbc67">chore: add eslint and prettier</a>
        </span>
     </div>
     <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
        <time-ago datetime="2021-04-07T23:13:33Z" class="no-wrap ">Apr 7, 2021</time-ago>
     </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
     <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
        <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
           <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
        </svg>
     </div>
     <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
        <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title="index.js" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/index.js">index.js</a></span>
     </div>
     <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
        <span class="css-truncate css-truncate-target d-block width-fit">
        <a data-pjax="true" title="Refactor: refactor code (#6)
           * refactor: improving cache logic
           * fix: remove console log
           * refactor: renaming variable" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/cf816d2fb36a5cf88bb2c08f321afc495f3a1d22">Refactor: refactor code (</a><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="854699036" data-permission-text="Title is private" data-url="https://github.com/pedrospj/trustly-challenge/issues/6" data-hovercard-type="pull_request" data-hovercard-url="/pedrospj/trustly-challenge/pull/6/hovercard" href="https://github.com/pedrospj/trustly-challenge/pull/6">#6</a><a data-pjax="true" title="Refactor: refactor code (#6)
           * refactor: improving cache logic
           * fix: remove console log
           * refactor: renaming variable" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/cf816d2fb36a5cf88bb2c08f321afc495f3a1d22">)</a>
        </span>
     </div>
     <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
        <time-ago datetime="2021-04-09T17:02:47Z" class="no-wrap ">Apr 9, 2021</time-ago>
     </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
     <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
        <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
           <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
        </svg>
     </div>
     <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
        <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title="jest.config.js" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/jest.config.js">jest.config.js</a></span>
     </div>
     <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
        <span class="css-truncate css-truncate-target d-block width-fit">
        <a data-pjax="true" title="Test: add tests (#5)
           * test: add unit test
           * test: add api test" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/f85a50842ef76efab39b451ffd4d1cce64075bbf">Test: add tests (</a><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="854542884" data-permission-text="Title is private" data-url="https://github.com/pedrospj/trustly-challenge/issues/5" data-hovercard-type="pull_request" data-hovercard-url="/pedrospj/trustly-challenge/pull/5/hovercard" href="https://github.com/pedrospj/trustly-challenge/pull/5">#5</a><a data-pjax="true" title="Test: add tests (#5)
           * test: add unit test
           * test: add api test" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/f85a50842ef76efab39b451ffd4d1cce64075bbf">)</a>
        </span>
     </div>
     <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
        <time-ago datetime="2021-04-09T13:48:14Z" class="no-wrap ">Apr 9, 2021</time-ago>
     </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
     <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
        <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
           <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
        </svg>
     </div>
     <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
        <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title="package-lock.json" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/package-lock.json">package-lock.json</a></span>
     </div>
     <div role="gridcell" class="flex-auto min-width-0 d-none d-md-block col-5 mr-3" >
        <span class="css-truncate css-truncate-target d-block width-fit">
        <a data-pjax="true" title="Test: add tests (#5)
           * test: add unit test
           * test: add api test" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/f85a50842ef76efab39b451ffd4d1cce64075bbf">Test: add tests (</a><a class="issue-link js-issue-link" data-error-text="Failed to load title" data-id="854542884" data-permission-text="Title is private" data-url="https://github.com/pedrospj/trustly-challenge/issues/5" data-hovercard-type="pull_request" data-hovercard-url="/pedrospj/trustly-challenge/pull/5/hovercard" href="https://github.com/pedrospj/trustly-challenge/pull/5">#5</a><a data-pjax="true" title="Test: add tests (#5)
           * test: add unit test
           * test: add api test" class="Link--secondary" href="/pedrospj/trustly-challenge/commit/f85a50842ef76efab39b451ffd4d1cce64075bbf">)</a>
        </span>
     </div>
     <div role="gridcell" class="color-text-tertiary text-right" style="width:100px;">
        <time-ago datetime="2021-04-09T13:48:14Z" class="no-wrap ">Apr 9, 2021</time-ago>
     </div>
  </div>
  <div role="row" class="Box-row Box-row--focus-gray py-2 d-flex position-relative js-navigation-item ">
  <div role="gridcell" class="mr-3 flex-shrink-0" style="width: 16px;">
     <svg aria-label="File" class="octicon octicon-file color-icon-tertiary" height="16" viewBox="0 0 16 16" version="1.1" width="16" role="img">
        <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
     </svg>
  </div>
  <div role="rowheader" class="flex-auto min-width-0 col-md-2 mr-3">
     <span class="css-truncate css-truncate-target d-block width-fit"><a class="js-navigation-open Link--primary" title="package.json" data-pjax="#repo-content-pjax-container" href="/pedrospj/trustly-challenge/blob/main/package.json">package.json</a></span>
  </div>
  <div>exemplo</div>
  `;

module.exports = { mockHtml, mockRawFile };
