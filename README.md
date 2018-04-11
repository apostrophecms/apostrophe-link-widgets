# apostrophe-link-widgets

A link widget for [ApostropheCMS](http://apostrophecms.org/).

`apostrophe-link-widgets` provides a simple way for users to create a link, giving them the option to choose a page or enter a URL manually.

## Installation

```bash
npm install apostrophe-link-widgets --save
```

## Use as a widget
You can use `apostrophe-link-widgets` as you would any widget in ApostropheCMS.

Here's an example of a singleton:

```nunjucks
{{ apos.singleton(data.page, 'link', 'apostrophe-link') }}
```

## Use as a schema
You can also `require` the schema for `apostrophe-link-widgets` so it can be leveraged across other schemas. This is useful when building more than one link-like thing (array of links for navigations) or appending link-like properties to other schemas/widgets.

```js
const linkSchema = require('apostrophe-link-widgets/lib/schema.js');
```
In a navigation widget schema

```js
...
{
  name: 'navPrimaryItems',
  help: 'Navigation items for the primary nav',
  label: 'Primary Navigation Items',
  type: 'array',
  titleField: 'linkText',
  schema: linkSchema
}
```

## Options

`classes`: Takes an array of CSS class names to be applied to the link
