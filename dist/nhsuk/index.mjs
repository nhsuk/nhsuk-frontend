import { initHeader } from './components/header/header.mjs';
export { Header } from './components/header/header.mjs';
import { initSkipLinks } from './components/skip-link/skip-link.mjs';
export { SkipLink } from './components/skip-link/skip-link.mjs';
import { initButtons } from './components/button/button.mjs';
export { Button } from './components/button/button.mjs';
import { initCharacterCounts } from './components/character-count/character-count.mjs';
export { CharacterCount } from './components/character-count/character-count.mjs';
import { initCheckboxes } from './components/checkboxes/checkboxes.mjs';
export { Checkboxes } from './components/checkboxes/checkboxes.mjs';
import { initDetails } from './components/details/details.mjs';
export { Details } from './components/details/details.mjs';
import { initErrorSummary } from './components/error-summary/error-summary.mjs';
export { ErrorSummary } from './components/error-summary/error-summary.mjs';
import { initRadios } from './components/radios/radios.mjs';
export { Radios } from './components/radios/radios.mjs';
import { initTabs } from './components/tabs/tabs.mjs';
export { Tabs } from './components/tabs/tabs.mjs';

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
  initHeader(options);
  initSkipLinks(options);
  initButtons(options);
  initCharacterCounts(options);
  initCheckboxes(options);
  initDetails(options);
  initErrorSummary(options);
  initRadios(options);
  initTabs(options);
}

export { initAll, initButtons, initCharacterCounts, initCheckboxes, initDetails, initErrorSummary, initHeader, initRadios, initSkipLinks, initTabs };
//# sourceMappingURL=index.mjs.map
