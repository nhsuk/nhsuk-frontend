var path = require('path');

var toTitleCase = function(string) {
  return string.split('-').map(function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join(' ')
}

/**
 * Add breadcrumb data to file metadata
 *
 * Parse the filepath of each file
 * Return an array of metadata objects
 */
module.exports = function(config) {
  var defaultConfig = {
    slugToTitle: toTitleCase,
    baseFilepath: '',
  }
  config = Object.assign(defaultConfig, config || {})
  return function(files, metalsmith, done) {
    var keys = Object.keys(files)

    keys.forEach(function(key) {
      var url = path.join(config.baseFilepath, key)
      var pathParts = url.split(path.sep)

      var isIndex = pathParts[pathParts.length - 1] === 'index.html'

      // remove the last part. We're not interested in the file part
      pathParts.pop()

      var from = pathParts.join('/')
      var items = pathParts.map(function(part, i) {
        var to = pathParts.slice(0, i+1).join(path.sep)
        var relative = path.relative(from, to)

        return {
          text: config.slugToTitle(part),
          href: relative || '.', //if relative is empty, use `.` instead
        }
      })

      if(isIndex) {
        // remove any index.html part. We should treat it as a directory
        items.pop()
      }

      var lastItem  = items.pop()
      var breadcrumbs = lastItem ? {
        items: items,
        text: lastItem.text,
        href: lastItem.href,
      } : {}

      files[key].breadcrumbs = breadcrumbs
    })

    done()
  }
}
