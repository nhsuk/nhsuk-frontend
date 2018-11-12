# Installing using npm

### **This documentation is currently being written** 

## Requirements

To use NHS.UK Frontend in your projects with npm you must:

1. Have [Node.js](https://nodejs.org/en/) installed.

   > We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, which also includes npm.

2. Have a [package.json file](https://docs.npmjs.com/files/package.json) within your project. 

   > You can create a default `package.json` file by running `npm init` from the root of your application.

3. Have a pipeline set up to compile Sass files to CSS. 

   > We recommend using [gulp](https://gulpjs.com/) and [gulp-sass](https://www.npmjs.com/package/gulp-sass), you can find an example of a `gulpfile.js` script to compile Sass to CSS in the [gulp-sass documentation](https://www.npmjs.com/package/gulp-sass#basic-usage).

    ```
    npm install gulp gulp-sass --save
    ```

4. (Optional) If you want to use our [Nunjucks](https://mozilla.github.io/nunjucks/) macros, you will need to install Nunjucks.

   > [Nunjucks macros](https://mozilla.github.io/nunjucks/templating.html#macro) allows you to define reusable chunks of content. It is similar to a function in a programming language.  

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
@import 'node_modules/core/all';

// Individual components (optional)
@import 'node_modules/components/action-link/action-link';
@import 'node_modules/components/breadcrumb/breadcrumb';
@import 'node_modules/components/care-card/care-card';
@import 'node_modules/components/contents-list/contents-list';
@import 'node_modules/components/details/details';
@import 'node_modules/components/do-dont-list/do-dont-list';
@import 'node_modules/components/emergency-alert/emergency-alert';
@import 'node_modules/components/feedback-banner/feedback-banner';
@import 'node_modules/components/footer/footer';
@import 'node_modules/components/header/header';
@import 'node_modules/components/hero/hero';
@import 'node_modules/components/images/images';
@import 'node_modules/components/inset-text/inset-text';
@import 'node_modules/components/list-panel/list-panel';
@import 'node_modules/components/nav-a-z/nav-a-z';
@import 'node_modules/components/pagination/pagination';
@import 'node_modules/components/panel/panel';
@import 'node_modules/components/promo/promo';
@import 'node_modules/components/review-date/review-date';
@import 'node_modules/components/skip-link/skip-link';
@import 'node_modules/components/tables/tables';
@import 'node_modules/components/warning-callout/warning-callout';
```

## Importing JavaScript

Some of our components require JavaScript to function properly, others need JavaScript to improve the usability and accessibility.

You should include NHS.UK Frontend JavaScript in your application to ensure that all users can use it successfully.

Include the `node_modules/nhsuk-frontend/nhsuk.min.js` script in the `<head>` of the page using the `defer` attribute. You might wish to copy the file into your project assets directory or reference it straight from `node_modules`.

### jQuery dependency

The search component autocomplete requires jQuery, please ensure you have jQuery included within you project for this to work. In the future we are looking to remove the
jQuery dependency.

> For performance and security reasons, we do not recommend using a jQuery CDN, instead have the jQuery dependency hosted local to your project.

### Example

```html
    <script src="/path-to-assets/nhsuk.min.js" defer></script>
    <script src="/path-to-assets/jquery-3.3.1.min.js"></script>
  </head>
```

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
