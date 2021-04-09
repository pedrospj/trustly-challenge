const fetch = require('node-fetch');
const github = require('../constants/github');
const validateResponse = require('../utils/validateResponse');
const { mockHtml } = require('../constants/mock');
const getFilesLinks = async (folderPath) => {
  const pageResponse = await fetch(`${github.GITHUB_URL}/${folderPath}`);

  validateResponse(pageResponse);

  const pageContent = await pageResponse.text();

  const fileLinks = [];
  const folderLinks = [];

  // get only <a> tags that are files or folders
  const anchors = pageContent.match(
    /<a class=\"js-navigation-open[^>]*>(.+?)<\/a>/gm
  );

  for (const anchor of anchors) {
    //get <a> tag href
    const href = anchor.match(/href=['"]([^'"]+?)['"]/gm)[0];
    const path = href.slice(7, href.length - 1);

    if (path.includes('/blob/')) {
      //it's a file
      fileLinks.push(path.replace('/blob/', '/'));
    } else {
      //it's a folder
      //recursive get nested files links
      folderLinks.push(getFilesLinks(path));
    }
  }

  //end recursion
  if (folderLinks.length === 0) {
    return fileLinks;
  }

  const filesArrays = await Promise.all(folderLinks);

  return fileLinks.concat(...filesArrays);
};

module.exports = getFilesLinks;
