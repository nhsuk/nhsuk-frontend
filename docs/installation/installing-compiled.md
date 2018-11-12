# Installing using compiled files

When installing NHS.UK Frontend using compiled files, you are using compiled and minified versions of the stylesheet and JavaScript. 

This means that you will not be able to:

- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.
- import components individually.

## Installation

1. Download the compiled files

    [Download the latest version of NHS.UK Frontend](https://github.com/nhsuk/nhsuk-frontend/releases)

  2. Include resources  

        Extract the files into a folder, such as `assets`, within your project. Then import the files into your project using the `<link>` and `<script>` tags.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Example</title>

          <link rel="stylesheet" href="/assets/nhsuk-0.0.0.min.css">
          <script src="/assets/nhsuk-0.0.0.min.js" defer></script>
          <script src="/assets/jquery-3.3.1.min.js"></script>
        </head>
        <body>
          <!-- Components -->
        </body>
      </html>
      ```

### Hotlinking to https://assets.nhs.uk

**This is still in development and will be available soon.**

For prototyping we deploy the NHS.UK Frontend stylesheet and JavaScript to https://assets.nhs.uk so that it can be hotlinked to. This is useful if you don't have a development environment set up or you want to use a Cloud IDE such as Codepen to quickly put something together.

> Please do not hotlink to https://assets.nhs.uk or use jQuery CDN in production, as we can not guarantee the performance or uptime of these services.

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>

    <link rel="stylesheet" href="https://assets.nhs.uk/nhsuk-frontend/assets/css/nhsuk-v0.0.0.min.css">
    <script src="https://assets.nhs.uk/nhsuk-frontend/assets/js/nhsuk-v0.0.0.min.js" defer></script>
    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
  </head>
  <body>
    <!-- Components -->
  </body>
</html>
```

### Codepen

[View NHS.UK Frontend templates on Codepen]()
