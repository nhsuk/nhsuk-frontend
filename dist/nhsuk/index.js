'use strict';

var header = require('./components/header/header.js');
var skipLink = require('./components/skip-link/skip-link.js');
var button = require('./components/button/button.js');
var characterCount = require('./components/character-count/character-count.js');
var checkboxes = require('./components/checkboxes/checkboxes.js');
var details = require('./components/details/details.js');
var errorSummary = require('./components/error-summary/error-summary.js');
var radios = require('./components/radios/radios.js');
var tabs = require('./components/tabs/tabs.js');

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {Element | Document | null} [$scope] - Scope of the document to search within
 */
function initAll($scope) {
  const options = {
    scope: $scope || document
  };
  header.initHeader(options);
  skipLink.initSkipLinks(options);
  button.initButtons(options);
  characterCount.initCharacterCounts(options);
  checkboxes.initCheckboxes(options);
  details.initDetails(options);
  errorSummary.initErrorSummary(options);
  radios.initRadios(options);
  tabs.initTabs(options);
}

exports.Header = header.Header;
exports.initHeader = header.initHeader;
exports.SkipLink = skipLink.SkipLink;
exports.initSkipLinks = skipLink.initSkipLinks;
exports.Button = button.Button;
exports.initButtons = button.initButtons;
exports.CharacterCount = characterCount.CharacterCount;
exports.initCharacterCounts = characterCount.initCharacterCounts;
exports.Checkboxes = checkboxes.Checkboxes;
exports.initCheckboxes = checkboxes.initCheckboxes;
exports.Details = details.Details;
exports.initDetails = details.initDetails;
exports.ErrorSummary = errorSummary.ErrorSummary;
exports.initErrorSummary = errorSummary.initErrorSummary;
exports.Radios = radios.Radios;
exports.initRadios = radios.initRadios;
exports.Tabs = tabs.Tabs;
exports.initTabs = tabs.initTabs;
exports.initAll = initAll;
//# sourceMappingURL=index.js.map
