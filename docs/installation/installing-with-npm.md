# Installing using npm

### **This documentation is currently being written** 

## Requirements

To use NHS.UK Frontend in your projects with npm you must:

1. Have [Node.js](https://nodejs.org/en/) installed. We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, which also includes npm.

2. Have a [package.json file](https://docs.npmjs.com/files/package.json) within your project. You can create a default `package.json` file by running `npm init` from the root of your application.

3. Have a pipeline set up to compile Sass files to CSS. We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass), you can find an example of a `gulpfile.js` script to compile Sass to CSS in the [gulp-sass documentation](https://www.npmjs.com/package/gulp-sass#basic-usage).

    ```
    npm install gulp gulp-sass --save
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

You will need to import a couple of things into your project before you can start using NHS.UK Frontend.

- [Importing styles](#importing-styles)
- [Importing JavaScript](#importing-javascript)
- [Importing assets](#importing-assets)
- [Importing Nunjucks macros (optional)](#importing-nunjucks-macros-optional)

## Importing styles

You need to import styles into the main Sass file in your project. You should place the below code before your own Sass styles.

```SCSS
@import 'node_modules/nhsuk-frontend/nhsuk';
```

Alternatively you can import each of the individual components separately, meaning you can import only the components you require. 

```SCSS
// Core (required)
@import 'node_modules/nhsuk-frontend/core/all';

// Individual component (optional)
@import 'node_modules/nhsuk-frontend/components/action-link/action-link';
```

### Optional: Resolving SCSS import paths

If you wish to resolve the above @import paths in your build (in order to avoid prefixing paths with node_modules), you should add node_modules to your Sass include paths.

For example, if your project uses Gulp, you would add the Sass include paths to your Gulp configuration file (for example gulpfile.js) with gulp-sass. Below is an example:

```javascript
gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
     }))
    .pipe(gulp.dest('./css'));
});
```

After resolving the import paths you can import all of the NHS.UK Frontend by using:

```SCSS
@import 'nhsuk-frontend/nhsuk';
```

or individually:

```SCSS
// Core (required)
@import 'nhsuk-frontend/core/all';

// Individual component (optional)
@import 'nhsuk-frontend/components/action-link/action-link';
```

## Importing JavaScript

Some of our components require JavaScript to function properly, others need JavaScript to improve the usability and accessibility.

You should include NHS.UK Frontend JavaScript in your application to ensure that all users can use it successfully.

Include the `node_modules/nhsuk-frontend/nhsuk.min.js` script in the `<head>` of the page using the `defer` attribute. You might wish to copy the file into your project assets directory or reference it straight from `node_modules`.

```html
    <script src="/path-to-assets/nhsuk.min.js" defer></script>
    <script src="/path-to-assets/jquery-3.3.1.min.js"></script>
  </head>
```

### Optional: node_modules path configuration

In order to include the JavaScript file directly from the `node_modules` folder, you need to configure your app to show these files. Below is a sample configuration using Express.js:

```
app.use(express.static(path.join(__dirname, '/node_modules')));
```

```html
    <script src="/nhsuk-frontend/nhsuk.min.js" defer></script>
    <script src="/nhsuk-frontend/jquery-3.3.1.min.js"></script>
  </head>
```

### jQuery dependency

The search component autocomplete requires jQuery, please ensure you have jQuery included within you project for this to work. In the future we are looking to remove the
jQuery dependency.

> For performance and security reasons, we do not recommend using a jQuery CDN, instead have the jQuery dependency hosted local to your project.

## Importing assets

**Documentation being written**

## Importing Nunjucks macros (optional)

**Documentation being written**

## Example

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="/path-to-assets/main.min.css">
    <script src="/path-to-assets/nhsuk.min.js" defer></script>
    <script src="/path-to-assets/libraries/jquery-3.3.1.min.js"></script>
  </head>
  <body>
    <!-- Components -->
  </body>
</html>
```

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Installing GOV.UK Frontend with node package manager (NPM)](https://github.com/alphagov/govuk-frontend/blob/master/docs/installation/installing-with-npm.md) with a few minor adaptations.
