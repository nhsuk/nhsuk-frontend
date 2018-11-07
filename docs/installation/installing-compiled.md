# Installing using compiled files

### **This documentation is currently being written** 

We recommend using package managers to install NHS.UK Frontend, however if you do not have them setup or want to quickly prototype
installing the compiled files may be easier.

When installing from dist, you are using compiled and minified versions of the stylesheet. This means that you will not be able to:

- build your own styles or components based on the colour palette or typography and spacing mixins.
- use the component Nunjucks templates.

## Installation

1. Download the compiled files

Download the latest compiled and minified versions of the stylesheet and JavaScript.

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
