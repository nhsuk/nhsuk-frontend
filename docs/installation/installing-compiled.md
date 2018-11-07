# Installing using compiled files

### **This documentation is currently being written** 

When installing the compiled files from dist, you are using compiled and minified versions of the stylesheet. This means that you will not be able to:

- build your own styles or components based on the colour variables or typography and spacing mixins.
- use the component Nunjucks templates.

## Installation

1. Download the compiled files

    [Download the latest compiled versions of the stylesheet and JavaScript](https://github.com/nhsuk/nhsuk-frontend/tree/master/dist)

    > You can find previous versions and the CHANGELOG on our [project releases page](https://github.com/nhsuk/nhsuk-frontend/releases).

  2. Include resources  

        Copy the compiled files into a folder, such as `assets`, within your project.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Example</title>

          <link rel="stylesheet" href="/assets/css/nhsuk-v0.0.0.min.css">
          <script src="/assets/js/nhsuk-v0.0.0.min.js" defer></script>
          <script src="/assets/js/jquery-3.3.1.min.js"></script>
        </head>
        <body>
          <!-- Components -->
        </body>
      </html>
      ```

## Prototyping quick start

For prototyping we deploy the NHS.UK Frontend stylesheet and JavaScript to https://assets.nhs.uk so that it can be hotlinked to. This is useful if you don't have
a development environment set up or you want to use a Cloud IDE such as Codepen to quickly put something together.

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
