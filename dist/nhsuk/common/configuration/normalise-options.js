'use strict';

var index = require('../index.js');

/**
 * Normalise options passed to `initAll` or `createAll`
 *
 * @template {CompatibleClass} ComponentClass
 * @param {Config | CreateAllOptions<ComponentClass> | OnErrorCallback<ComponentClass> | Element | Document | null} [scopeOrOptions] - Scope of the document to search within, initialisation options or error callback function
 * @returns {CreateAllOptions<ComponentClass>} Normalised options
 */
function normaliseOptions(scopeOrOptions) {
  let /** @type {Element | Document | null} */$scope = document;
  let /** @type {OnErrorCallback<ComponentClass> | undefined} */onError;

  // Handle options object
  if (index.isObject(scopeOrOptions)) {
    const options = scopeOrOptions;

    // Scope must be valid or null
    if (index.isScope(options.scope) || options.scope === null) {
      $scope = options.scope;
    }

    // Error handler must be a function
    if (typeof options.onError === 'function') {
      onError = options.onError;
    }
  }
  if (index.isScope(scopeOrOptions)) {
    $scope = scopeOrOptions;
  } else if (scopeOrOptions === null) {
    $scope = null;
  } else if (typeof scopeOrOptions === 'function') {
    onError = scopeOrOptions;
  }
  return {
    scope: $scope,
    onError
  };
}

/**
 * @import { CompatibleClass } from '../../component.mjs'
 * @import { Config, CreateAllOptions, OnErrorCallback } from '../../index.mjs'
 */

exports.normaliseOptions = normaliseOptions;
//# sourceMappingURL=normalise-options.js.map
