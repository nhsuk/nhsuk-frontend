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

[See an example in our NHS.UK Prototype Kit ]()

### Importing JavaScript

Some of our components require JavaScript to function properly, others just improve the usability and accessibility of the components.

You should include or import NHS.UK Frontend JavaScript in your application to ensure that all users can use it successfully.

HTML should be parsed first by the browser before it is initialised. Because of this, make sure you include the script before the closing `</body>` tag. Including the script elsewhere will stop components from functioning or displaying correctly.

Include the `node_modules/nhsuk-frontend/nhsuk.min.js` script on your page. You might wish to copy the file into your project or reference it from `node_modules`.

```html
    <script src="node_modules/nhsuk-frontend/nhsuk.min.js"></script>
  </body>
</html>
```

### Importing assets

### Include CSS and JavaScript

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="assets/nhsuk.min.css">
  </head>
  <body>
    <!-- HTML -->
    <script src="assets/nhsuk.min.js"></script>
  </body>
</html>
```

If your service supports Internet Explorer 8, you will need to [generate and
include a separate stylesheet](doc/contributing/supporting-internet-explorer-8.md) as well.
