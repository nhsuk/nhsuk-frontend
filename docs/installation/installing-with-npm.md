# Installing using npm

## Requirements

To use NHS.UK Frontend in your projects with npm you must:

1. Have [Node.js](https://nodejs.org/en/) installed. We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, which also includes npm.

2. Have a [package.json file](https://docs.npmjs.com/files/package.json) within your project. You can create a default `package.json` file by running `npm init` from the root of your project.

3. Have a pipeline set up to compile Sass files to CSS. We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass), you can find an example of a `gulpfile.js` script to compile Sass to CSS in the [gulp-sass documentation](https://www.npmjs.com/package/gulp-sass#basic-usage).

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
- [Importing assets](#importing-assets)
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

### Optional: Resolving SCSS import paths

If you wish to resolve the above @import paths in your build (in order to avoid prefixing paths with node_modules), you should add node_modules to your Sass include paths.

For example, if your project uses Gulp, you would add the Sass include paths to your Gulp configuration file (for example gulpfile.js) with gulp-sass. Below is an example:

```javascript
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
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

For example, if your project uses [Express.js](https://expressjs.com/), in order to include the JavaScript file directly from the `node_modules` folder, you need to configure your main `app.js` file to show files from this folder

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

## Importing assets

For example, if your project uses [Express.js](https://expressjs.com/),in order to include the asset files directly from the `node_modules` folder, you need to configure your main `app.js` file to show files from this folder

```
app.use('/nhsuk-frontend', express.static(path.join(__dirname, '/node_modules/nhsuk-frontend/packages')));
```

**Favicons**

```html
<!--[if IE]><link rel="shortcut icon" href="/nhsuk-frontend/assets/favicons/favicon.ico"><![endif]-->
<link rel="apple-touch-icon" href="/nhsuk-frontend/assets/favicons/apple-touch-icon.png">
<link rel="icon" href="/nhsuk-frontend/assets//favicons/favicon.png">
```

**Icons**

If you are using a templating language, such as Nunjucks, you can include icons with:

```html
{% include '/nhsuk-frontend/assets/icons/icon-arrow-right-circle.svg' %}
```

Alternatively with SVG icons you can just include the code required for that icon:

```html
<svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"/>
</svg>
```

## Importing Nunjucks macros (optional)

Below is an example setup using Express configure views:

```
nunjucks.configure('node_modules/nhsuk-frontend/components', {
  autoescape: true,
  cache: false,
  express: app
})
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Installing GOV.UK Frontend with node package manager (NPM)](https://github.com/alphagov/govuk-frontend/blob/master/docs/installation/installing-with-npm.md) with a few minor adaptations.
