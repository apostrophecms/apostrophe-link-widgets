var schema = require('./lib/schema.js');

module.exports = {
  extend: 'apostrophe-widgets',
  label: 'Link',
  beforeConstruct: (self, options) => {
    options.addFields = schema.concat(options.addFields || []);
  }
};
