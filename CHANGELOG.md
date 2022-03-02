# NHS.UK frontend Changelog

## 6.1.0 - 12 January 2022

:new: **New features**

- Added utility classes `nhsuk-u-text-align-left`, `nhsuk-u-text-align-centre` and `nhsuk-u-text-align-right`

:wrench: **Fixes**
- Updated dependancies in `package.json` & generated new `package-lock.json`
- Changed spelling mistake `charitiest` to `charities`
- Fixed card component example format

## 6.0.1 - 29 November 2021

:wrench: **Fixes**

- Added missing utility classes `nhsuk-u-display-block`, `nhsuk-u-display-inline-block`, `nhsuk-u-float-left` and `nhsuk-u-float-right` 

## 6.0.0 - 29 November 2021

:boom: **Breaking changes**

- Care card refactor

Care card is now a variant of the card component.

We've reworked the care cards component as a pattern to "Help users decide when and where to get care".  We've done this for 2 reasons.
1. The care cards component was designed to deal with a specific problem in the context of health information. But we've seen teams use care cards in other ways and contexts with mixed results. By rewriting care cards as a pattern, we hope it's clearer what problem they're designed to solve.
2. We're tidying up the frontend, reducing duplication in the code, making it easier to maintain and improving its performance. We're taking out things which aren't components in their own right. Care cards are a variation of the card component, used as a solution to a specific need, so we're taking them out of the frontend in a breaking change release today.
3. Type 'immmediate' has changed to 'emergency' & 'primary' has changed to 'non-urgent'. (Help users decide when and where to get care (care cards))[https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care]

- Remove Nav A-Z component & List panel component

The Nav A-Z component & List Panel component are two components in the NHS.UK frontend that did not have guidance in the service manual. 

### Nav A-Z

#### Old code:

```
<nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" aria-label="A to Z Navigation">
  <ol class="nhsuk-nav-a-z__list" role="list">
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#A">A</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <span class="nhsuk-nav-a-z__link--disabled">B</span>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#C">C</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#D">D</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#E">E</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#F">F</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#G">G</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#H">H</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#I">I</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#J">J</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#K">K</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#L">L</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#M">M</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#N">N</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#O">O</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#P">P</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Q">Q</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#R">R</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#S">S</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#T">T</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#U">U</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#V">V</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#W">W</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#X">X</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Y">Y</a>
    </li>
    <li class="nhsuk-nav-a-z__item">
      <a class="nhsuk-nav-a-z__link" href="#Z">Z</a>
    </li>
  </ol>
</nav>
```

#### New code:

The nav A-Z component can be recreated using `nhsuk-list`.

```
<nav class="nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4" id="nhsuk-nav-a-z" role="navigation" aria-label="A to Z Navigation">
  <ol class="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0" role="list">
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#A">A</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <span class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block nhsuk-u-secondary-text-color">B</span>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#C">C</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#D">D</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#E">E</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#F">F</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#G">G</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#H">H</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#I">I</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#J">J</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#K">K</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#L">L</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#M">M</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#N">N</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#O">O</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#P">P</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#Q">Q</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#R">R</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#S">S</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#T">T</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#U">U</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#V">V</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#W">W</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#X">X</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#Y">Y</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1">
      <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#Z">Z</a>
    </li>
  </ol>
</nav>
```

The new code uses a new utility class:

```
.nhsuk-u-float-left {
  float: left !important;
}
```

All the other code already exists and the spacing utility classes can be customised to fit into your design.

### List panel

#### Old code:

```
<ol class="nhsuk-list">
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="A">A</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abdominal-aortic-aneurysm/">AAA</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abdominal-aortic-aneurysm/">Abdominal aortic aneurysm</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/abscess/">Abscess</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="19" height="19">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="B">B</h2>
      <div class="nhsuk-list-panel__box nhsuk-list-panel__box--with-label">
        <p class="nhsuk-list-panel--results-items__no-results">There are currently no conditions listed</p>
      </div>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="19" height="19">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="C">C</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/chest-pain/">Chest pain</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/cold-sores/">Cold sore</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="19" height="19">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
  <li>
    <div class="nhsuk-list-panel">
      <h2 class="nhsuk-list-panel__label" id="D">D</h2>
      <ul class="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/dandruff/">Dandruff</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/dementia/">Dementia</a>
        </li>
        <li class="nhsuk-list-panel__item">
          <a class="nhsuk-list-panel__link" href="/conditions/toothache/">Dental pain</a>
        </li>
      </ul>
      <div class="nhsuk-back-to-top">
        <a class="nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
          <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="19" height="19">
            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
          </svg>
          Back to top
        </a>
      </div>
    </div>
  </li>
</ol>
```

