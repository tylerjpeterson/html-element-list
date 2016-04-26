# html-element-list
> List and description of HTML tags

A [JSON file](element-list.json) to be consumed wherever, optionally interfaced via `index.js` for bundling within Browserify, etc.


## Installation

```sh
$ npm install html-element-list --save
```


## Usage

```javascript
const elementList = require('html-element-list');
const blink = require('html-element-list').blink;

console.log(elementList.strong); // The HTML Strong Element (strong) gives text strong importance, and is typically displayed in bold.
console.log(blink); // The HTML Blink Element (blink) is a non-standard element causing the enclosed text to flash slowly.
```


## Content
The list of tag definitions was retrieved with minor redaction from the [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). 
For updates, please see the [contributing to MDN](https://developer.mozilla.org/en-US/docs/MDN/Contribute) page.


## License
[HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) by [Mozilla Contributors](https://developer.mozilla.org/en-US/) is licensed under [CC-BY-SA 4.0](http://creativecommons.org/licenses/by/4.0/) with modification.

<sub>The original unmodified material is available from [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).</sub>
