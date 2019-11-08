# NHS.UK frontend Changelog

## 3.0.2 - 11 November 2019

:wrench: **Fixes**

- Details keydown - following the details polyfill refactor, we've fixed an issue with keydown events not opening or closing the component
- Search defaults - change default header search URL to use nhs.uk search

## 3.0.1 - 8 November 2019

:wrench: **Fixes**

- Focus states - following the focus styles changes, we've fixed an issue with the header navigation link styling

## 3.0.0 - 7 November 2019

:boom: **Breaking changes**

- Non-text colour contrast for WCAG 2.1 ([Issue 473](https://github.com/nhsuk/nhsuk-frontend/issues/473)). Our focus states now meet the new WCAG 2.1 level AA requirements.

  If you are using Sass and have created new components, you will need to migrate to the new accessible focus states.

  ### Mixins that have been removed

  The Sass mixins `nhsuk-focusable`, `nhsuk-focusable-fill` or `nhsuk-link-style-focus` have been removed. You can use the `nhsuk-focused-text` mixin instead.

  Include the `nhsuk-focused-text` mixin inside your component's `:focus` selector. For example:

  ```scss
  .app-component:focus {
    @include nhsuk-focused-text;
  }
  ```

  ### Colour variables that have been removed

  Some colour variables have also been removed. You can use the suggested replacement if you were using them in components that have been extended or created.

  <details>
    <summary>View the colour variables that have been replaced</summary>

  | Colour variable removed  | Suggested replacement |
  | ------------- | ------------- |
  | $color_tint_nhsuk-warm-yellow-30  | $color_nhsuk-warm-yellow  |
  | $color_tint_nhsuk-warm-yellow-10  | $color_nhsuk-warm-yellow  |
  | $nhsuk-link-focus-color | $nhsuk-focus-text-color |
  | $nhsuk-link-hover-background-color | $nhsuk-focus-color |
  | $nhsuk-link-focus-background-color | $nhsuk-focus-color |
  | $nhsuk-link-active-background-color | $nhsuk-focus-color |
  | $nhsuk-button-text-colour | $nhsuk-button-text-color |
  | $nhsuk-button-hover-colour | $nhsuk-button-hover-color |
  | $nhsuk-reverse-button-text-colour | $nhsuk-reverse-button-text-color |
  | $nhsuk-button-shadow-colour | $nhsuk-button-shadow-color |
  | $nhsuk-secondary-button-colour | $nhsuk-secondary-button-color |
  | $nhsuk-secondary-button-hover-colour | $nhsuk-secondary-button-hover-color |
  | $nhsuk-secondary-button-shadow-colour | $nhsuk-secondary-button-shadow-color |
  | $nhsuk-reverse-button-colour | $nhsuk-reverse-button-color |
  | $nhsuk-reverse-button-hover-colour | $nhsuk-reverse-button-hover-color |
  | $nhsuk-button-colour | $nhsuk-button-color |
  | $nhsuk-button-hover-colour | $nhsuk-button-hover-color |
  | $nhsuk-secondary-button-colour | $nhsuk-secondary-button-color |
  | $nhsuk-secondary-button-hover-colour | $nhsuk-secondary-button-hover-color |
  | $nhsuk-secondary-button-shadow-colour | $nhsuk-secondary-button-shadow-color |
  | $nhsuk-reverse-button-colour | $nhsuk-reverse-button-color |
  | $nhsuk-reverse-button-hover-colour | $nhsuk-reverse-button-hover-color |
  | $nhsuk-reverse-button-shadow-colour | $nhsuk-reverse-button-shadow-color |
  | $nhsuk-focus-colour | $nhsuk-focus-color |
  | $nhsuk-focus-text-colour | $nhsuk-focus-text-color |
  | $nhsuk-button-shadow-colour | $nhsuk-button-shadow-color |
  </details>

  <hr>

:boom: **Breaking changes**

- Deprecation of the [Feedback banner](https://github.com/nhsuk/nhsuk-service-manual-backlog/issues/151) and [Emergency alert](https://github.com/nhsuk/nhsuk-service-manual-backlog/issues/149) components.

   If you are using Sass and JavaScript (ES6) imports, you will need to remove the imports for these components. You will also no longer be able to use the Nunjucks macros.

  **Sass**

  If you are importing component styles individually, you will need to remove the imports for the emergency alert and feedback banner:

  ```scss
  @import 'node_modules/nhsuk-frontend/packages/components/emergency-alert/emergency-alert';
  ```
  ```scss
  @import 'node_modules/nhsuk-frontend/packages/components/feedback-banner/feedback-banner';
  ```

  If you import all the component styles with `@import 'node_modules/nhsuk-frontend/packages/core/all';`, you don't need to update your Sass imports.

  **JavaScript**

  If you are importing component JavaScript with ES6 imports, you will need to remove the imports and initialisation for the feedback banner:

  ```js
  import nhsuk_feedbackBanner from 'node_modules/nhsuk-frontend/packages/components/feedback-banner/feedback-banner';
  ```
  ```js
  nhsuk_feedbackBanner(3000);
  ```

  <hr>

:boom: **Breaking changes**

- Refactor component JavaScript to make it more robust and use the latest ES6 coding standards ([Issue 425](https://github.com/nhsuk/nhsuk-frontend/issues/425)) ([Issue 450](https://github.com/nhsuk/nhsuk-frontend/issues/450))

  **JavaScript**

  If you are importing component JavaScript with ES6 imports, you will need to update the imports to:

  ```js
  // Components
  import Header from './components/header/header';
  import SkipLink from './components/skip-link/skip-link';
  import Details from './components/details/details';

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    Details();
    Header();
    SkipLink();
  });
  ```

  If you are already importing JavaScript with these export names, you can change the default export name.

:new: **New features**

- Organisational logos - the Header component now supports organisational logos. The organisational logo can be SVG code, with the organisation name and descriptor being editable through code, or a static PNG asset. You can also change the colour of the header and navigation menu from blue (default) to white ([Issue 446](https://github.com/nhsuk/nhsuk-frontend/issues/446)).

  **SVG logo**

  [Preview the header organisational component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org.html)

  Organisation names can be edited as text in the `nhsuk-organisation-name` span element. 
  Longer organisation names can be split onto multiple lines with `nhsuk-organisation-name-split` span. (The NHS England brand guidelines explain when this must be done.)
  The organisation descriptor can be used with the `nhsuk-organisation-descriptor` class name span.

  See [NHS England brand guidelines - Organisational logos](https://www.england.nhs.uk/nhsidentity/identity-guidelines/organisational-logos/) for more information on organisational logos.

  **PNG logo**

  You can also use a static asset, such as a PNG image.

  ```
  <a class="nhsuk-header__link" href="/" aria-label="Anytown Anyplace Anywhere NHS Foundation Trust homepage">
    <img class="nhsuk-org-logo" src="/path-to-assets/logo.png" alt="">
  </a>
  ```

  **Colour variants**

  [Preview the header organisational with white header component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org-white.html)

  [Preview the header organisational with white header and navigation component](https://nhsuk.github.io/nhsuk-frontend/components/header/header-org-white-nav.html)

:wrench: **Fixes**

- Images - Add `size` and `srcset` attributes to the images component for responsive loading of images. ([Issue 422](https://github.com/nhsuk/nhsuk-frontend/issues/422))
- Jaws/NVDA not reading fieldset heading - removing old `overflow: hidden` hack for hint text in legend ([Issue 534](https://github.com/nhsuk/nhsuk-frontend/issues/534))
- Fallback font - Fix fallback to be Arial by removing Helvetica.
- Fieldset legend - Fix bottom margin of fieldset legend heading modifiers to make spacing consistent.
- Hero - Prevent text breaking out of box on smaller screen sizes ([Issue 432](https://github.com/nhsuk/nhsuk-frontend/issues/432))
- Table - Update table cell padding to align content
- Header search autocomplete - Use the latest version of GOV.UK accessible autocomplete ([Issue 538](https://github.com/nhsuk/nhsuk-frontend/issues/538))

## 2.3.2 - 30 September 2019

:wrench: **Fixes**

- Header search - Fix javascript error when header search autocomplete is not present on the page ([Issue 531](https://github.com/nhsuk/nhsuk-frontend/issues/531)), add linting to all component JavaScript files, exclude linting from details polyfill, fix linting errors in autocomplete JavaScript, remove unnecessary JavaScript and CSS from autocomplete.

## 2.3.1 - 10 September 2019

:wrench: **Fixes**

- Details (Expander variant) - Fix an issue on Microsoft Edge with the sizing of the +/- icons overlapping the title of the Expander. ([Issue 508](https://github.com/nhsuk/nhsuk-frontend/issues/508))
- Footer - Added a new parameter to the nunjucks template to override the default copyright notice. ([Issue 485](https://github.com/nhsuk/nhsuk-frontend/issues/485))
- Visually hidden mixin - Fix margin issue which causes text to be read in the wrong order on VoiceOver
- Header search - Fix issue with the search dropdown moving down the page when you scroll ([Issue 484](https://github.com/nhsuk/nhsuk-frontend/issues/484)) and handle the enter keydown event to perform search ([Issue 522](https://github.com/nhsuk/nhsuk-frontend/issues/522))

## 2.3.0 - 23 July 2019

:new: **New features**

- Lede text - Lede text styling for use after the `<h1>` element, often used as intro text for the page immediately following the page header. You can see an example of Lede text on the [NHS website Live Well page](https://www.nhs.uk/live-well/), you can find the HTML code for Lede text in the [Typography section in the README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core#lede-text). ([Issue 106](https://github.com/nhsuk/nhsuk-service-manual-backlog/issues/106))

- Secondary text colour utility class - a new utility class to be able to use the secondary text colour within elements (`$nhsuk-secondary-text-color` - `#425563`) You can find the HTML code for secondary text colour utility class in the [Utilities section in the README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core#secondary-text-colour) ([Issue 465](https://github.com/nhsuk/nhsuk-frontend/issues/465))

:wrench: **Fixes**

- Care card (immediate) - Fix colour contrast issue when using the Details component within the Care card (immediate) ([Issue 475](https://github.com/nhsuk/nhsuk-frontend/issues/475))

- Open Graph image and meta data - use the latest Open Graph image and meta data from the NHS website. You can find this asset in the `packages/assets/logos` directory and the recommended meta data for Open Graph cards in the [Installing using compiled files - HTML template](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-compiled.md#html-template)

- Updated details.scss, radios.scss and checkboxes.scss components to remove &s from the middle of selectors and added new selectors that don't use the &s.

- Details component - Additional top padding for a h2 / nhsuk-heading-l which is placed after the details component. [Issue 486](https://github.com/nhsuk/nhsuk-frontend/issues/486)

## 2.2.0 - 24 June 2019

:new: **New features**

- Footer - A variant for footer links to be in lists in 3 columns, which can be used when there are more than just a few links. You can find the markup and example in the [Footer component README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components/footer/README.md#footer-with-list-columns) [(Issue 168)](https://github.com/nhsuk/nhsuk-frontend/issues/168)

- Favicon - The favicon design has changed and the favicon asset files have been updated in the `packages/assets/favicons` directory. The file names have stayed the same - but there are also some additional recommended favicon metadata tags for different devices. You can find a list of the recommended favicons to use in the [Installing with npm - importing assets documentation](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-with-npm.md#importing-assets-optional) and the [Installing using compiled files - HTML template](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-compiled.md#html-template). ([Issue 447](https://github.com/nhsuk/nhsuk-frontend/issues/447))

:wrench: **Fixes**

- Remove light font version - The light version of the Frutiger font has been removed as it was only been used in one place. The SASS `$nhsuk-font-light` variable has been remapped to use the `$nhsuk-font-normal` value as a defensive measure for now until it is decided to remove the `$nhsuk-font-light` variable completely. ([PR 460](https://github.com/nhsuk/nhsuk-frontend/pull/460))

- Expander group component - Fixed expander group spacing issues when used with components with no top margin ([Issue 439](https://github.com/nhsuk/nhsuk-frontend/issues/439))

- Update dependencies to their latest versions - this fixes a common security issue within the node-sass package. See https://github.com/sass/node-sass/issues/2625 for more details
- Search autocomplete - Fixed the query parameter on submit. [(Issue 459)](https://github.com/nhsuk/nhsuk-frontend/issues/459) - Also added two new parameters to the nunjucks template to make it more versatile. [(Issue 458)
  ](https://github.com/nhsuk/nhsuk-frontend/issues/458)

- Fixed `nhsuk-u-reading-width` utility class - the measurement has been adjusted to work with our base font size (16px) ([Issue 462](https://github.com/nhsuk/nhsuk-frontend/issues/462))

## 2.1.0 - 8 April 2019

:new: **New features**

- Hero component - removed background image and arrow and tidied up area around the hero with image and content when in Windows high contrast mode. ([PR 435](https://github.com/nhsuk/nhsuk-frontend/pull/435))

- Add transparent 1px border around promos which appears as a solid border when in Windows high contrast mode. ([PR 433](https://github.com/nhsuk/nhsuk-frontend/pull/433))

- Fluid width container - Extend the page layout to include a fluid-width container, which spans the entire width of the viewport.
  Use `.nhsuk-width-container-fluid` for a full width container. Documentation and an example of the fluid-width container can be found on the Layout page in the NHS digital service manual.
  ([Issue 416](https://github.com/nhsuk/nhsuk-frontend/issues/416))

- Prefix error messages with a visually hidden "Error:", to make it clearer to
  users of assistive technologies.

- Add example and code snippets for a Button as a link and remove the multiple examples for the disabled Button. The Button as a link includes the attribute `draggable="false"` to stop links that are styled as button from being dragged.

- Enable `autocomplete` attributes for input components. The `autocomplete` attribute can now be enabled on input, date input and textarea components using the component macros parameters.

  This was already possible to do with the `attributes` option but this change highlights the new WCAG 2.1 success criteria [Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html) which "is to ensure that the purpose of a form input collecting information about the user can be programmatically determined, so that user agents can extract and present this purpose to users using different modalities".

  See [Autofilling form controls: the autocomplete attribute](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for the full list of attributes that can be used.

- Enable `pattern` attribute for input component.

  You can now set the `pattern` attribute on input fields using the component macros:

  ```
  {{ input({
    "label": {
      "text": "Pattern example"
    },
    "id": "input-with-pattern",
    "name": "pattern-example",
    "pattern": "[0-9]*"
  }) }}
  ```

- Example of social media open graph cards for Twitter and Facebook

  Examples for [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/summary.html) and [Facebook](https://developers.facebook.com/docs/sharing/webmasters/) have been added to the GitHub pages layout file and also to the [HTML page template](/docs/installation/installing-compiled.md#html-template).

  The open graph default image has also been added to the `assets/logos` folder of the package.

:wrench: **Fixes**

- Reorder the asset `preconnect` and remove unneeded `dns-prefetch` ([Issue 434](https://github.com/nhsuk/nhsuk-frontend/issues/434))

- Header search icon padding has been altered due to the icon not being central for the desktop breakpoint.

## 2.0.0 - 11 March 2019

:boom: **Breaking changes**

- Hero component - Refactored hero component to not overlap with the header when zooming in / increasing the font size massively. There have been minor HTML changes so please update your code if you are using this component.([PR 411](https://github.com/nhsuk/nhsuk-frontend/pull/411)), ([Issue 400](https://github.com/nhsuk/nhsuk-frontend/issues/400))

:new: **New features**

- Summary list component - Use the summary list to summarise information, for example, a user’s responses at the end of a form.

  If you are importing all styles with `@import 'node_modules/nhsuk-frontend/packages/nhsuk';` you will automatically have access to the new component when you update. Alternatively if you are importing each of the individual components separately you will need to import the component with `@import 'node_modules/nhsuk-frontend/packages/components/summary-list/summary-list';`

  ([Issue 384](https://github.com/nhsuk/nhsuk-frontend/issues/384))

:wrench: **Fixes**

- Button component - A fix for the :focus state to display a 4px yellow border. ([Issue 406](https://github.com/nhsuk/nhsuk-frontend/issues/406))

- JavaScript variable scope - Globally scoped variables were causing issues with JavaScript frameworks such as Angular, so they have been moved to be locally scoped within functions. However, this could be improved as we have to duplicate variables between the multiple functions, so its likely this is a temporary fix before refactoring our JavaScript to be class based. ([PR 402](https://github.com/nhsuk/nhsuk-frontend/pull/402)), ([Issue 398](https://github.com/nhsuk/nhsuk-frontend/issues/398)).

  The JavaScript files will update automatically, when you update the nhsuk-frontend version and your application will work as normal.

## 1.0.1 - 20 February 2019

:wrench: **Fixes**

- Panel component - A fix for the panel to go full width of the grid item, rather than just the width of the content. ([Issue 395](https://github.com/nhsuk/nhsuk-frontend/issues/395))

:new: **New features**

- Promo component - Updated the Nunjucks macro and css to allow any level of heading for the promo heading rather than being hardcoded to a `<h3>` ([PR 392](https://github.com/nhsuk/nhsuk-frontend/pull/392))

## 1.0.0 - 5 February 2019

:tada: **Official release of the NHS.UK frontend**

- v1.0.0 of the NHS.UK frontend library!

:wrench: **Fixes**

- Review date component - Removed the `<time>` markup around the date because it doesn't have a `datetime` attribute (which can't be automatically generated) and also we can't guarantee that the content will be a valid date/time string ([PR 381](https://github.com/nhsuk/nhsuk-frontend/pull/381))

- Header component - Update of the Nunjucks template and documentation ([PR 380](https://github.com/nhsuk/nhsuk-frontend/pull/380))

## 0.9.1 (Prerelease) - 4 February 2019

:wrench: **Fixes**

- Header, hero and breadcrumbs - IE8 fixes to make the header and hero components display better, and hidden a back link (used in mobile view) in the breadcrumbs component ([PR 376](https://github.com/nhsuk/nhsuk-frontend/pull/376))

## 0.9.0 (Prerelease) - 31 January 2019

:new: **New features**

- Emergency alert, feedback banner, footer, header, hero component - Add options for extra classes and attributes in the Nunjucks macro. ([PR 361](https://github.com/nhsuk/nhsuk-frontend/pull/361))

:wrench: **Fixes**

- Footer text amend - Uncapitalised copyright message in footer - 'copyright' rather than 'Copyright' ([PR 360](https://github.com/nhsuk/nhsuk-frontend/pull/360))

## 0.8.0 (Prerelease) - 17 January 2019

:boom: **Breaking changes**

- Header - The autocomplete has been rewritten to remove the dependency on jQuery and now uses [GOV.UK's accessible autocomplete component](https://github.com/alphagov/accessible-autocomplete). You will need to do an `npm install` to update your packages and update the header HTML accordingly. ([PR 342](https://github.com/nhsuk/nhsuk-frontend/pull/342))

## 0.7.0 (Prerelease) - Jan 2, 2019

:new: **New features**

- Button component - Add option for button to be also an `<a>` or `<input>` element. ([PR 324](https://github.com/nhsuk/nhsuk-frontend/pull/324))

:wrench: **Fixes**

- Project structure - move website pages out of the `/docs` folder and into `/app` along with other general project clean up ([PR 324](https://github.com/nhsuk/nhsuk-frontend/pull/321))

## 0.6.0 (Prerelease) - 18 December 2018

:boom: **Breaking changes**

- npm JavaScript file path - The `nhsuk.min.js` file has been moved from `packages/` into `dist/` if you are referencing
  the compiled JavaScript file from the `packages/` folder please update your projects.

- Footer no longer includes a logo and the nunjucks macro arguments have been updated - if you are using the footer nunjucks
  macro then you need to update it. ([PR 300](https://github.com/nhsuk/nhsuk-frontend/pull/300))

:new: **New features**

- ES6 JavaScript modules - NHS.UK frontend JavaScript is now written in ES6 format, meaning you can import individual components
  that you require (if you are using a transpiler such as Babel). ([PR 258](https://github.com/nhsuk/nhsuk-frontend/pull/258))

See more about using ES6 modules in your project in the [installing with npm - importing Javascript documentation](/docs/installation/installing-with-npm.md#option-2-import-javascript-using-modules).

## 0.5.3 (Prerelease) - 13 December 2018

:new: **New features**

- Header - Add 'aria-label' Nunjucks argument so it can be overridden ([PR 297](https://github.com/nhsuk/nhsuk-frontend/pull/297))

## 0.5.2 (Prerelease) - 12 December 2018

:wrench: **Fixes**

- Address styling - Add generic styling for the `<address>` element ([PR 295](https://github.com/nhsuk/nhsuk-frontend/pull/295))

- Focus styles - Add focus styles on links when in High Contrast Mode in Windows to make it easier to distinguish where you are. ([PR 294](https://github.com/nhsuk/nhsuk-frontend/pull/294))

## 0.5.1 (Prerelease) - 11 December 2018

:wrench: **Fixes**

- Feedback banner - Fix an issue with the JavaScript reporting errors within the console log
  when scrolling down the page if the feedback banner did not exist on the page. ([PR 293](https://github.com/nhsuk/nhsuk-frontend/pull/293))

- Details - Add the missing component JavaScript to the `nhsuk.min.js` bundle. ([PR 285](https://github.com/nhsuk/nhsuk-frontend/pull/285))

## 0.5.0 (Prerelease) - 7 December 2018

:boom: **Breaking changes**

- Utility classes - Utility classes should be prefixed with `nhsuk-u-` rather than `nhsuk-!-`. ([PR 282](https://github.com/nhsuk/nhsuk-frontend/pull/282))

  If you are using any utility classes in your HTML, such as spacing, width or typography overrides, you need to update your HTML classes from
  `nhsuk-!-` to `nhsuk-u-`.

  You can find out more about utility class usage in the [utility class documentation](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core#utilities).

:wrench: **Fixes**

- Footer - Add the ability to change the link of the NHS logo within the nunjucks macro with `homeHref` argument. Also have the logo show by default with the ability to hide it using the `showLogo` argument. ([PR 278](https://github.com/nhsuk/nhsuk-frontend/pull/278))

## 0.4.0 (Prerelease) - 3 December 2018

:boom: **Breaking changes**

- Breadcrumb - Updated nunjucks macro so now you do not need duplicate entries for it to work ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

  Use the latest [Breadcrumb nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#nunjucks-macro) and [Breadcrumb HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#html-markup) in your app.

- Care card - Change the way triangle is generated in care cards for accessiblity purposes ([PR 269](https://github.com/nhsuk/nhsuk-frontend/pull/269))

  Use the latest [Care card HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card#quick-start-examples) in your app.

:wrench: **Fixes**

- Header - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

- Footer - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 272](https://github.com/nhsuk/nhsuk-frontend/pull/272))

## 0.3.0 (Prerelease) - 3 December 2018

:boom: **Breaking changes**

- Footer - Nunjucks macro arguments no longer contains `secondaryLinks` only `primaryLinks` ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

  Use the latest [Footer nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#nunjucks-macro) and [Footer HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#html-markup) in your app.

- List panel - Put each list panel in a list item ([PR 262](https://github.com/nhsuk/nhsuk-frontend/pull/262))

  Use the latest [List panel nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#nunjucks-macro) and [List panel HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#html-markup)

- Pagination - Update pagination markup and styling ([PR 263](https://github.com/nhsuk/nhsuk-frontend/pull/263))

  Use the latest [Pagination nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#nunjucks-macro) and [Pagination HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#html-markup)

:new: **New features**

- Form elements - All form elements have now been added to NHS.UK frontend. Including a new transactional header and footer. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

- Footer - The footer has had a visual redesign. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

## 0.2.1 (Prerelease) - 27 November 2018

:wrench: **Fixes**

- Header &amp; Footer - Remove NHS logo SVG nunjucks include ([PR 256](https://github.com/nhsuk/nhsuk-frontend/pull/256))

## 0.2.0 (Prerelease) - 27 November 2018

:boom: **Breaking changes**

- Breadcrumb - Refactor breadcrumb SVG icons to background images. ([PR 246](https://github.com/nhsuk/nhsuk-frontend/pull/246))

  Use the latest [Breadcrumb HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#html-markup) in your app.

- Care card - Rename care cards to non-urgent, urgent and immediate. ([PR 252](https://github.com/nhsuk/nhsuk-frontend/pull/252))

  Use the latest [Care card HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card#quick-start-examples) in your app.

- Do &amp; don't list - Rename check list to tick, update Nunjucks parameters. ([PR 248](https://github.com/nhsuk/nhsuk-frontend/pull/248))

  Use the latest [Do & don't list HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list#html-markup) in your app.

:wrench: **Fixes**

- Action link - Add argument to the nunjucks macro allow action link to open in new window ([PR 245](https://github.com/nhsuk/nhsuk-frontend/pull/245))
- Contents list - Fix MacOS VoiceOver issue for accessibility ([PR 245](https://github.com/nhsuk/nhsuk-frontend/pull/245))

## 0.1.6 (Prerelease) - 22 November 2018

:wrench: **Fixes**

- Release 0.1.5 was missing the `nhsuk.min.js` within the packages folder for npm. It is now included.

## 0.1.5 (Prerelease) - 22 November 2018

:wrench: **Fixes**

- Update skip link documentation, template and js ([PR 204](https://github.com/nhsuk/nhsuk-frontend/pull/204))
- Fixes rogue markup and helps the page validate ([PR 216](https://github.com/nhsuk/nhsuk-frontend/pull/216))
- List panel fixes ([PR 227](https://github.com/nhsuk/nhsuk-frontend/pull/227))
- Add underline when focus on main navigation items ([PR 233](https://github.com/nhsuk/nhsuk-frontend/pull/233))
- Tidy up SVG icons ([PR 235](https://github.com/nhsuk/nhsuk-frontend/pull/235))
- Expander SVG background image base64 ([PR 236](https://github.com/nhsuk/nhsuk-frontend/pull/236))
- A-Z navigation fixes ([PR 240](https://github.com/nhsuk/nhsuk-frontend/pull/240))

## 0.1.4 (Prerelease) - 13 November 2018

:tada: **Initial release of the NHS.UK frontend**

- This release includes all the content page components and the first
  installable npm package.
