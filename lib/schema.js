module.exports = [
  {
    name: 'linkText',
    label: 'Link Text',
    type: 'string',
    required: true
  },
  {
    name: 'linkType',
    label: 'Link Type',
    type: 'select',
    required: true,
    choices: [
      {
        label: 'Page',
        value: 'page',
        showFields: [
          '_linkPage'
        ]
      },
      {
        label: 'File',
        value: 'file',
        showFields: [
          '_linkFile'
        ]
      },
      {
        label: 'Custom',
        value: 'custom',
        showFields: [
          'linkUrl'
        ]
      }
    ]
  },
  {
    name: '_linkPage',
    label: 'Link Page',
    type: 'joinByOne',
    withType: 'apostrophe-page',
    idField: 'pageId',
    required: true,
    filters: {
      projection: {
        title: 1,
        _url: 1
      }
    }
  },
  {
    name: '_linkFile',
    label: 'Link File',
    type: 'joinByOne',
    withType: 'apostrophe-file',
    idField: 'fileId',
    required: true
  },
  {
    name: 'linkUrl',
    label: 'Link URL',
    type: 'url',
    required: true
  },
  {
    name: 'linkTarget',
    label: 'Will the link open a new browser tab?',
    type: 'boolean'
  }
];
