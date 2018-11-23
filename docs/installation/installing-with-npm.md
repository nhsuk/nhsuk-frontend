# Installing using npm

## Requirements

To use NHS.UK Frontend in your projects with npm you must:

1. Have [Node.js](https://nodejs.org/en/) installed. We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, which also includes npm.

2. Have a [package.json file](https://docs.npmjs.com/files/package.json) within your project. You can create a default `package.json` file by running `npm init` from the root of your project.

3. Have a pipeline set up to compile Sass files to CSS. We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass).

    ```
    npm install gulp node-sass gulp-sass --save
    ```

4. (Optional) If you want to use our [Nunjucks](https://mozilla.github.io/nunjucks/) macros, you will need to install Nunjucks. [Nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro) allows you to define reusable chunks of content. It is similar to a function in a programming language.  

    ```
    npm install nunjucks --save
    ````

## Installation

Install the NHS.UK Frontend package into to your project:

```
npm install nhsuk-frontend --save
```

## Configuration

You will need to import a couple of things into your project before you can start using NHS.UK Frontend:

- [Importing styles](#importing-styles)
- [Importing JavaScript](#importing-javascript)
- [Importing assets (optional)](#importing-assets-optional)
- [Importing Nunjucks macros (optional)](#importing-nunjucks-macros-optional)

## Importing styles

You need to import styles into the main Sass file in your project. You should place the below code before your own Sass styles.

```SCSS
@import 'node_modules/nhsuk-frontend/packages/nhsuk';
```

Alternatively you can import each of the individual components separately, meaning you can import only the components you require. 

```SCSS
// Core (required)
@import 'node_modules/nhsuk-frontend/packages/core/all';

// Individual component (optional)
@import 'node_modules/nhsuk-frontend/packages/components/action-link/action-link';
```

### Required: Compiling Sass to CSS

We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass), if your project is using gulp you will need a `gulpfile.js` in the root of your project. 

Below is an example of a `gulpfile.js` that will compile Sass to CSS:
 
```javascript
'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./path-to-sass-files/*.scss')
    .pipe(sass())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./path-to-css-files/css'));
});
```

> Make sure you update the folder paths to your Sass and CSS files in the above example.

To run the above task, you will need to create a script within your `package.json` file:

```
"scripts": {
  "test": "",
  "compile": "gulp sass"
}
```

then to run the script to compile your Sass files to CSS:

```
npm run compile
```


### Optional: Resolving SCSS import paths

If you wish to resolve the above @import paths in your build (in order to avoid prefixing paths with node_modules), you should add `node_modules` to your Sass include paths.

If your project is using Gulp, you would add the Sass include paths to your Gulp configuration file (for example gulpfile.js) with gulp-sass. Below is an example:

```javascript
.pipe(sass({
  includePaths: 'node_modules'
}))
```

```javascript
gulp.task('sass', function () {
  return gulp.src('./path-to-sass-files/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./path-to-css-files/css'));
});
```

After resolving the import paths you can import all of the NHS.UK Frontend by using:

```SCSS
@import 'nhsuk-frontend/packages/nhsuk';
```

or individually:

```SCSS
// Core (required)
@import 'nhsuk-frontend/packages/core/all';

// Individual component (optional)
@import 'nhsuk-frontend/packages/components/action-link/action-link';
```

## Importing JavaScript

Some of our components require JavaScript to function properly, others need JavaScript to improve the usability and accessibility.

You should include NHS.UK Frontend JavaScript in your project to ensure that all users can use it successfully.

Include the `node_modules/nhsuk-frontend/nhsuk.min.js` script in the `<head>` of your page using the `defer` attribute. 

> The defer attribute is used for performance benefits as the browser loads the JavaScript file as soon as possible, due to it being in the `<head>`, but will not run until after the page has loaded.

You might wish to copy the file into your project or reference it from node_modules.

```html
    <script src="path-to-assets/nhsuk.min.js" defer></script>
  </head>
```

```html
    <script src="node_modules/nhsuk-frontend/packages/nhsuk.min.js" defer></script>
  </head>
```

Depending on what programming language your project is using and the configuration, you may need to expose the `node_modules` folder in order to include files directly from this folder.

### Express.js example

If your project uses [Express.js](https://expressjs.com/), to include the JavaScript file directly from the `node_modules` folder, you need to configure your main `app.js` file to expose files from this folder:

```
app.use('/nhsuk-frontend', express.static(path.join(__dirname, '/node_modules/nhsuk-frontend/packages')));
```

After configuring the `node_modules` path in Express.js you can reference the NHS.UK Frontend JavaScript by using:

```html
    <script src="/nhsuk-frontend/nhsuk.min.js" defer></script>
  </head>
```

### jQuery dependency

The search component autocomplete requires jQuery, please ensure you have jQuery included within you project for this to work. In the future we are looking to remove the
jQuery dependency.

> For performance and security reasons, we do not recommend using a jQuery CDN, instead have the jQuery dependency hosted local to your project.

## Importing assets (optional)

If you want to import assets such as the favicons and SVG icons, you might wish to copy the files into your project or reference it from `node_modules`.

```html
<!--[if IE]><link rel="shortcut icon" href="node_modules/nhsuk-frontend/assets/favicons/favicon.ico"><![endif]-->
<link rel="apple-touch-icon" href="node_modules/nhsuk-frontend/assets/favicons/apple-touch-icon.png">
<link rel="icon" href="node_modules/nhsuk-frontend/assets/favicons/favicon.png">
```

Depending on what programming language your project is using and the configuration, you may need to expose the `node_modules` folder in order to include files directly from this folder.

### Express.js example

If your project uses [Express.js](https://expressjs.com/), to include the asset files directly from the `node_modules` folder, you need to configure your main `app.js` file to expose files from this folder:

```
app.use('/nhsuk-frontend', express.static(path.join(__dirname, '/node_modules/nhsuk-frontend/packages')));
```

**Favicons**

```html
<!--[if IE]><link rel="shortcut icon" href="/nhsuk-frontend/assets/favicons/favicon.ico"><![endif]-->
<link rel="apple-touch-icon" href="/nhsuk-frontend/assets/favicons/apple-touch-icon.png">
<link rel="icon" href="/nhsuk-frontend/assets/favicons/favicon.png">
```

**Icons**

```html
{% include '/nhsuk-frontend/assets/icons/icon-arrow-right-circle.svg' %}
```

## Importing Nunjucks macros (optional)

### Express.js example

If your project uses [Express.js](https://expressjs.com/), to include the nunjucks files directly from the `node_modules` folder, you need to configure your main `app.js`:

```
nunjucks.configure('node_modules/nhsuk-frontend/components', {
  autoescape: true,
  cache: false,
  express: app
})
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Installing GOV.UK Frontend with node package manager (NPM)](https://github.com/alphagov/govuk-frontend/blob/master/docs/installation/installing-with-npm.md) with a few minor adaptations.
