'use strict';

var assert = require('assert');
var htmlTags = require('./');

it('should return an object', function () {
	assert(htmlTags instanceof Object);
});

it('should be keyed off HTML tags', function () {
	assert(htmlTags.a === "The HTML Anchor Element (a) defines a hyperlink to a location on the same page or any other page on the Web. It can also be used (in an obsolete way) to create an anchor point—a destination for hyperlinks within the content of a page, so that links aren't limited to connecting simply to the top of a page.");
});
