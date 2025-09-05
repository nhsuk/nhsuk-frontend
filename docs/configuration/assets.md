# Import icons and image assets

To use icon and image assets from NHS.UK frontend, you can either:

- serve the assets from the NHS.UK frontend assets folder - recommended
- copy the favicons, app icons and manifest file into your application

## Serve the assets from the NHS.UK frontend assets folder - recommended

Set up your routing so requests for files in `<YOUR-SITE-URL>/assets` are served from `/node_modules/nhsuk-frontend/dist/nhsuk/assets`.

If you're using [express.js](https://expressjs.com/), request routing could be set up as follows:

```js
router.use(
  '/assets',
  express.static('node_modules/nhsuk-frontend/dist/nhsuk/assets')
)
```

## Copy the favicons, app icons and manifest file into your application

If you decide to copy the assets instead, copy the:

- `/node_modules/nhsuk-frontend/dist/nhsuk/assets/images` folder to `<YOUR-APP>/assets/images`
- `/node_modules/nhsuk-frontend/dist/nhsuk/assets/manifest.json` file to `<YOUR-APP>/assets`

The copied assets will be included by the [design system page template](https://service-manual.nhs.uk/design-system/styles/page-template) inside the `<head>` tag:

```html
<link rel="icon" href="/assets/images/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/images/favicon.svg" sizes="any" type="image/svg+xml">
<link rel="mask-icon" href="/assets/images/nhsuk-icon-mask.svg" color="#005eb8">
<link rel="apple-touch-icon" href="/assets/images/nhsuk-icon-180.png">
<link rel="manifest" href="/assets/manifest.json">
```

You should use an automated task or your build pipeline to copy the files, so your project folder stays up to date when we update NHS.UK frontend.

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Import font and images assets](https://frontend.design-system.service.gov.uk/import-font-and-images-assets/#import-font-and-images-assets) with a few minor adaptations.
