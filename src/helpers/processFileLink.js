const fetch = require('node-fetch');
const github = require('../constants/github');
const getStringInfo = require('../utils/getStringInfo');

async function processFileLink(response, link) {
  try {
    const filePageResponse = await fetch(`${github.GITHUB_RAW_FILE}/${link}`);
    const fileContent = await filePageResponse.text();

    const { extension, lineCount, bytes } = getStringInfo(link, fileContent);

    if (response[extension]) {
      response[extension] = {
        ...response[extension],
        bytes: response[extension].bytes + bytes,
        lines: response[extension].lines + lineCount,
        count: response[extension].count + 1,
      };
    } else {
      response[extension] = {
        ...response[extension],
        extension: extension,
        bytes: bytes,
        lines: lineCount,
        count: 1,
      };
    }
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong!`,
      error: error,
    });
  }
}

module.exports = processFileLink;
