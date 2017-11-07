# apostrophe-link-widgets

A link widget for [ApostropheCMS](http://apostrophecms.org/).

`apostrophe-link-widgets` provides schema and a view for links.

## Installation

```bash
npm install apostrophe-link-widgets --save
```

## Use

You can use `apostrophe-link-widgets` as you would any widget in ApostropheCMS.

Here's an example of a singleton:

```nunjucks
{{ apos.singleton(data.page, 'link', 'apostrophe-link') }}
```

## Options

`classes`: Takes an array of classes to be used on the link
