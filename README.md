# apostrophe-link-widgets

A link widget for [ApostropheCMS](http://apostrophecms.org/).

`apostrophe-links-widgets` provides schema and a view for links.

## Installation

```bash
npm install apostrophe-link-widgets --save
```

## Use

You can use `apostrophe-links-widgets` as a singleton, area or as type `singleton` in your schema.

This widget is useful for creating links, buttons or navigation lists.

```nunjucks
{{ apos.singleton(data.page, 'link' 'apostrophe-link') }}
```

```nunjucks
{{ apos.area(data.page, 'area', {
    widgets: {
      'apostrophe-link': {}
    }
  })
}}
```

## Options

`classes`: Takes an array of classes to be used on the link
