const fetch = require('node-fetch');
const github = require('../constants/github');
const getStringInfo = require('../utils/getStringInfo');
const validateResponse = require('../utils/validateResponse');

async function processFileLink(response, link) {
  try {
    const filePageResponse = await fetch(`${github.GITHUB_RAW_FILE}/${link}`);

    validateResponse(filePageResponse);

    const fileContent = await filePageResponse.text();

    const { extension, lineCount, bytes } = getStringInfo(link, fileContent);

    //the extension exists, then combine current info
    if (response[extension]) {
      response[extension] = {
        ...response[extension],
        bytes: response[extension].bytes + bytes,
        lines: response[extension].lines + lineCount,
        count: response[extension].count + 1,
      };
    } else {
      //the extension doesn't exist, then create it
      response[extension] = {
        ...response[extension],
        extension: extension,
        bytes: bytes,
        lines: lineCount,
        count: 1,
      };
    }
  } catch (error) {
    throw error;
  }
}

module.exports = processFileLink;