The list panel component can be recreated by adding `nhsuk-list--border` to the [list styles in typography](https://service-manual.nhs.uk/design-system/styles/typography#lists)

#### New code:

```
<ul class="nhsuk-list nhsuk-list--border">
  <li><a href="#">List item as a link</a></li>
  <li><a href="#">List item as a link</a></li>
  <li><a href="#">List item as a link</a></li>
</ul>
```

## 5.2.1 - 28 October 2021

:wrench: **Fixes**

- Tidying and removing of duplicate styles in header SCSS ([Issue 711](https://github.com/nhsuk/nhsuk-frontend/issues/711)), ([PR 779](https://github.com/nhsuk/nhsuk-frontend/pull/779)).
- Removal of unnecessary static `aria-label="Open menu"` on the header menu button. Included more descriptive `aria-expanded="false"` on page load.
- Fixing misaligned search magnifiying glass in header on landscape iOS devices ([Issue 781](https://github.com/nhsuk/nhsuk-frontend/issues/781), [PR 782](https://github.com/nhsuk/nhsuk-frontend/pull/782))

## 5.2.0 - 22 September 2021

:new: **New features**

- Add "None of these" JavaScript behaviour to checkboxes - allowing all checkboxes in a group to be automatically unchecked when the "None of the above" option is checked ([PR 756](https://github.com/nhsuk/nhsuk-frontend/pull/756))

:wrench: **Fixes**

- Transactional header defaults to wrapping underneath the logo without the need for a modifier ([Issue 720](https://github.com/nhsuk/nhsuk-frontend/issues/720)).
- Add width, height, stroke and fill attributes to inline SVGs in order that they render at appropriate sizes when viewed with disabled/broken/missing CSS  ([PR 761](https://github.com/nhsuk/nhsuk-frontend/pull/761)).
- Search input focus state style (desktop) – fix border width ([Issue 768](https://github.com/nhsuk/nhsuk-frontend/issues/768), [PR 771](https://github.com/nhsuk/nhsuk-frontend/pull/771)).
- Stop polyfilling details elements in browsers that support it natively since the polyfill was causing issues with JAWS/Firefox ([Issue 754](https://github.com/nhsuk/nhsuk-frontend/issues/754), [PR 773](https://github.com/nhsuk/nhsuk-frontend/pull/773))

## 5.1.0 - 14 May 2021

:new: **New features**

- Ensure Error Summary receives keyboard focus when rendered ([Issue 702](https://github.com/nhsuk/nhsuk-frontend/issues/702)).
- Enhance Error Summary link focus behaviour such that the nearest label/legend remains in view when scrolling ([PR 725](https://github.com/nhsuk/nhsuk-frontend/pull/725)).

  If you are importing component JavaScript with ES6 imports, you will need to update your imports to include the Error Summary JavaScript:

  ```javascript
  // Components
  import ErrorSummary from '../node_modules/nhsuk-frontend/packages/components/error-summary/error-summary';

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    ErrorSummary();
  });
  ```

  Note: You may need to change the path to `node_modules` depending on your project structure.
- Added `$nhsuk-fonts-path` and `$nhsuk-include-font-face` variables to allow for self-hosted fonts or
disabling font altogether

  The default `@font-face`, "Frutiger", is loaded from `https://assets.nhs.uk`. The host for the fonts can be
  overridden or disabled entirely.

  - `$nhsuk-fonts-path`: base URL to load fonts from (e.g. `/fonts/`; trailing slash required)
  - `$nhsuk-include-font-face`: set to false to disable the inclusion of the `@font-face` definition entirely

:wrench: **Fixes**

- Fix aXe accessibility warning on breadcrumb and expander components ([PR 718](https://github.com/nhsuk/nhsuk-frontend/pull/718))
- Changed SCSS linting package to stylelint from sass-lint, which is more extensible and actively maintained.

## 5.0.0 - 16 March 2021

:boom: **Breaking changes**

- Header, breadcrumb, button and hero - the CSS for IE 8 and 9 for these components have been removed. Therefore if you update to this version then the conditionals for the `<html>` element will have no effect so you should remove them. So instead of having something like this:

  ```
  <!--[if lt IE 9]><html class="ie8" lang="en"><![endif]--><!--[if IE 9]><html class="ie9" lang="en"><![endif]--><!--[if gt IE 9]><!--><html lang="en"><!--<![endif]-->
  ```

  You will only now need this:
  ```
  <html lang="en">
  ```

  You can also change the svg NHS logo html to remove the reference to the png which was to support older versions of IE, which is now no longer required.

  Previous code:
  ```
  <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" role="presentation" focusable="false" viewBox="0 0 40 16">
    <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
    <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
    <image src="https://assets.nhs.uk/images/nhs-logo.png" xlink:href=""></image>
  </svg>
  ```

  New code:
  ```
  <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16">
    <path class="nhsuk-logo__background" d="M0 0h40v16H0z"></path>
    <path class="nhsuk-logo__text" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"></path>
  </svg>
  ```

  As our list of supported browsers has changed we are now able to use more JavaScript APIs and properties without polyfilling or writing our own solutions. JavaScript has been refactored to remove IE8-10 JavaScript polyfills and utils.


- Footer - removed the Footer with list columns variant, the HTML class `nhsuk-footer__list--three-columns` and `list` Nunjucks parameter has been removed. The Footer will fallback to the regular footer on Desktop and stay the same on mobile. ([Issue 575](https://github.com/nhsuk/nhsuk-frontend/issues/575))

- Review date - the Review date component has been removed and refactored into a pattern on the NHS digital service manual - ([Reassure users that a page is up to date](https://service-manual.nhs.uk/design-system/patterns/reassure-users-that-a-page-is-up-to-date)).

  The Review date component styles can be achieved by using a number of existing modifier and utility classes so does not need to be a individual component. This also allows for more customisation (such as margin and padding)

  ```
  <p class="nhsuk-body-s nhsuk-u-margin-top-7 nhsuk-u-secondary-text-color">Updated: January 2020</p>
  ```

  You will need to remove the `nhsuk-review-date` component (and Nunjucks macro) from your application and move to the modifier and utility class based one.

- Header search autocomplete - the Header search autocomplete has been removed and extracted into a separate package. The search implementation in the library and service manual is very
NHS website specific and uses a third party supplier for the search results. ([Issue 568](https://github.com/nhsuk/nhsuk-frontend/issues/568))

:new: **New features**

- Updated browser and assistive technology support documentation - remove support for IE8-10.  Read the blog post ([Changing our testing requirements for Internet Explorer 8, 9 and 10](https://technology.blog.gov.uk/2018/06/26/changing-our-testing-requirements-for-internet-explorer-8-9-and-10/)) by GOV.UK for more information why we have done this now.
- add ability to not display the 'do not' prefix on list items that have the type 'cross' for the do and don't list component

:wrench: **Fixes**

- Removing support for IE8-10 and updating the NHS logo SVG html means the `xlink:href` is no longer an issue ([PR 657](https://github.com/nhsuk/nhsuk-frontend/pull/657), [PR 673](https://github.com/nhsuk/nhsuk-frontend/pull/673)). This also fixes the issue of not being able to select or focus on the NHS logo when using VoiceOver on iOS ([PR 631](https://github.com/nhsuk/nhsuk-frontend/pull/631))
- Fix Create release GitHub Action which wasn't publishing to NPM ([Issue 691](https://github.com/nhsuk/nhsuk-frontend/issues/691))
- Modifying the Card JavaScript to reference Card rather than the old Panel and adding Card to the NPM docs.
- Give the Action link icon sufficient contrast when used in the Care card immediate variant ([Issue 588](https://github.com/nhsuk/nhsuk-frontend/issues/588))
- Fix the insufficient colour contrast ratio for the Search placeholder text ([Issue 687](https://github.com/nhsuk/nhsuk-frontend/issues/687))
- Remove `max-width` from service header with a logo only ([PR 705](https://github.com/nhsuk/nhsuk-frontend/pull/705))
- Add a `max-width` to the service header with service name to accommodate longer service names ([Issue 708](https://github.com/nhsuk/nhsuk-frontend/issues/708))
- Setting IE to use display block for the responsive table on small resolutions ([Issue 712](https://github.com/nhsuk/nhsuk-frontend/issues/712))

## 4.1.0 - 21 January 2021

:new: **New features**

- Add `inputmode` and `spellcheck` options to the text input Nunjucks macro
- Change `type="number"` to `inputmode="numeric"` for the date input component
- Add a colon after the word Important on the warning callout component ([Issue 670](https://github.com/nhsuk/nhsuk-frontend/issues/653))

:wrench: **Fixes**

- Align items to the top in the Summary list component ([Issue 663](https://github.com/nhsuk/nhsuk-frontend/issues/663))
- Ensure the NHS logo SVG is a valid SVG file by adding `xlink` namespace to the markup ([PR 657](https://github.com/nhsuk/nhsuk-frontend/pull/657))
- Transactional header - changed service name link style to include an underline on hover ([Issue 653](https://github.com/nhsuk/nhsuk-frontend/issues/653))
- Switch from Travis CI to GitHub actions - Due to slow and inconsistent builds we have moved our CI to GitHub actions
- Android search suggestions bug - when selecting an option from the suggestions in Chrome the form didn't populate and submit, this is now fixed.
- Expander - Set width and height on expander SVG images to avoid squashed display in IE10 ([PR 668](https://github.com/nhsuk/nhsuk-frontend/pull/668))
- Vendor in Sass-MQ (PR [#601](https://github.com/nhsuk/nhsuk-frontend/pull/601))
- Update header focus styles to fix accessibility issue (PR [#684](https://github.com/nhsuk/nhsuk-frontend/pull/684))
- Remove the full stops from the card component examples ([Issue 669](https://github.com/nhsuk/nhsuk-frontend/issues/653))

## 4.0.0 - 26 October 2020

:boom: **Breaking changes**

- Tables - New responsive table component, when viewed on a desktop the table component will behave like any other table. However, when viewed on a mobile the table collapses into what appears to be a group list style component. ([Pull request 635](https://github.com/nhsuk/nhsuk-frontend/pull/635))

  If you are using the current responsive table class `nhsuk-table-responsive` you will need to rename the `nhsuk-table-responsive` class to `nhsuk-table-container`.

  [Preview the responsive table component](https://nhsuk.github.io/nhsuk-frontend/components/tables/responsive-table.html)

- Remove Panel and Promo components

  The panel and promo were two components in the NHS.UK frontend that did not have guidance in the service manual. They both also shared a lot of the same structure and design. This confused users of the design system, with people not knowing when and how to use the components.

  There was also an accessibility issue with the content of the promo component being all contained within a link (anchor tag) causing a difficult experience for screenreader users. We have fixed this issue and combined the two components into one new component, a card component.

  <details>
    <summary>If you are using a panel component</summary>

    You will need to replace the panel component with a card component.

    ### For Nunjucks macro

    You need to:
    - replace `{% from 'components/panel/macro.njk' import panel %}` with `{% from 'components/card/macro.njk' import card %}`
    - replace `{{ panel({` with `{{ card({`
    - replace `"html"` with the relevant arguments - for example: `"heading"` and `"descriptionHtml"`
    - declare the heading level size and heading sizes (with helper classes) because the default heading level is now 2 instead of 3

    For example:

    #### Old Nunjucks macro (Panel)

    ```
    {% from 'components/panel/macro.njk' import panel %}

    {{ panel({
      "html": "<h3>If you need help now, but it’s not an emergency</h3> <p>Go to <a href=\"#\">111.nhs.uk</a> or <a href=\"#\">call 111</a>.</p>"
    }) }}
    ```

    #### New Nunjucks macro (Card)

    ##### Changing the heading level

    ```
    {% from 'components/card/macro.njk' import card %}

    {{ card({
      "heading": "If you need help now, but it’s not an emergency",
      "headingLevel": "3",
      "descriptionHtml": "<p class=\"nhsuk-card__description\">Go to <a href=\"#\">111.nhs.uk</a> or <a href=\"#\">call 111</a>.</p>"
    }) }}
    ```

    ##### Changing the heading size

    ```
    {% from 'components/card/macro.njk' import card %}

    {{ card({
      "heading": "If you need help now, but it’s not an emergency",
      "headingClasses": "nhsuk-heading-m",
      "descriptionHtml": "<p class=\"nhsuk-card__description\">Go to <a href=\"#\">111.nhs.uk</a> or <a href=\"#\">call 111</a>.</p>"
    }) }}
    ```

    ### For HTML

    You need to:
    - replace all `nhsuk-panel` classes to `nhsuk-card`

    For example:

    #### Old HTML (Panel)

    ```
    <div class="nhsuk-panel nhsuk-panel--grey">
      <h3>If you need help now, but it’s not an emergency</h3>
      <p>Go to <a href="#">111.nhs.uk</a> or <a href="tel: 111">call 111</a>.</p>
    </div>
    ```

    #### New HTML (Card)

    ```
    <div class="nhsuk-card>
      <div class="nhsuk-card__content">
        <h3 class="nhsuk-card__heading">If you need help now, but it’s not an emergency</h3>
        <p>Go to <a href="#">111.nhs.uk</a> or <a href="#">call 111</a>.</p>
      </div>
    </div>
    ```
  </details>

  <details>
    <summary>If you are using a promo component</summary>

    You will need to replace the promo component with a card component.

    ### For Nunjucks macro

    You need to:
    - replace `{% from 'components/promo/macro.njk' import promo %}` with `{% from 'components/card/macro.njk' import card %}`
    - replace `{{ promo({` with `{{ card({`
    - declare the heading level size and heading sizes (with helper classes) because the default heading level is now 2 instead of 3

    For example:

    #### Old Nunjucks macro (Promo)

    ```
    {% from 'components/promo/macro.njk' import promo %}

    {{ promo({
      "href": "https://www.nhs.uk",
      "heading": "Save a life: give blood",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }}
    ```

    #### New Nunjucks macro (Card)

    ##### Changing the heading level

    ```
    {% from 'components/card/macro.njk' import card %}

    {{ card({
      "href": "https://www.nhs.uk",
      "heading": "Save a life: give blood",
      "headingLevel": "3",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }
    ```

    ##### Changing the heading size

    ```
    {% from 'components/card/macro.njk' import card %}

    {{ card({
      "href": "https://www.nhs.uk",
      "heading": "Save a life: give blood",
      "headingClasses": "nhsuk-heading-m",
      "description": "Please register today. Donating blood is easy, and saves lives."
    }) }
    ```

    ### For HTML

    You need to:
    - replace all `nhsuk-promo` classes to `nhsuk-card`
    - remove surrounding `<a class="nhsuk-promo__link-wrapper" href="#">` and add `<a class="nhsuk-card__link" href="#">` within `<h3 class="nhsuk-card__heading">`
    - add `nhsuk-card--clickable` class to make entire card clickable

    For example:

    #### Old HTML (Promo)

    ```
    <div class="nhsuk-promo">
      <a class="nhsuk-promo__link-wrapper" href="#">
        <img class="nhsuk-promo__img" src="https://assets.nhs.uk/prod/images/020720_PHE_Barrington_5426_TRL3_CL.2e16d0ba.fill-720x405.jpg" alt="">
        <div class="nhsuk-promo__content">
          <h3 class="nhsuk-promo__heading">Kickstart your health</h3>
          <p class="nhsuk-promo__description">It's never too late to get your health back on track. Eat well, move more and start losing weight with Better Health. Try our NHS weight loss plan to get you started.</p>
        </div>
      </a>
    </div>
    ```

    #### New HTML (Card)

    ```
    <div class="nhsuk-card nhsuk-card--clickable">
      <img class="nhsuk-card__img" src="https://assets.nhs.uk/prod/images/020720_PHE_Barrington_5426_TRL3_CL.2e16d0ba.fill-720x405.jpg" alt="">
      <div class="nhsuk-card__content">
        <h3 class="nhsuk-card__heading">
          <a class="nhsuk-card__link" href="#">Kickstart your health</a>
        </h3>
        <p class="nhsuk-card__description">It's never too late to get your health back on track. Eat well, move more and start losing weight with Better Health. Try our NHS weight loss plan to get you started.</p>
      </div>
    </div>
    ```
  </details>

  ([PR 627](https://github.com/nhsuk/nhsuk-frontend/pull/627))

:new: **New features**

- Add Card component

  Use a card instead of a panel or promo to provide users with a brief summary of content or a task, often with a link to more detail. Cards are frequently displayed alongside other cards to group related content or tasks.

  ([PR 627](https://github.com/nhsuk/nhsuk-frontend/pull/627))

- Add Tag component

  Use the tag component when it’s possible for something to have more than one status and it’s useful for the user to know about that status.

  ([PR 626](https://github.com/nhsuk/nhsuk-frontend/pull/626))

- Add `nhsuk-link--no-visited-state` mixin - for where it is not helpful to distinguish between visited and non-visited links.

- Custom search API endpoint – Improving the search experience it's now possible to define a custom API endpoint in the HTML. The JavaScript will check the window object to look for a new API reference, if nothing is found it will default to the standard NHS reference.

  Add the below code to a base HTML file or any pages that use search.

```HTML
    <script>
      window.NHSUK_SETTINGS = {};
      window.NHSUK_SETTINGS.SUGGESTIONS_TEST_HOST = "[CUSTOM API ENDPOINT]";
      window.NHSUK_SETTINGS.SEARCH_TEST_HOST = "[CUSTOM SEARCH PAGE URL]";
    </script>
```

:wrench: **Fixes**

- Hints - changed hints to be div instead of span to allow multi-line elements ([Issue 620](https://github.com/nhsuk/nhsuk-frontend/issues/620))
- Details - fix the left alignment of the details text and summary ([Issue 615](https://github.com/nhsuk/nhsuk-frontend/issues/615))
- Focus styling - Fixing issues with focus state on input and text area which caused resizing ([Issue 600](https://github.com/nhsuk/nhsuk-frontend/issues/600) and [Issue 613](https://github.com/nhsuk/nhsuk-frontend/issues/613))
- Fix styles for the `nhsuk-link-style-white`
- Fix breadcrumb link color when `:visited` and `:focus`
- Warning callout - update Nunjucks macro template so custom headings get prefixed with `<span class="nhsuk-u-visually-hidden">Important:</span>` to convey the importance of the message to screen reader users. ([PR 630](https://github.com/nhsuk/nhsuk-frontend/pull/630))
- Style updates to a few components so that they render properly on a range of quality monitors and devices found in use in the NHS.

  Including adding a 1px border to:
  - care cards (non-urgent and urgent)
  - do and don't list
  - expander
  - warning callout

## 3.1.0 - 24 April 2020

:new: **New features**

- Checkboxes with conditional content - add functionality to show and hide conditional content when checkbox is checked
- Radios with conditional content - add functionality to show and hide conditional content when radio is checked
- JS utils - add addClass, removeClass, getClasses and hasClass utils

  **Conditional and polyfill JavaScript**

  Add the following JavaScript to the top of the `<body>` section of your page template:

  ```
  document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
  ```

  If you are importing component JavaScript with ES6 imports, you will need to update your imports to include the JavaScript:

  ```javascript
  // Components
  import Header from '../node_modules/nhsuk-frontend/packages/components/header/header';
  import SkipLink from '../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link';
  import Details from '../node_modules/nhsuk-frontend/packages/components/details/details';
  import Radios from '../node_modules/nhsuk-frontend/packages/components/radios/radios';
  import Checkboxes from '../node_modules/nhsuk-frontend/packages/components/checkboxes/checkboxes';

  // Polyfills
  import '../node_modules/nhsuk-frontend/packages/polyfills';

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    Details();
    Header();
    SkipLink();
    Radios();
    Checkboxes();
  });
  ```

  Note: You may need to change the path to `node_modules` depending on your project structure.

:wrench: **Fixes**

- Tidy dependencies - Removed unnecessary JavaScript linting NPM packages
- JS utils - Fix toggleClass util which duplicated classes if there was no other class before it, more tests added
- Nunjucks documentation - describe items as arrays not objects ([Issue 604](https://github.com/nhsuk/nhsuk-frontend/issues/604))

## 3.0.4 - 24 March 2020

:wrench: **Fixes**

- Breadcrumb - fix the text colour on :focus:hover ([Issue 589](https://github.com/nhsuk/nhsuk-frontend/issues/589))
- Transactional Header - fix the text colour on :focus:hover for non visited links ([Issue 592](https://github.com/nhsuk/nhsuk-frontend/issues/592))
- Button - fix the text colour on :focus :visited states and remove the role="button" from button as a link example ([Issue 593](https://github.com/nhsuk/nhsuk-frontend/issues/593)) ([Issue 425](https://github.com/nhsuk/nhsuk-frontend/issues/425))

## 3.0.3 - 17 February 2020

:wrench: **Fixes**

- Expander - fix the Expander plus and minus icon sizing on IE11 ([Issue 564](https://github.com/nhsuk/nhsuk-frontend/issues/564))
- Button - fix the active state text colour for button as a link
- Back button - fix the text hover colour for visited links
- Breadcrumb - fix the text hover colour for visited links
- Pagination - fix the pagination arrow colour on active and visited links
- Header - remove random margin from the Menu button on Safari ([PR 581](https://github.com/nhsuk/nhsuk-frontend/pull/581))
- Care card - prevent additional padding on care card headings
- Header - use the latest version of the GOV.UK Accessible autocomplete which fixes a bug that prevented users from clicking on options in certain circumstances

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
