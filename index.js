const schema = require('./lib/schema.js');

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link',
  alias: 'links',
  beforeConstruct: (self, options) => {
    options.addFields = schema.concat(options.addFields || []);
  },
  construct: (self, options) => {
    self.addHelpers({
      linkPath: (link) => {
        if (!link) {
          return;
        }
        let path;
        if (link.linkType === 'page' && link._linkPage) {
          path = link._linkPage._url;
        } else if (link.linkType === 'file' && link._linkFile) {
          path = link._linkFile._url;
        } else if (link.linkType === 'custom') {
          path = link.linkUrl;
        }

        return path;
      }
    });
  }
};
