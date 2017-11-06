# apostrophe-link-widgets

A link widget for [ApostropheCMS](http://apostrophecms.org/).

`apostrophe-links-widgets` provides schema and a view for links.

## Installation

```bash
npm install apostrophe-link-widgets --save
```

## Use

You can use `apostrophe-links-widgets` as a singleton or in an area.

```
{{ apos.singleton(data.page, 'link' 'apostrophe-link') }}
```

```
{{ apos.area(data.page, 'area', {
    widgets: {
      'apostrophe-link': {}
    }
  })
}}
```

## Options
