var path = require('path')

var Metalsmith = require('metalsmith')
var nunjucks = require('nunjucks')
var inplace = require('metalsmith-in-place')
var rename = require('metalsmith-rename')

var breadcrumbs = require('./breadcrumbs.js')

var env = nunjucks.configure(['site/_layouts', 'packages'], { autoescape: true });
var rootDir = path.resolve(__dirname, '../..')


/**
 * Take the contents of ./docs/ and convert it into html.
 * Docs are written for native readability on github.com, so we
 * have to apply some workarounds.
 *
 * - Convert README.md into index pages
 * - Replace .md links in markdown with .html links
 * - Wrap markdown in the site-specific layout
 */
module.exports.markdownDocs = function(done) {
  Metalsmith(rootDir)
    .source('docs')
    .destination('dist/docs/docs')
    .clean(false)
    .use(rename([
      // README.md should end up being the index.html page
      [/\/README.md$/, '/index.md'],
    ]))
    .use(function(files, metalsmith, done) {
      Object.keys(files).forEach(function(key) {
        var contents = files[key].contents.toString()
        //replace
        var regex = /\[([^\]]*?)\]\(([^\)]*?)\.md\)/g
        contents = contents.replace(regex, function(match, p1, p2) {
          return `[${p1}](${p2}.html)`;
        })
        files[key].contents = new Buffer(contents)
      })
      done()
    })
    .use(inplace()) // convert markdown files to .html
    .use(function(files, metalsmith, done) {
      // Wrap markdown with the page.njk layout
      var keys = Object.keys(files)
      keys = keys.filter(function(key) {
        return key.endsWith('.html')
      })
      keys.map(function(key) {
        var contents = files[key].contents.toString('utf8')
        contents = `{% extends "page.njk" %}
          {% block content %}
            {%raw%}${contents}{%endraw%}
          {% endblock %}
        `
        files[key].contents = new Buffer(contents)
      })
      done()
    })
    .use(breadcrumbs({
      // Add a "Home" and a "Docs" breadcrumb
      baseFilepath: 'home/docs',
    }))
    .use(rename([
      // use the .njk extension so that inplace can do nunjucks processing
      [/\.html$/, '.njk'],
    ]))
    .use(inplace({
      engineOptions: {
        path: ['site/_layouts', 'packages'],
      }
    }))
    .build(function(err) {
      if (err) throw err
      done()
    })
}

module.exports.buildSite = function(done) {
  Metalsmith(rootDir)
    .source('site/pages')
    .destination('dist/docs')
    .clean(false)
    .use(inplace({
      engineOptions: {
        path: ['site/_layouts', 'packages'],
      }
    }))
    .build(function(err) {
      if (err) throw err
      done()
    })
}
