const getPageLinks = (pageContent) => {
  const anchors = pageContent.match(
    /<a class=\"js-navigation-open[^>]*>(.+?)<\/a>/gm
  );

  const hrefs = anchor.match(/href=['"]([^'"]+?)['"]/gm)[0];


}
    .forEach((anchor) => {
      const href = anchor.match(/href=['"]([^'"]+?)['"]/gm)[0];
      const path = href.slice(7, href.length - 1);

      if (path.includes('/blob/')) {
        filesLinks.push(path.replace('/blob/', '/'));
      } else {
        folderLinks.push(path);
      }
    });
};

module.exports = getPageLinks;
