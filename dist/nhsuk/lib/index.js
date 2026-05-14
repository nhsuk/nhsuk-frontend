'use strict';

var components$1 = require('./components.js');
var names$1 = require('./names.js');
var index$1 = require('./nunjucks/index.js');
var index = require('./highlighter/index.js');

/**
 * NHS.UK frontend library
 */


/**
 * @typedef {import('./components.mjs').MacroExample} MacroExample
 * @typedef {import('./components.mjs').MacroExampleFixture} MacroExampleFixture
 * @typedef {import('./components.mjs').MacroExampleFixtures} MacroExampleFixtures
 * @typedef {import('./components.mjs').MacroOption} MacroOption
 * @typedef {import('./components.mjs').MacroParam} MacroParam
 * @typedef {import('./components.mjs').MacroScenario} MacroScenario
 * @typedef {import('./nunjucks/index.mjs').MacroRenderOptions} MacroRenderOptions
 * @typedef {import('./nunjucks/index.mjs').TemplateRenderOptions} TemplateRenderOptions
 */

exports.components = components$1;
exports.names = names$1;
exports.nunjucks = index$1;
exports.highlighter = index.highlighter;
//# sourceMappingURL=index.js.map
