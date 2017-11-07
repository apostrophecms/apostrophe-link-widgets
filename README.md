# apostrophe-link-widgets

A link widget for [ApostropheCMS](http://apostrophecms.org/).

`apostrophe-link-widgets` provides a simple way for users to create a link, giving them the option to choose a page or enter a URL manually.

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

`classes`: Takes an array of CSS class names to be applied to the link
