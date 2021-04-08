const fetch = require('node-fetch');
const github = require('../constants/github');

const getFilesLinks = async (folderPath, res) => {
  try {
    const pageResponse = await fetch(`${github.GITHUB_URL}/${folderPath}`);
    const pageContent = await pageResponse.text();

    const fileLinks = [];
    const folderLinks = [];

    const anchors = pageContent.match(
      /<a class=\"js-navigation-open[^>]*>(.+?)<\/a>/gm
    );

    for (const anchor of anchors) {
      const href = anchor.match(/href=['"]([^'"]+?)['"]/gm)[0];
      const path = href.slice(7, href.length - 1);

      if (path.includes('/blob/')) {
        fileLinks.push(path.replace('/blob/', '/'));
      } else {
        folderLinks.push(getFilesLinks(path, res));
      }
    }

    //end recursion
    if (folderLinks.length === 0) {
      return [];
    }

    const filesArrays = await Promise.all(folderLinks);

    //start recursion
    return fileLinks.concat(...filesArrays);
  } catch (error) {
    return res.status(500).json({
      message: `Something went wrong!`,
      error: error,
    });
  }
};

module.exports = getFilesLinks;
