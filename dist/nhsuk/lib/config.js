'use strict';

var node_path = require('node:path');
var node_url = require('node:url');

const pkgPath = require.resolve('nhsuk-frontend/package.json');

/**
 * NHS.UK frontend path
 */
const nhsukFrontendPath = pkgPath.startsWith('file:') ? node_url.fileURLToPath(node_path.dirname(pkgPath)) // ES modules resolve to file URL
: node_path.dirname(pkgPath); // CommonJS modules resolve to file path

exports.nhsukFrontendPath = nhsukFrontendPath;
//# sourceMappingURL=config.js.map
