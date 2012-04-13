# jquery.goodThumbnail
## Require
JQuery (higher than 1.7 or above)
## Usage
Please see $.fn.goodThumbnail.defaults to know default options.
=== HTML ===

```html
<div><img class=".pic" src="foo.png" width="130" height="130"></div>
<div><img class=".pic" src="bar.png" width="130" height="130"></div>
```
=== JavaScript ===

```javascript
$('.pic').goodThumbnail({
  width: 130,              // thumbnail width
  height: 130,             // thumbnail height
  autoAddClass: 'thumb',   // auto added element's class for thumbnail
  parentElmForThumb: 'div' // type of parent element individual thumbnail
})
```
## Copyright
Copyright (C) 2012 Takatoshi Matsumoto

Released under the WTFPL: sam.zoy.org/wtfpl
