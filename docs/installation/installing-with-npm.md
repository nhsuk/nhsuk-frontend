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

> The `nhsuk-frontend` package will install in the `node_modules` folder within your project.

## Configuration

### Importing styles

You need to import styles into the main Sass file in your project. You should place the below code before your own Sass styles.

```SCSS
@import 'node_modules/nhsuk-frontend/nhsuk';
```

### Importing JavaScript

Some of our components require JavaScript to function properly, others need JavaScript to improve the usability and accessibility.

You should include NHS.UK Frontend JavaScript in your application to ensure that all users can use it successfully.

Include the `node_modules/nhsuk-frontend/nhsuk.min.js` script in the `<head>` of the page using the `defer` attribute. You might wish to copy the file into your project assets directory or reference it straight from `node_modules`.

#### jQuery dependency

The search component autocomplete requires jQuery, please ensure you have jQuery included within you project for this to work. In the future we are looking to remove the
jQuery dependency.

> For performance and security reasons, we do not recommend using a jQuery CDN, instead have the jQuery dependency hosted local to your project.

#### Example

```html
    <script src="/node_modules/nhsuk-frontend/nhsuk.min.js" defer></script>
    <script src="/node_modules/nhsuk-frontend/assets/libraries/jquery-3.3.1.min.js"></script>
  </head>
```

### Importing Nunjucks macros (optional)

## Example

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="/node_modules/nhsuk-frontend/nhsuk.min.css">
    <script src="/node_modules/nhsuk-frontend/nhsuk.min.js" defer></script>
    <script src="/node_modules/nhsuk-frontend/assets/libraries/jquery-3.3.1.min.js"></script>
  </head>
  <body>
    <!-- Components -->
  </body>
</html>
```
