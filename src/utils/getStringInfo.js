const { extname } = require('path');

function getStringInfo(url, pageString) {
  const lineCount = pageString.split(/\r\n|\r|\n/).length;
  const bytes = Buffer.from(pageString).length;
  const extension = extname(url).replace('.', '');

  return {
    lineCount,
    bytes,
    extension,
  };
}

module.exports = getStringInfo;
