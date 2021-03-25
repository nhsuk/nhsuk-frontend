# Installing using compiled files

When installing NHS.UK frontend using compiled files, you are using compiled and minified versions of the stylesheet and JavaScript.

This means that you will not be able to:

- selectively include CSS for individual components.
- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.

If you require any of this functionality, you should [install using npm](/docs/installation/installing-with-npm.md) instead.

## Installation

1. Download the compiled files

    [Download the latest CSS, JavaScript and assets from GitHub (zip file)](https://github.com/nhsuk/nhsuk-frontend/releases)

2. Include resources

    Copy all 3 folders, `css`, `js` and `assets`, into the root of your project. If you already have a folder structure
    in place, you will need to copy the individual files into the relevant folders.

    Make sure you change the version numbers of the `[latest version].min.css` and `[latest version].min.js` files,
    in the example below, to the version you are using.

    ```html
    <!-- Styles -->
    <link rel="stylesheet" href="css/nhsuk-[latest version].min.css">

    <!-- Scripts -->
    <script src="js/nhsuk-[latest version].min.js" defer></script>

    <!-- Favicons -->
    <link rel="shortcut icon" href="assets/favicons/favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="assets/favicons/apple-touch-icon-180x180.png">
    <link rel="mask-icon" href="assets/favicons/favicon.svg" color="#005eb8">
    <link rel="icon" sizes="192x192" href="assets/favicons/favicon-192x192.png">
    <meta name="msapplication-TileImage" content="assets/favicons/mediumtile-144x144.png">
    <meta name="msapplication-TileColor" content="#005eb8">
    <meta name="msapplication-square70x70logo" content="assets/favicons/smalltile-70x70.png">
    <meta name="msapplication-square150x150logo" content="assets/favicons/mediumtile-150x150.png">
    <meta name="msapplication-wide310x150logo" content="assets/favicons/widetile-310x150.png">
    <meta name="msapplication-square310x310logo" content="assets/favicons/largetile-310x310.png">
    ```

  3. Get the JavaScript working

      Add the following JavaScript to the top of the `<body>` section of your page template:

      ```
      <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>
      ```

  4. Create pages using NHS.UK frontend

      You can now create pages using the [Design system on the NHS digital service manual](https://service-manual.nhs.uk/design-system).
