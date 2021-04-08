const getFilesLinks = require('../helpers/getFilesLinks');
const processFileLink = require('../helpers/processFileLink');

async function processRepoModule({ username, repoName, branch }) {
  try {
    const path = `${username}/${repoName}/file-list/${branch}`;

    //get all files links from the repo
    const filesLinks = await getFilesLinks(path);

    //object that's gonna hold the final response
    const responseObj = {};

    const promises = [];
    for (const link of filesLinks) {
      promises.push(processFileLink(responseObj, link));
    }

    //get files info
    await Promise.all(promises);

    process.send({ status: 'success', value: Object.values(responseObj) });
  } catch (error) {
    process.send({
      status: 'error',
      error,
    });
  }
}

process.once('message', processRepoModule);
