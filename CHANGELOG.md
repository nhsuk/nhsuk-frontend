# NHS.UK frontend Changelog

## Unreleased

### :boom: **Breaking changes**

#### Apply grid column widths from tablet (not desktop) width

We've updated our grid column styles to be applied at tablet width (641px and up).

Previously they were applied from desktop width (769px and up) making it difficult to cater for smaller screen sizes.

Please carefully review your pages. If necessary, different grid behaviour for the mobile and desktop breakpoints can be applied using new classes ending `-from-mobile` and `-from-desktop`.

For example, you can make a column three-quarters on tablet but reduce to two-thirds on desktop sized screens:

```patch
  <div class="nhsuk-grid-row">
-   <div class="nhsuk-grid-column-two-thirds">
+   <div class="nhsuk-grid-column-three-quarters nhsuk-grid-column-two-thirds-from-desktop">
      <!-- Component -->
    </div>
  </div>
```

##### Mobile width override classes

Grid column classes ending `-from-mobile` are applied at mobile width (320px) and above.

If you're using the following mobile width utility classes, you must:

- Replace `nhsuk-u-one-half` with `nhsuk-grid-column-one-half-from-mobile`
- Replace `nhsuk-u-one-third` with `nhsuk-grid-column-one-third-from-mobile`
- Replace `nhsuk-u-two-thirds` with `nhsuk-grid-column-two-thirds-from-mobile`
- Replace `nhsuk-u-one-quarter` with `nhsuk-grid-column-one-quarter-from-mobile`
- Replace `nhsuk-u-three-quarters` with `nhsuk-grid-column-three-quarters-from-mobile`.

##### Tablet width override classes

Grid column classes not ending `-from-mobile` or `-from-desktop` are applied at tablet width (641px) and above.

If you're using the following tablet width utility classes, you must:

- Replace `nhsuk-u-one-half-tablet` with `nhsuk-grid-column-one-half`
- Replace `nhsuk-u-one-third-tablet` with `nhsuk-grid-column-one-third`
- Replace `nhsuk-u-two-thirds-tablet` with `nhsuk-grid-column-two-thirds`
- Replace `nhsuk-u-one-quarter-tablet` with `nhsuk-grid-column-one-quarter`
- Replace `nhsuk-u-three-quarters-tablet` with `nhsuk-grid-column-three-quarters`

This change was introduced in [pull request #1296: Apply grid classes from tablet (not desktop)](https://github.com/nhsuk/nhsuk-frontend/pull/1296).

#### Remove global box sizing reset

We have removed the global `box-sizing` reset and added `box-sizing: border-box` only where necessary.

Please review any custom styles, especially those with defined widths, to make sure they have a correctly calculated box size.

This change was introduced in pull requests [#1633: Review global `box-sizing` usage](https://github.com/nhsuk/nhsuk-frontend/pull/1633), [#1711: Review global `box-sizing` usage for v11](https://github.com/nhsuk/nhsuk-frontend/pull/1711) and [#1651: Add `box-sizing: border-box` to width utility classes etc](https://github.com/nhsuk/nhsuk-frontend/pull/1651).

#### Update the HTML for error messages

We've updated the HTML for the error message component to use a `<p>` element instead of a `<span>` element, as this is more semantically correct.

If you're not using Nunjucks macros, swap the `<span class="nhsuk-error-message">` for a `<p class="nhsuk-error-message">`.

```patch
- <span class="nhsuk-error-message">
+ <p class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error:</span> Example error message
- </span>
+ </p>
```

This change was introduced in [pull request #1030: Update error messages to use paragraph tags instead of spans](https://github.com/nhsuk/nhsuk-frontend/pull/1030).

#### Update the HTML for the error summary

If you're not using the Nunjucks macros, you must improve the experience for screen reader users by making these changes to the error summary markup:

- Remove `aria-labelledby="error-summary-title"`, `role="alert"` and `tabindex="-1"` from the parent element (`nhsuk-error-summary`)
- Add a `div` wrapper around the contents of `nhsuk-error-summary` with the attribute `role="alert"`
- Remove `id="error-summary-title"` from the error summary `h2` (`nhsuk-error-summary__title`)

This will enable screen reader users to have a better, more coherent experience with the error summary. It will make sure users of JAWS 2022 or later will hear the entire contents of the error summary on page load and therefore have further context on why there is an error on the page they're on.

This change was introduced in [pull request #1036: Add breaking change entry for error summary screen reader improvements](https://github.com/nhsuk/nhsuk-frontend/pull/1036), after previously being recommended in [version 10.1.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v10.1.0).

#### Make `nhsuk-u-nowrap` apply to mobile and above

We've updated the `nhsuk-u-nowrap` utility class to be applied at mobile width (320px and up).

Previously the utility class did not apply to tablet sized screens (641px and up).

Please carefully review your pages. If necessary, different wrapping behaviour for the tablet and desktop breakpoints can be applied using new classes ending `-from-tablet` and `-from-desktop`.

To keep the same behaviour as before this change, use the `.nhsuk-u-nowrap .nhsuk-u-wrap-from-tablet` classes.

This was added in [pull request #1668: Add breakpoints to nowrap class](https://github.com/nhsuk/nhsuk-frontend/pull/1668).

## 10.2.2 - 4 December 2025

Note: This release was created from the `support/10.x` branch.

### :wrench: **Fixes**

- [#1731: Fix Nunjucks `describedBy` empty string handling](https://github.com/nhsuk/nhsuk-frontend/issues/1731)

## 10.2.1 - 2 December 2025

Note: This release was created from the `support/10.x` branch.

### :wrench: **Fixes**

- [#1726: Fix card modifier scope to allow nested cards](https://github.com/nhsuk/nhsuk-frontend/pull/1726)

## 10.2.0 - 1 December 2025

### :new: **New features**

#### Use the password input component to help users accessibly enter passwords

The [password input component](https://service-manual.nhs.uk/design-system/components/password-input) allows users to choose:

- whether their passwords are visible or not
- to enter their passwords in plain text

This helps users use longer and more complex passwords without needing to remember what they've already typed.

This was added in [pull request #1574: Uplift GOV.UK Frontend password input component](https://github.com/nhsuk/nhsuk-frontend/pull/1574).

#### Smaller versions of buttons

You can now use smaller versions of [buttons](https://service-manual.nhs.uk/design-system/components/buttons) by adding the `nhsuk-button--small` class.

This was added in [pull request #1643: Add small buttons and inline form groups](https://github.com/nhsuk/nhsuk-frontend/pull/1643).

#### Add inline buttons to text inputs and select menus

You can now add inline buttons to text inputs and select menus using the `formGroup.afterInput` Nunjucks options.

```njk
{{ input({
  formGroup: {
    afterInput: {
      html: button({
        text: "Search",
        classes: "nhsuk-button--small"
      })
    }
  }
}) }}
```

This was added in [pull request #1643: Add small buttons and inline form groups](https://github.com/nhsuk/nhsuk-frontend/pull/1643).

#### Updated Nunjucks macro options for nested items

For consistency with other components with nested items, we’ve added new Nunjucks macro options:

- Action link and skip link `html` option
- Checkboxes and radios item `classes` option
- Contents list item `html`, `classes` and `attributes` options
- Summary list action item `classes` and `attributes` options

This was added in [pull request #1683: Update Nunjucks macro options for nested items](https://github.com/nhsuk/nhsuk-frontend/pull/1683).

#### Add a modifier class for text input styles that accept codes and sequences

We've added a new `.nhsuk-input--code` class for the [text input](https://service-manual.nhs.uk/design-system/components/text-input) component. This improves readability of text inputs that receive codes and sequences (like NHS numbers, security codes or booking references).

You can add it through the classes option when using Nunjucks, or directly in the class attribute of the `<input>` when using HTML.

This was added in [pull request #1617: Add input styling for codes and sequences](https://github.com/nhsuk/nhsuk-frontend/pull/1617).

#### Add a 'divider' Nunjucks option to selects

Newer browsers support [using `<hr>` (horizontal rule) elements inside a `<select>` element](https://developer.chrome.com/blog/hr-in-select/) to help visually break up options for better readability.

We've added a new `divider` Nunjucks option on select items to support this feature. For example:

```njk
{{ select({
  label: {
    text: 'Sort by'
  },
  name: 'sort',
  items: [
    {
      value: 'first-name-ascending',
      text: 'First name (A to Z)'
    },
    {
      value: 'first-name-descending',
      text: 'First name (Z to A)'
    },
    {
      divider: true
    },
    {
      value: 'last-name-ascending',
      text: 'Last name (A to Z)'
    },
    {
      value: 'last-name-descending',
      text: 'Last name (Z to A)'
    }
  ]
}
}) }}
```

This was added in [pull request #1701: Support showing dividers between select options](https://github.com/nhsuk/nhsuk-frontend/pull/1701).

#### Add a 'size' Nunjucks option to labels and legends

We've added a new `size` Nunjucks option to labels and legends as a simpler alternative to the size modifier classes. For example:

```patch
  {{ input({
    label: {
      text: 'What is your full name?',
-     classes: "nhsuk-label--l"
+     size: "l"
    }
  }) }}
```

```patch
  {{ radios({
    fieldset: {
      legend: {
        text: "How do you want to be contacted about this?",
-       classes: "nhsuk-fieldset__legend--l"
+       size: "l"
      }
    },
    items: []
  }}
```

This was added in [pull request #1708: Add label, legend and table caption size option](https://github.com/nhsuk/nhsuk-frontend/pull/1708).

#### Add a 'captionSize' Nunjucks option to tables

We've added a new `captionSize` Nunjucks option to tables as a simpler alternative to the caption modifier classes. For example:

```patch
  {{ table({
    caption: "Skin symptoms and possible causes",
-   captionClasses: "nhsuk-table__caption--l",
+   captionSize: "l",
    rows: []
  }) }}
```

This was added in [pull request #1708: Add label, legend and table caption size option](https://github.com/nhsuk/nhsuk-frontend/pull/1708).

### :wastebasket: **Deprecated features**

#### Rename input wrapper HTML class

Within the input component, change the `nhsuk-input__wrapper` class to `nhsuk-input-wrapper`.

The previous class name is deprecated and will be removed in a future release.

This change was introduced in [pull request #1643: Add small buttons and inline form groups](https://github.com/nhsuk/nhsuk-frontend/pull/1643).

#### Add or rename card HTML classes

HTML markup for the card component has been updated to simplify how each card variant is identified.

If you are not using Nunjucks macros, change the card classes as follows:

- Add the missing `nhsuk-card--primary` modifier class to primary cards.
- Remove the unnecessary `nhsuk-card__heading--feature` modifier class from feature card headings.
- Remove the unnecessary `nhsuk-card__content--feature` modifier class from feature card content.
- Remove the unnecessary `nhsuk-card__content--primary` modifier class from primary card content.
- Remove the unnecessary `nhsuk-card__content--secondary` modifier class from secondary card content.
- Rename the `<div class="nhsuk-card--care__heading-container"` class attribute to match `<div class="nhsuk-card__heading-container"`.
- Rename the `<div class="nhsuk-card--care__heading"` class attribute to match `<div class="nhsuk-card__heading"`.

The previous class names are deprecated and will be removed in a future release.

This change was introduced in [pull request #1684: Fix inconsistent card BEM modifiers etc](https://github.com/nhsuk/nhsuk-frontend/pull/1684).

#### Rename Sass variable for base font size

If you use the Sass `$nhsuk-base-font-size` variable, you should rename it to `$nhsuk-root-font-size`.

The previous name is deprecated and will be removed in a future release.

This change was introduced in [pull request #1669: Remove pixel font sizes where unnecessary](https://github.com/nhsuk/nhsuk-frontend/pull/1669).

### :recycle: **Changes**

#### Update the HTML for tab panel text content

We've updated the HTML for the tabs component to wrap plain text content within `<p>` elements.

If you are not using Nunjucks macros, update your HTML markup using the [tabs examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/tabs) to add the missing `<p> </p>` wrapper:

```patch
  <div class="nhsuk-tabs__panel" id="example-1">
-   Example text content
+   <p>Example text content</p>
  </div>
```

This change was introduced in [pull request #1686: Remove ↑ up and ↓ down arrow key bindings from tabs](https://github.com/nhsuk/nhsuk-frontend/pull/1686).

#### Remove unused top task card class name

We've updated the HTML for the card component to remove the unused `nhsuk-card--top-task` class and associated `topTask` Nunjucks option.

If you are not using Nunjucks macros, update your HTML markup using the [top task card example in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/action-link) where the `nhsuk-card--clickable` class is used instead.

### :wrench: **Fixes**

- [#1633: Review global `box-sizing` usage](https://github.com/nhsuk/nhsuk-frontend/pull/1633)
- [#1635: Resolve Nunjucks template issues flagged by Jinja port](https://github.com/nhsuk/nhsuk-frontend/pull/1635)
- [#1638: Resolve Nunjucks output indentation issues](https://github.com/nhsuk/nhsuk-frontend/pull/1638)
- [#1653: Only show a task list item if not empty](https://github.com/nhsuk/nhsuk-frontend/pull/1653)
- [#1656: Improve button text vertical alignment](https://github.com/nhsuk/nhsuk-frontend/pull/1656)
- [#1657: Fix inconsistent margin in form and button groups](https://github.com/nhsuk/nhsuk-frontend/pull/1657)
- [#1686: Remove ↑ up and ↓ down arrow key bindings from tabs](https://github.com/nhsuk/nhsuk-frontend/pull/1686)
- [#1689: Only show header navigation items if not empty](https://github.com/nhsuk/nhsuk-frontend/pull/1689)
- [#1698: Fix 2px minimum chevron `outline-width` syntax](https://github.com/nhsuk/nhsuk-frontend/pull/1698)
- [#1699: Prevent date inputs shifting alignment on iOS 18](https://github.com/nhsuk/nhsuk-frontend/pull/1699)

## 10.1.0 - 15 October 2025

### :new: **New features**

#### Localise character count component

You can now translate the text used by the [character count](https://service-manual.nhs.uk/design-system/components/character-count) component to:

- show when the maximum number of characters or words is reached
- show the number of characters or words over or under the allowed maximum
- update the textarea description if JavaScript is not available
- announce to screen readers when the textarea is focused

The Nunjucks macro accepts new options so you can customise each message. You can:

- Use `charactersAtLimitText` or `wordsAtLimitText` to provide the text that shows when users have reached the limit.
- Use `charactersUnderLimitText` or `wordsUnderLimitText` to provide the text that shows when users are under the limit. The component will pluralise the message according to the configured locale and the number of characters or words remaining.
- Use `charactersOverLimitText` or `wordsOverLimitText` to provide the text that shows when users are over the limit. The component will pluralise the message according to the configured locale and the number of characters or words remaining.
- Use `textareaDescriptionText` to provide the textarea description for assistive technologies. It is visible on the page when JavaScript is unavailable.

The component will replace `%{count}` with the number of characters over or under the limit.

If you're not using Nunjucks macros, you can use data-\* attributes to provide these translations. Within the attribute value, any [quotation marks or other characters reserved by HTML](https://developer.mozilla.org/en-US/docs/Glossary/Character_reference) needs to be converted into their HTML entity equivalents.

You can:

- use `data-i18n.characters-at-limit` or `data-i18n.words-at-limit` for when users are at the limit
- configure the text that informs the end user they are under the character or word limit, by using `data-i18n.characters-under-limit.{other,many,few,two,one,zero}` or `data-i18n.words-under-limit.{other,many,few,two,one,zero}`, with one suffix for each plural form required by your locale
- configure the text that informs the end user they are over the character or word limit, by using `data-i18n.characters-over-limit.{other,many,few,two,one,zero}` or `data-i18n.words-over-limit.{other,many,few,two,one,zero}`, with one suffix for each plural form required by your locale
- configure the description provided to assistive technologies when users focus the input, by using `data-i18n.textarea-description.{other,many,few,two,one,zero}` to provide the text to set as the description

You can also provide these messages using a JavaScript configuration object when creating an instance of the component or initialising all components. See [our guidance on localising NHS.UK frontend](/docs/configuration/localisation.md) for how to do this.

This was added in [pull request #1565: Add character count localisation](https://github.com/nhsuk/nhsuk-frontend/pull/1565).

#### Smaller versions of radio buttons and checkboxes

You can now use smaller versions of the [radios](https://service-manual.nhs.uk/design-system/components/radios) and [checkboxes](https://service-manual.nhs.uk/design-system/components/checkboxes) components by adding the `nhsuk-radios--small` or `nhsuk-checkboxes--small` class.

This was added in [pull request #1567: Uplift GOV.UK Frontend form field components](https://github.com/nhsuk/nhsuk-frontend/pull/1567).

#### Updated Nunjucks macro options for components

For consistency with other components, we’ve added new Nunjucks macro options:

- Back link `visuallyHiddenText` option
- Breadcrumbs nested `backLink` component option
- Contents list `landmarkLabel` and `visuallyHiddenTitle` options
- Do and Don't list `prefixText` option, with nested item `text` and `html` options
- Fieldset `html` and `role` options
- Header navigation `toggleMenuText` and `toggleMenuVisuallyHiddenText` options
- Inset text `visuallyHiddenText` option
- Pagination `previous`, `next` and `landmarkLabel` options
- Radios item `disabled` and `attributes` options
- Text input `autocapitalize` and `disabled` options, with prefix and suffix nested `text`, `html`, `classes` and `attributes` options
- Textarea `disabled` and `spellcheck` options
- Warning callout `visuallyHiddenText` option

Visit the [design system in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components) to see Nunjucks options for each component.

This was added in [pull request #1567: Uplift GOV.UK Frontend form field components](https://github.com/nhsuk/nhsuk-frontend/pull/1567).

#### Updated appearance of disabled form controls

We’ve updated the disabled state of radio buttons, checkboxes, text inputs, textareas and select menus so it is consistent across browsers and devices.

Disabled form controls appear at 50% opacity and with an alternative cursor appearance when hovered over.

This was added in [pull request #1567: Uplift GOV.UK Frontend form field components](https://github.com/nhsuk/nhsuk-frontend/pull/1567).

#### Insert custom HTML into component form group wrappers

You can now insert custom HTML into form group wrappers for all components with form fields.

```njk
{{ input({
  formGroup: {
    beforeInput: {
      html: "example"
    },
    afterInput: {
      html: "example"
    }
  }
}) }}
```

This was added in [pull request #1561: Add `beforeInput(s)` and `beforeInput(s)` options to form groups](https://github.com/nhsuk/nhsuk-frontend/pull/1561).

#### Numbered pagination component

The pagination component now supports numbered pagination, for example where you have a long list of of items to navigate.

You can use it like this:

```njk
pagination({
  previous: {
    href: "#"
  },
  next: {
    href: "#"
  },
  items: [
    {
      number: 1,
      href: "#"
    },
    {
      number: 2,
      href: "#",
      current: true
    },
    {
      number: 3,
      href: "#"
    }
  ]
})
```

This was added in [pull request #1026: Add numbered pagination](https://github.com/nhsuk/nhsuk-frontend/pull/1026).

### :wastebasket: **Deprecated features**

#### Rename Sass variables for border width and colour

If you use Sass and you've extended or created components that use the following border variables:

- rename `$nhsuk-border-width-mobile` to `$nhsuk-border-width`
- rename `$nhsuk-border-width-form-element-error` to `$nhsuk-border-width-form-element`

The previous names are deprecated and will be removed in a future release.

This change was introduced in [pull request #1594: Always set input `:focus` box-shadow colour](https://github.com/nhsuk/nhsuk-frontend/pull/1594).

### :recycle: **Changes**

#### Do and Don't list Nunjucks options

For consistency with other components, the do and don't list Nunjucks options have changed. The previous names are deprecated and will be removed in a future release.

If you're using the `list` Nunjucks macro in your service, you should update the nested `items` option, using `text` or `html` instead of `item`.

```patch
  {{ list({
    title: "Do",
    type: "tick",
    items: [
      {
-       item: "cover blisters with a soft plaster or padded dressing"
+       text: "cover blisters with a soft plaster or padded dressing"
      },
      {
-       item: "wash your hands before touching a burst blister"
+       text: "wash your hands before touching a burst blister"
      },
      {
-       item: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
+       text: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
      }
    ]
  }) }}
```

This change was introduced in [pull request #1620: Make all Nunjucks components text configurable](https://github.com/nhsuk/nhsuk-frontend/pull/1620).

#### Pagination Nunjucks options

For consistency with other components, the pagination Nunjucks options have changed. The previous names are deprecated and will be removed in a future release.

If you're using the `pagination` Nunjucks macro in your service, you should:

- replace the `previousUrl` option with the nested `previous.href` option
- replace the `previousPage` option with the nested `previous.labelText` option
- replace the `nextUrl` option with the nested `next.href` option
- replace the `nextPage` option with the nested `next.labelText` option

```patch
  {{ pagination({
-   previousPage: "Treatments",
-   previousUrl: "/section/treatments",
+   previous: {
+     labelText: "Treatments",
+     href: "/section/treatments"
+   },
-   nextPage: "Symptoms",
-   nextUrl: "/section/symptoms"
+   next: {
+     labelText: "Symptoms",
+     href: "/section/symptoms"
+   }
  }) }}
```

This change was introduced in [pull request #1620: Make all Nunjucks components text configurable](https://github.com/nhsuk/nhsuk-frontend/pull/1620).

### :wrench: **Fixes**

- [#1593: Fix Sass deprecated `core/settings/colours` partial](https://github.com/nhsuk/nhsuk-frontend/pull/1593)
- [#1594: Always set input `:focus` box-shadow colour](https://github.com/nhsuk/nhsuk-frontend/pull/1594)
- [#1599: Make border colour on `nhsuk-panel` mixin optional](https://github.com/nhsuk/nhsuk-frontend/pull/1599)
- [#1601: Fix accessible name for linked logo in header component](https://github.com/nhsuk/nhsuk-frontend/pull/1601)
- [#1612: Fix styling of action link when used in emergency cards](https://github.com/nhsuk/nhsuk-frontend/pull/1612)
- [#1628: Fix Node.js `ReferenceError: HTMLElement is not defined` when imported server-side](https://github.com/nhsuk/nhsuk-frontend/pull/1628)

## 10.0.0 - 26 August 2025

You can follow the [updating to NHS.UK frontend version 10](https://service-manual.nhs.uk/design-system/guides/updating-to-v10) guide in the NHS digital service manual on what's changed and what you need to update.

This release introduces some breaking changes to file paths, full width buttons on mobile, the header component and others. It also stops Internet Explorer 11 and other older browsers from running NHS.UK frontend JavaScript.

Your service will not stop working in Internet Explorer 11, but components will look and behave differently without JavaScript. Read more about [how we provide support for different browsers](/docs/contributing/browser-support.md).

Service teams should be [using a progressive enhancement approach (GOV.UK service manual)](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) to make sure users can still access any content and complete their tasks.

You must read and apply these updates carefully to make sure your service does not break.

### :new: **New features**

#### New header component with account section

We’ve updated the header component to support showing account information and links. As part of this work we’ve also made some other improvements to the header:

- show currently active section or page in the navigation
- remove hardcoded home link from the navigation
- align navigation items to the left by default
- update navigation label from ’Primary navigation’ to ‘Menu’, and remove superfluous `role` and `id` attributes
- update NHS logo in the header to have higher contrast when focused
- refactor CSS classes and BEM naming, use hidden attributes instead of modifier classes, use generic search element

This was added in [pull request #1058: New header with account section](https://github.com/nhsuk/nhsuk-frontend/pull/1058).

#### New notification banner component

We’ve added a new notification banner component, ported from the GOV.UK design system.

This was added in [pull request #1408: Add notification banner component](https://github.com/nhsuk/nhsuk-frontend/pull/1408).

#### Buttons are now full width on mobile

All buttons are now displayed at full width on mobile. This may not require any changes, but you should check that it does not break any of your layouts.

Buttons and links can also be grouped together so that they appear side-by-side on tablet and desktop by using a `<div class="nhsuk-button-group"> </div>` container.

This was added in [pull request #1309: Add button group and full width button styles](https://github.com/nhsuk/nhsuk-frontend/pull/1309).

#### Reversed link style for action link

You can now use the action link component on dark backgrounds by using the `.nhsuk-action-link--reverse` class. Added in [pull request #1542: Add reverse action link modifiers and styles](https://github.com/nhsuk/nhsuk-frontend/pull/1542).

#### Sass colour palette `nhsuk-colour` function

The Sass colour palette variables (e.g. `$color_nhsuk-blue`) have been moved into a new single `$nhsuk-colours` map. The previous names are deprecated and will be removed in a future release.

If you need to reference a colour within your application you should use the new `nhsuk-colour` function:

```patch
  .nhsuk-example {
-   color: $color_nhsuk-blue;
+   color: nhsuk-colour("blue");
  }
```

This was added in [pull request #1526: Add `$nhsuk-colour` palette, colour helpers and deprecate "color" spelling](https://github.com/nhsuk/nhsuk-frontend/pull/1526).

#### Sass colours as CSS custom properties

The Sass applied colour variables (e.g. `$nhsuk-link-colour`) are now available as [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

For example:

```css
--nhsuk-link-colour: #005eb8;
--nhsuk-link-hover-colour: #7c2855;
--nhsuk-link-active-colour: #002f5c;
--nhsuk-link-visited-colour: #330072;
```

This change was introduced in [pull request #1495: Output CSS custom properties from Sass colours](https://github.com/nhsuk/nhsuk-frontend/pull/1495).

#### New JavaScript API for NHS.UK frontend

The JavaScript API for NHS.UK frontend now includes type declarations for better type safety and code autocomplete.

We've also added a new `createAll` function that lets you initialise specific components in the same way that `initAll` does:

- find all elements in the page with the corresponding `data-module` attribute
- initialise a new component for each element
- catch errors and log them in the console
- return an array of all the successfully initialised components.

```mjs
import { createAll, Button, Checkboxes } from 'nhsuk-frontend'

createAll(Button)
createAll(Checkboxes)
```

You can also pass a config object and a scope within which to search for elements:

```mjs
import { createAll, Button, Checkboxes } from 'nhsuk-frontend'

const $element = document.querySelector('.app-modal')

createAll(Button, { preventDoubleClick: true }, $element)
createAll(Checkboxes, undefined, $element)
```

Similarly, the existing `initAll` function can also configure components by including key-value pairs of camel-cased component names with their options:

```js
import { initAll } from 'nhsuk-frontend'

initAll({
  button: {
    preventDoubleClick: true
  }
})
```

You can find out more about [how to use the `initAll` and `createAll` functions](/docs/configuration/javascript.md) in our documentation.

This was added in pull requests [#1464: Export type declarations `*.d.mts` for NHS.UK frontend](https://github.com/nhsuk/nhsuk-frontend/pull/1464) and [#1506: Add JavaScript configuration support to components](https://github.com/nhsuk/nhsuk-frontend/pull/1506).

#### Create custom width container classes

You can now create custom page width container classes using the `nhsuk-width-container` mixin. You do this by passing in the required maximum width of the container.

For example:

```scss
.app-width-container--wide {
  @include nhsuk-width-container(1200px);
}
```

You can use the generated classes to set the width of:

- template container
- header container
- footer container

It was already possible to set the page app width with the `$nhsuk-page-width` variable. This new feature is useful when creating additional custom page width classes.

This was added in [pull request #1412: Allow creating custom width containers](https://github.com/nhsuk/nhsuk-frontend/pull/1412).

### :wastebasket: **Deprecated features**

#### Rename Sass variables, mixins and CSS classes to use "colour" spelling

We've renamed all Sass variables, mixins and CSS classes to use "colour" (not "color") spelling. You can still use the previous names but we'll remove them in a future breaking release.

For example, the following variables have been renamed to replace `-color` with `-colour`:

- `$nhsuk-link-color` renamed to `$nhsuk-link-colour`
- `$nhsuk-link-hover-color` renamed to `$nhsuk-link-hover-colour`
- `$nhsuk-link-active-color` renamed to `$nhsuk-link-active-colour`
- `$nhsuk-link-visited-color` renamed to `$nhsuk-link-visited-colour`

With the following variables renamed to align with GOV.UK Frontend:

- `$nhsuk-form-border-color` renamed to `$nhsuk-input-border-colour`
- `$nhsuk-form-element-background-color` renamed to `$nhsuk-input-background-colour`

See [pull request #1526](https://github.com/nhsuk/nhsuk-frontend/pull/1526) for the full list.

The following Sass mixins have been renamed:

- `nhsuk-print-color` renamed to `nhsuk-print-colour`
- `nhsuk-text-color` renamed to `nhsuk-text-colour`

The following CSS classes have been renamed:

- `nhsuk-u-secondary-text-color` renamed to `nhsuk-u-secondary-text-colour`

This change was introduced in [pull request #1526: Add `$nhsuk-colour` palette, colour helpers and deprecate "color" spelling](https://github.com/nhsuk/nhsuk-frontend/pull/1526).

### :boom: **Breaking changes** to stylesheets

The file structure for the stylesheets has changed. You will have to make different updates depending on whether you are compiling the Sass files or using the precompiled CSS.

#### Precompiled CSS

For precompiled CSS files, note the following path changes:

- copy or serve `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.css`  
  – not the previous `node_modules/nhsuk-frontend/dist/nhsuk.min.css` stylesheet
- extract `nhsuk-frontend-<VERSION-NUMBER>.min.css` from the GitHub release zip file  
  – not the previous `css/nhsuk-<VERSION-NUMBER>.min.css` stylesheet

#### Sass files

If you are compiling the Sass files, you must add `node_modules` to [Sass](https://sass-lang.com/) load paths, by either:

- calling the Sass compiler from the command line with the `--load-path node_modules` flag
- using the JavaScript API with `loadPaths: ['node_modules']` in the `options` object

Replace `packages` with `dist/nhsuk` for any `@forward`, `@use` or `@import` paths in your [Sass](https://sass-lang.com/) files, making sure to remove the unnecessary `node_modules/` prefix:

```patch
- @import "node_modules/nhsuk-frontend/packages/nhsuk";
+ @import "nhsuk-frontend/dist/nhsuk";
```

#### Sass deprecated colours removed

Sass colour tint and shade variables (e.g. `$color_tint_nhsuk-black-10`) have been removed but are available using the `nhsuk-tint` and `nhsuk-shade` functions:

| Colour variable removed     | Suggested replacement                   |
| --------------------------- | --------------------------------------- |
| $color_tint_nhsuk-black-10  | nhsuk-tint(nhsuk-colour("black"), 10%)  |
| $color_shade_nhsuk-blue-20  | nhsuk-shade(nhsuk-colour("blue"), 20%)  |
| $color_shade_nhsuk-blue-35  | nhsuk-shade(nhsuk-colour("blue"), 35%)  |
| $color_shade_nhsuk-blue-50  | nhsuk-shade(nhsuk-colour("blue"), 50%)  |
| $color_shade_nhsuk-green-35 | nhsuk-shade(nhsuk-colour("green"), 35%) |
| $color_shade_nhsuk-green-50 | nhsuk-shade(nhsuk-colour("green"), 50%) |

This change was introduced in [pull request #1526: Add `$nhsuk-colour` palette, colour helpers and deprecate "color" spelling](https://github.com/nhsuk/nhsuk-frontend/pull/1526).

#### Sass deprecated typography scale point 24 removed

The point 24 (24px large screens, 20px small screens) on the typography scale has been removed, after previously being deprecated in [version 9.5.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.5.0).

Use either point 22 or point 26 instead.

This change was introduced in [pull request #1139: Remove 24px from typography scale](https://github.com/nhsuk/nhsuk-frontend/pull/1139).

#### Sass deprecated mixins and functions removed

We've removed the `govuk-main-wrapper()`, `govuk-main-wrapper--l()` and `govuk-main-wrapper--s()` Sass mixins we deprecated in [NHS.UK frontend v9.5.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.5.0).

Remove any use of these mixins in your own Sass. You must replace them with the `.nhsuk-main-wrapper`, `.nhsuk-main-wrapper--l` and `.nhsuk-main-wrapper--s` classes in your HTML.

If you're using the `nhsuk-grid-column()` Sass mixin to create custom grid classes, you must remove the `$class` parameter:

```patch
  .app-grid-column-one-quarter-at-desktop {
-   @include nhsuk-grid-column(one-quarter, $at: desktop, $class: false);
+   @include nhsuk-grid-column(one-quarter, $at: desktop);
  }
```

The following deprecated Sass mixins have been removed:

- `govuk-exports` replaced with `nhsuk-exports`
- `govuk-grid-column` replaced with `nhsuk-grid-column`
- `govuk-grid-row` replaced with `.nhsuk-grid-row` HTML class
- `govuk-shape-arrow` replaced with `nhsuk-shape-arrow`
- `govuk-width-container` replaced with `nhsuk-width-container`
- `grid-width` replaced with `nhsuk-grid-width`

The following deprecated Sass functions have been removed:

- `tint` replaced with `nhsuk-tint`
- `shade` replaced with `nhsuk-shade`
- `iff` replaced with [Sass `if` function](https://sass-lang.com/documentation/modules/#if)

This change was introduced in [pull request #1409: Remove deprecated features marked for removal in v10](https://github.com/nhsuk/nhsuk-frontend/pull/1409).

See the [NHS.UK frontend v9.5.0](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.5.0) and [NHS.UK frontend v9.6.0 release notes](https://github.com/nhsuk/nhsuk-frontend/releases/tag/v9.6.0) for more details on previously deprecated features.

### :boom: **Breaking changes** to JavaScript

The file structure for the JavaScript has changed. You will have to make different updates depending on whether you are using a bundler or the precompiled files.

#### Using precompiled JavaScript

For precompiled JavaScript, note the following path changes:

- copy or serve `node_modules/nhsuk-frontend/dist/nhsuk/nhsuk-frontend.min.js`  
  – not the previous `node_modules/nhsuk-frontend/dist/nhsuk.min.js` script
- extract `nhsuk-frontend-<VERSION-NUMBER>.min.js` from the GitHub release zip file  
  – not the previous `js/nhsuk-<VERSION-NUMBER>.min.js` script

#### Using a JavaScript bundler

For JavaScript imported using a bundler, consolidate all `import` or `require()` calls to `nhsuk-frontend/packages/components/*` into a single statement:

```patch
- import initButtons from 'nhsuk-frontend/packages/components/button/button.js'
- import initCheckboxes from 'nhsuk-frontend/packages/components/checkboxes/checkboxes.js'
+ import { initButtons, initCheckboxes } from 'nhsuk-frontend'
```

Make sure component initialisation functions match the named exports:

```mjs
import { initButtons, initCheckboxes } from 'nhsuk-frontend'

// Initialise all button components
initButtons()

// Initialise all checkboxes components
initCheckboxes()
```

Or alternatively, you can initialise individual component classes:

```js
import { Button, Checkboxes } from 'nhsuk-frontend'

const $button = document.querySelector('.app-button')
const $checkboxes = document.querySelector('.app-checkboxes')

// Initialise single button component
new Button($button)

// Initialise single checkboxes component
new Checkboxes($checkboxes)
```

### :boom: **Breaking changes** to static assets

The location of the folder containing static assets such as logos, icons and other images has changed.

Replace `packages/` with `dist/nhsuk` when copying or serving NHS.UK frontend logos, icons and other assets:

```patch
- node_modules/nhsuk-frontend/packages/assets
+ node_modules/nhsuk-frontend/dist/nhsuk/assets
```

For example, if you're using [Express.js](https://expressjs.com/), request routing could be set up as follows:

```js
router.use('/assets', [
  express.static('node_modules/nhsuk-frontend/dist/nhsuk/assets')
])
```

### :boom: **Breaking changes** to Nunjucks

If you are using the Nunjucks macros, update the list of paths in `nunjucks.configure()` to search within `node_modules/nhsuk-frontend/dist`:

```patch
  nunjucks.configure([
-   'node_modules/nhsuk-frontend/packages/components',
-   'node_modules/nhsuk-frontend/packages/macros'
+   'node_modules/nhsuk-frontend/dist/nhsuk/components',
+   'node_modules/nhsuk-frontend/dist/nhsuk/macros',
+   'node_modules/nhsuk-frontend/dist/nhsuk',
+   'node_modules/nhsuk-frontend/dist'
  ])
```

### :boom: **Breaking changes** to page template

You must make the following [page template](https://service-manual.nhs.uk/design-system/styles/page-template) changes when you migrate to this release, or your service might break.

#### Update the `<script>` tag that includes or bundles NHS.UK frontend

The main `<script>` tag for NHS.UK frontend JavaScript has been updated and moved.

This is to stop Internet Explorer 11 and other older browsers running the JavaScript, which relies on features older browsers might not support and could cause errors.

You need to:

1. move it from within the `<head>` element to just before the closing `</body>` tag
2. remove the `defer` boolean attribute
3. add the `type="module"` attribute
4. add a second `<script>` tag to import and initialise the components

Before:

```html
  <!-- // ... -->
  <script src="/<JAVASCRIPTS-PATH>/nhsuk.min.js" defer></script>
</head>
```

After:

```html
  <!-- // ... -->
  <script type="module" src="/<JAVASCRIPTS-PATH>/nhsuk.min.js"></script>
  <script type="module">
    import { initAll } from '/<JAVASCRIPTS-PATH>/nhsuk-frontend.min.js'
    initAll()
  </script>
</body>
```

Or for [JavaScript imported using a bundler](#using-a-javascript-bundler), initialisation will be handled in your own JavaScript bundle:

```html
  <!-- // ... -->
  <script type="module" src="/<JAVASCRIPTS-PATH>/application.min.js"></script>
</body>
```

#### Update the `<script>` snippet at the top of your `<body>` tag

Page templates now include a new `nhsuk-frontend-supported` class on the `<body>` tag when NHS.UK frontend JavaScript components are fully supported.

If you are not using our Nunjucks page template, replace the existing snippet:

```html
<script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>
```

with:

```html
<script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' nhsuk-frontend-supported' : '');</script>
```

These changes were introduced in [pull request #1327: Add class `.nhsuk-frontend-supported` for ES modules support](https://github.com/nhsuk-frontend/pull/1327).

#### Remove the X-UA-Compatible meta tag

Internet Explorer versions 8, 9 and 10 included a feature that would try to determine if the page was built for an older version of IE and silently enable compatibility mode, modifying the rendering engine's behaviour to match the older version of IE. Setting this meta tag prevented that behaviour.

IE11 deprecated this meta tag and defaulted to always using IE11's renderer when the page has a HTML5 doctype (`<!DOCTYPE html>`).

If you are not using our Nunjucks page template, remove the X-UA-Compatible meta tag from your pages:

```patch
- <meta http-equiv="X-UA-Compatible" content="IE=edge">
```

NHS.UK frontend no longer supports Internet Explorer versions older than 11.

This change was introduced in [pull request #1509: Remove `X-UA-Compatible meta tag`](https://github.com/nhsuk/nhsuk-frontend/pull/1509).

#### Update the viewport meta tag

We've updated our grid layout gutter margins to accommodate devices with "camera notches". Browsers on these devices reserve a safe area in landscape orientation (known as pillar-boxing) so content isn't obscured.

To avoid this, support has been added for `viewport-fit=cover` as shown here:
https://webkit.org/blog/7929/designing-websites-for-iphone-x/

If you are not using our Nunjucks page template, update the viewport meta tag by changing `shrink-to-fit=no` to `viewport-fit=cover`:

```patch
- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
+ <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

This change was introduced in [pull request #1510: Accommodate camera notches](https://github.com/nhsuk/nhsuk-frontend/pull/1510).

#### Update the favicons, app icons and Open Graph image tags

We've changed the names, formats and sizes of icon assets we distribute in NHS.UK frontend. You will want to check that the correct files are copied in the right place and served at the right URLs.

The following files have been added to the assets folder:

- manifest.json
- images/favicon.ico
- images/favicon.svg
- images/nhsuk-icon-180.png
- images/nhsuk-icon-192.png
- images/nhsuk-icon-512.png
- images/nhsuk-icon-mask.svg
- images/nhsuk-opengraph-image.png

The following folders have been removed from the assets folder:

- favicons
- icons
- logos

If you're not using the Nunjucks page template, you will need to replace the list of icons in the template's head with the following:

```html
<link rel="icon" href="/assets/images/favicon.ico" sizes="48x48">
<link rel="icon" href="/assets/images/favicon.svg" sizes="any" type="image/svg+xml">
<link rel="mask-icon" href="/assets/images/nhsuk-icon-mask.svg" color="#005eb8">
<link rel="apple-touch-icon" href="/assets/images/nhsuk-icon-180.png">
<link rel="manifest" href="/assets/manifest.json">
```

You will need to update the file path to match your assets folder if it's not at the default location.

This change was introduced in [pull request #1508: Update site icons and Open Graph image, add `manifest.json`](https://github.com/nhsuk/nhsuk-frontend/pull/1508).

### :boom: **Breaking changes** to components

You must make the following component changes when you migrate to this release, or your service might break.

#### Action link component changes

HTML markup for the action link component has been updated to remove the HTML wrapper and update the embedded SVG icon. You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [action link examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/action-link) as follows:

- Remove the wrapper `<div class="nhsuk-action-link"> </div>`
- Rename the action link `<a class="nhsuk-action-link__link"` class attribute to match `<a class="nhsuk-action-link"`
- Update the embedded SVG icon

```patch
- <div class="nhsuk-action-link">
- <a class="nhsuk-action-link__link href="#">
+ <a class="nhsuk-action-link href="#">
-   <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
-     <path d="M0 0h24v24H0z" fill="none"></path>
-     <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
-   </svg>
+   <svg class="nhsuk-icon nhsuk-icon--arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+     <path d="M12 2a10 10 0 0 0-10 9h11.7l-4-4a1 1 0 0 1 1.5-1.4l5.6 5.7a1 1 0 0 1 0 1.4l-5.6 5.7a1 1 0 0 1-1.5 0 1 1 0 0 1 0-1.4l4-4H2A10 10 0 1 0 12 2z"/>
+   </svg>
    <span class="nhsuk-action-link__text">Find your nearest A&amp;E</span>
  </a>
- </div>
```

This change was introduced in pull requests [#1521: Update component icons](https://github.com/nhsuk/nhsuk-frontend/pull/1521) and [#1542: Add reverse action link modifiers and styles](https://github.com/nhsuk/nhsuk-frontend/pull/1542).

#### Back link component changes

For consistency with other links, we've added an underline to the back link component. We've also changed the default text from "Go back" to "Back" in all examples.

HTML markup for the back link component has been updated to remove the HTML wrapper and remove the embedded SVG icon. You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [back link examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/back-link) as follows:

- Remove the wrapper `<div class="nhsuk-back-link"> </div>`
- Rename the back link `<a class="nhsuk-back-link__link"` class attribute to match `<a class="nhsuk-back-link"`
- Remove the embedded SVG icon

```patch
- <div class="nhsuk-back-link"> <a class="nhsuk-back-link__link" href="#">
-   <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
-     <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
-   </svg>
-   Back</a>
- </div>
+ <a class="nhsuk-back-link" href="#">Back</a>
```

This change was introduced in pull requests [#1314: Add back link underline and change "Go back" to "Back" in all examples](https://github.com/nhsuk/nhsuk-frontend/pull/1314), [#1515: Update back link and breadcrumb components](https://github.com/nhsuk/nhsuk-frontend/pull/1515) and [#1521: Update component icons](https://github.com/nhsuk/nhsuk-frontend/pull/1521).

#### Breadcrumbs component changes

HTML markup for the breadcrumbs component has been updated to better align with that used on GOV.UK and use back link styles for presentation on mobile. You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [breadcrumbs examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/breadcrumbs) as follows:

- Rename the breadcrumb item `<li class="nhsuk-breadcrumb__item"` class attribute to match `<li class="nhsuk-breadcrumb__list-item"`
- Rename the breadcrumb back link `<a class="nhsuk-breadcrumb__backlink"` class attribute to match `<a class="nhsuk-back-link"`
- Remove the breadcrumb back link wrapper `<p class="nhsuk-breadcrumb__back"> </p>`

```patch
  <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
    <ol class="nhsuk-breadcrumb__list">
-     <li class="nhsuk-breadcrumb__item">
+     <li class="nhsuk-breadcrumb__list-item">
        <a class="nhsuk-breadcrumb__link" href="#">Level one</a>
      </li>
-     <li class="nhsuk-breadcrumb__item">
+     <li class="nhsuk-breadcrumb__list-item">
        <a class="nhsuk-breadcrumb__link" href="#">Level two</a>
      </li>
-     <li class="nhsuk-breadcrumb__item">
+     <li class="nhsuk-breadcrumb__list-item">
        <a class="nhsuk-breadcrumb__link" href="#">Level three</a>
      </li>
    </ol>
-   <p class="nhsuk-breadcrumb__back">
-     <a class="nhsuk-breadcrumb__backlink" href="#">
-       <span class="nhsuk-u-visually-hidden">Back to &nbsp;</span>
-       Level three
-     </a>
-   </p>
+   <a class="nhsuk-back-link" href="#"><span class="nhsuk-u-visually-hidden">Back to&nbsp;</span>Level three</a>
  </nav>
```

This change was introduced in [pull request #1515: Update back link and breadcrumb components](https://github.com/nhsuk/nhsuk-frontend/pull/1515).

#### Button component changes

We've removed support for the `nhsuk-button--disabled` class.

For the [button component](https://service-manual.nhs.uk/design-system/components/buttons), remove any references to the `nhsuk-button--disabled` class.

Use the [`disabled` HTML boolean attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled) to mark `<button>` elements as being disabled instead.

We no longer support link buttons being disabled or using disabled styles.

This change was introduced in [pull request #1075: Remove support for `nhsuk-button--disabled` class](https://github.com/nhsuk/nhsuk-frontend/pull/1075).

#### Card component changes

HTML markup for the do and don't list component now includes an updated embedded SVG icon.

If you're using the `card` Nunjucks macro, you need to rename the deprecated `HTML` param to `html`:

```patch
  {{ card({
    heading: "If you need help now, but it's not an emergency",
-   HTML: '<p>Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>'
+   html: '<p>Go to <a href="#">NHS 111 online</a> or <a href="#">call 111</a>.</p>'
  }) }}
```

If you are not using Nunjucks macros, update your HTML markup using the [card examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/card) to update the embedded SVG icon:

```patch
  <div class="nhsuk-card nhsuk-card--clickable">
    <div class="nhsuk-card__content nhsuk-card__content--primary">
      <h2 class="nhsuk-card__heading nhsuk-heading-m"> <a class="nhsuk-card__link" href="#">Introduction to care and support</a> </h2>
      <p class="nhsuk-card__description">A quick guide for people who have care and support needs and their carers</p>
-     <svg class="nhsuk-icon" xmlns="http://www.w3.org/2000/svg" width="27" height="27" aria-hidden="true" focusable="false">
-       <circle cx="13.333" cy="13.333" r="13.333" fill="" />
-       <g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.667">
-         <path d="M15.438 13l-3.771 3.771" />
-         <path d="M11.667 9.229L15.438 13" />
-       </g>
-     </svg>
+    <svg class="nhsuk-icon nhsuk-icon--chevron-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+      <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm-.3 5.8a1 1 0 1 0-1.5 1.4l2.9 2.8-2.9 2.8a1 1 0 0 0 1.5 1.4l3.5-3.5c.4-.4.4-1 0-1.4Z"></path>
+    </svg>
    </div>
  </div>
```

These changes were introduced in pull requests [#1259: Review legacy Nunjucks params](https://github.com/nhsuk/nhsuk-frontend/pull/1259) and [pull request #1521: Update component icons](https://github.com/nhsuk/nhsuk-frontend/pull/1521).

#### Checkboxes component changes

If you are using the `checkboxes` Nunjucks macro, the first checkbox input's `id` attribute no longer has the suffix `-1`. You will need to [update any links to the first checkbox input from error summary components](#error-summary-component-changes) to remove this suffix.

If you are not using Nunjucks macros, update your HTML markup using the [checkboxes examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes) as follows:

1. Add the missing `data-module` attribute to the component HTML
2. Remove the `id` attribute suffix `-1` from the first checkbox input

```patch
- <div class="nhsuk-checkboxes">
+ <div class="nhsuk-checkboxes" data-module="nhsuk-checkboxes">
    <div class="nhsuk-checkboxes__item">
-     <input class="nhsuk-checkboxes__input" id="#contact-preference-1" name="contact" type="checkbox" value="email">
+     <input class="nhsuk-checkboxes__input" id="#contact-preference" name="contact" type="checkbox" value="email">
```

These changes were introduced in pull requests [#1112: Remove the -1 suffix from radio and checkbox IDs](https://github.com/nhsuk/nhsuk-frontend/pull/1112) and [#1480: Add missing component `data-module` attributes](https://github.com/nhsuk/nhsuk-frontend/pull/1480).

#### Details component changes

The details component no longer uses JavaScript, and is no longer polyfilled in older browsers. If you have extended browser support requirements, check that the details component works as expected in older browsers.

If you're using the `details` Nunjucks macro you need to rename the `text` param to `summaryText` and the deprecated `HTML` param to `html`:

```patch
  {{ details({
-   text: "Where can I find my NHS number?",
+   summaryText: "Where can I find my NHS number?",
-   HTML: "<p>An NHS number is a 10 digit number, like 485 777 3456.</p>"
+   html: "<p>An NHS number is a 10 digit number, like 485 777 3456.</p>"
  }) }}
```

This change makes sure the details component is consistent with other components, where `text` or `html` params are alternatives and cannot be used together. For example, when only text content is necessary:

```patch
  {{ details({
    summaryText: "Where can I find my NHS number?",
-   html: "<p>An NHS number is a 10 digit number, like 485 777 3456.</p>"
+   text: "An NHS number is a 10 digit number, like 485 777 3456."
  }) }}
```

This change was introduced in pull requests [#1259: Review legacy Nunjucks params](https://github.com/nhsuk/nhsuk-frontend/pull/1259), [#1398: Document details component `summaryText` and `summaryHtml` macro options](https://github.com/nhsuk/nhsuk-frontend/pull/1398) and [#1460: Remove JavaScript from details component](https://github.com/nhsuk/nhsuk-frontend/pull/1460).

#### Pagination component changes

HTML markup for the pagination component now includes an updated embedded SVG icon. You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [pagination examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/pagination) to update the embedded SVG icon:

```patch
  <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
    <ul class="nhsuk-list nhsuk-pagination__list">
      <li class="nhsuk-pagination-item--previous">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--prev" href="#">
          <span class="nhsuk-pagination__title">Previous</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Treatments</span>
-         <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
-           <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
-         </svg>
+         <svg class="nhsuk-icon nhsuk-icon--arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+           <path d="M10.7 6.3c.4.4.4 1 0 1.4L7.4 11H19a1 1 0 0 1 0 2H7.4l3.3 3.3c.4.4.4 1 0 1.4a1 1 0 0 1-1.4 0l-5-5A1 1 0 0 1 4 12c0-.3.1-.5.3-.7l5-5a1 1 0 0 1 1.4 0Z"/>
+         </svg>
        </a>
      </li>
      <li class="nhsuk-pagination-item--next">
        <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="#">
          <span class="nhsuk-pagination__title">Next</span>
          <span class="nhsuk-u-visually-hidden">:</span>
          <span class="nhsuk-pagination__page">Symptoms</span>
-         <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
-           <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
-         </svg>
+         <svg class="nhsuk-icon nhsuk-icon--arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+           <path d="m14.7 6.3 5 5c.2.2.3.4.3.7 0 .3-.1.5-.3.7l-5 5a1 1 0 0 1-1.4-1.4l3.3-3.3H5a1 1 0 0 1 0-2h11.6l-3.3-3.3a1 1 0 1 1 1.4-1.4Z"/>
+         </svg>
        </a>
      </li>
    </ul>
  </nav>
```

This change was introduced in [pull request #1521: Update component icons](https://github.com/nhsuk/nhsuk-frontend/pull/1521).

#### Do and Don't list component changes

HTML markup for the do and don't list component now includes an updated embedded SVG icon. You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [do and don’t list examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists) to update the embedded SVG icon:

```patch
  <div class="nhsuk-do-dont-list">
    <h3 class="nhsuk-do-dont-list__label">Do</h3>
    <ul class="nhsuk-list nhsuk-list--tick" role="list">
      <li>
-       <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">
-         <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
-       </svg>
+       <svg class="nhsuk-icon nhsuk-icon--tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+         <path d="M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z"/>
+       </svg>
        cover blisters with a soft plaster or padded dressing
      </li>
    </ul>
  </div>

  <div class="nhsuk-do-dont-list">
    <h3 class="nhsuk-do-dont-list__label">Don&#39;t</h3>
    <ul class="nhsuk-list nhsuk-list--cross" role="list">
      <li>
-       <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="16" height="16">
-         <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
-         <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
-       </svg>
+       <svg class="nhsuk-icon nhsuk-icon--cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" focusable="false" aria-hidden="true">
+         <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z"/>
+       </svg>
        do not burst a blister yourself
      </li>
    </ul>
  </div>
```

This change was introduced in [pull request #1521: Update component icons](https://github.com/nhsuk/nhsuk-frontend/pull/1521).

#### Header component changes

If you're using the `header` Nunjucks macro in your service, you must:

- rename the `transactionalService` option to the new `service` option, and remove the boolean `transactional` option
- replace the `primaryLinks` option with the nested `navigation.items` option, using `text` and `href` instead of `label` and `url`
- replace the `searchAction` option with the nested `search.action` option
- replace the `searchInputName` option with the nested `search.name` option
- remove the boolean `showNav` and `showSearch` options - the respective parts of the header are now shown automatically when `navigation.items` or `search` options are provided
- check the `classes` option for `nhsuk-header--white-nav` and remove it - to turn the navigation white, add the modifier class `nhsuk-header__navigation--white` to the nested `navigation.classes` option
- remove the `nhsuk-header__navigation-list--left-aligned` modifier class - navigation items are now aligned left by default

To restore the previous justified alignment, where navigation items appeared evenly spaced out, add the new `nhsuk-header__navigation--justified` modifier class to the nested `navigation.classes` option.

If you are not using Nunjucks macros, update your HTML markup using the [header examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/header).

These changes were introduced in [pull request #1058: New header with account section](https://github.com/nhsuk/nhsuk-frontend/pull/1058).

#### Footer component changes

The footer component's Nunjucks macros and HTML have been updated for better consistency and flexibility.

If you're using the `footer` Nunjucks macro in your service, you must:

- replace the `links` option with the nested `navigation.items` option
- replace the `metaLinks` option with the nested `meta.items` option
- update all items to rename `label` to `text` and `URL` to `href`

Before:

```njk
{% block footer %}
  {{ footer({
    links: [
      {
        label: "NHS sites",
        URL: "https://www.nhs.uk/nhs-sites"
      },
      {
        label: "About us",
        URL: "https://www.nhs.uk/about-us"
      },
      {
        label: "Give us feedback",
        URL: "https://www.nhs.uk/give-feedback-about-the-nhs-website/"
      }
    ],
    metaLinks: [
      {
        label: "Accessibility",
        URL: "https://www.nhs.uk/accessibility/"
      },
      {
        label: "Our policies",
        URL: "https://www.nhs.uk/our-policies/"
      }
    ]
  }) }}
{% endblock %}
```

After:

```njk
{% block footer %}
  {{ footer({
    navigation: {
      items: [
        {
          text: "NHS sites",
          href: "https://www.nhs.uk/nhs-sites"
        },
        {
          text: "About us",
          href: "https://www.nhs.uk/about-us"
        },
        {
          text: "Give us feedback",
          href: "https://www.nhs.uk/give-feedback-about-the-nhs-website/"
        }
      ]
    },
    meta: {
      items: [
        {
          href: "https://www.nhs.uk/accessibility/",
          text: "Accessibility"
        },
        {
          href: "https://www.nhs.uk/our-policies/",
          text: "Our policies"
        }
      ]
    }
  }) }}
{% endblock %}
```

Or where additional columns `linksColumn2` and `linksColumn3` are currently used, wrap the `navigation` object in an array to support multiple columns:

```patch
- navigation: {
+ navigation: [{
    items: [
      {
        text: "List 1, item 1",
        href: "/example-1-1"
      },
      {
        text: "List 1, item 2",
        href: "/example-1-2"
      }
    ]
  },
+ {
+   items: [
+     {
+       text: "List 2, item 1",
+       href: "/example-2-1"
+     },
+     {
+       text: "List 2, item 2",
+       href: "/example-2-2"
+     }
+   ]
+ }],
```

If you are not using Nunjucks macros, update your HTML markup using the [footer examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/footer).

This change was introduced in [pull request #1452: Update footer to separate navigation from meta links, and use common parameters](https://github.com/nhsuk/nhsuk-frontend/pull/1452).

#### Error summary component changes

We've changed how the [error summary](https://service-manual.nhs.uk/design-system/components/error-summary) component links to the first input in a [radios](https://service-manual.nhs.uk/design-system/components/radios) or [checkboxes](https://service-manual.nhs.uk/design-system/components/checkboxes) component.

This is because the `id` of the first checkbox or radio input no longer has the suffix `-1` when rendered using the Nunjucks macros.

If you're using the `errorSummary` Nunjucks macro, remove `-1` from the end of the `href` attribute:

```patch
  {{ errorSummary({
    titleText: "There is a problem",
    errorList: [
      {
        text: "Select how you like to be contacted",
-       href: "#contact-preference-1"
+       href: "#contact-preference"
      }
    ]
  }) }}
```

You do not need to do this if you specified an `id` for the individual checkbox or radio input.

If you are not using Nunjucks macros, update your HTML markup using the [error summary examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/error-summary) to add the missing `data-module` attribute:

```patch
- <div class="nhsuk-error-summary">
+ <div class="nhsuk-error-summary" data-module="nhsuk-error-summary">
```

These changes were introduced in pull requests [#1112: Remove the -1 suffix from radio and checkbox IDs](https://github.com/nhsuk/nhsuk-frontend/pull/1112) and [#1480: Add missing component `data-module` attributes](https://github.com/nhsuk/nhsuk-frontend/pull/1480).

#### Inset text component changes

If you're using the `insetText` Nunjucks macro, you need to rename the deprecated `HTML` param to `html`:

```patch
  {{ insetText({
-   HTML: "<p>You'll need to stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>"
+   html: "<p>You'll need to stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>"
  }) }}
```

This change was introduced in [pull request #1259: Review legacy Nunjucks params](https://github.com/nhsuk/nhsuk-frontend/pull/1259).

#### Radios component changes

If you are using the `radios` Nunjucks macro, the first radio input's `id` attribute no longer has the suffix `-1`. You will need to [update any links to the first radio input from error summary components](#error-summary-component-changes) to remove this suffix.

If you are not using Nunjucks macros, update your HTML markup using the [radios examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/radios) as follows:

1. Add the missing `data-module` attribute to the component HTML
2. Remove the `id` attribute suffix `-1` from the first radio input

```patch
- <div class="nhsuk-radios">
+ <div class="nhsuk-radios" data-module="nhsuk-radios">
    <div class="nhsuk-radios__item">
-     <input class="nhsuk-radios__input" id="#contact-preference-1" name="contact" type="radio" value="email">
+     <input class="nhsuk-radios__input" id="#contact-preference" name="contact" type="radio" value="email">
```

These changes were introduced in pull requests [#1112: Remove the -1 suffix from radio and checkbox IDs](https://github.com/nhsuk/nhsuk-frontend/pull/1112) and [#1480: Add missing component `data-module` attributes](https://github.com/nhsuk/nhsuk-frontend/pull/1480).

#### Skip link component changes

You do not need to do anything if you're using Nunjucks macros.

If you are not using Nunjucks macros, update your HTML markup using the [skip link examples in the NHS digital service manual](https://service-manual.nhs.uk/design-system/components/skip-link) to add the missing `data-module` attribute:

```patch
- <a class="nhsuk-skip-link">
+ <a class="nhsuk-skip-link" data-module="nhsuk-skip-link">
```

This change was introduced in [pull request #1480: Add missing component `data-module` attributes](https://github.com/nhsuk/nhsuk-frontend/pull/1480).

#### Tabs component changes

The tabs component no longer triggers the `tab.show` and `tab.hide` custom events. [Get in touch](https://service-manual.nhs.uk/get-in-touch) if you need to continue using these events.

This change was introduced in [pull request #1469: Remove deprecated code and legacy feature detection](https://github.com/nhsuk/nhsuk-frontend/pull/1469).

#### Warning callout component changes

If you're using the `warningCallout` Nunjucks macro, you need to rename the deprecated `HTML` param to `html`:

```patch
  {{ warningCallout({
    heading: "School, nursery or work",
-   HTML: "<p>Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>"
+   html: "<p>Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.</p>"
  }) }}
```

This change was introduced in [pull request #1259: Review legacy Nunjucks params](https://github.com/nhsuk/nhsuk-frontend/pull/1259).

### :boom: **Breaking changes** to browser support

You must make the following component and template changes when you migrate to this release, or your service might break.

#### Check Internet Explorer 11 and other older browsers do not run unsupported JavaScript

Please note that updating `<script>` with `type="module"` [runs JavaScript in a slightly different way](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts) than `<script>` without `type="module"`. You'll need to assess the impact of these nuances and make sure that:

- when your service code is bundled with NHS.UK frontend it runs as expected in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- if you have any code that needs to run after NHS.UK frontend in its own `<script>` tag, you'll need to make sure it's using `type="module"` or [`defer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer). This is because the tag loading NHS.UK frontend will be deferred because of its `type="module"` attribute
- code that needs to run without being deferred is split into its own file and loaded with a `<script>` tag without `type="module"`

If your service has JavaScript you want to run successfully in Internet Explorer (for example JavaScript for analytics), you will need to load it in a separate `<script>` tag without `type="module"` and make sure its code is compatible with the browsers it should run in (see the [section about polyfills](#check-your-code-does-not-rely-on-polyfills-we-have-now-removed)).

These changes were introduced in [pull request #1260: Remove legacy browser support with `<script type="module">`](https://github.com/nhsuk-frontend/pull/1260).

#### Check your browser console for component initialisation errors

NHS.UK frontend component JavaScript now provides errors if you initialise a component incorrectly.

These errors will be:

- logged in the browser console when using the `initAll()` function
- [thrown as exceptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) when [initialising individual components](/docs/configuration/javascript.md#import-individual-components)

To make sure the components behave as intended, we encourage you to check your browser console and address any errors by updating your markup or configuration.

Errors you might see include:

- `SupportError` - when NHS.UK frontend is not supported in the current browser
- `ElementError` - when component templates have missing or broken HTML elements
- `InitError` - when components are initialised multiple times

This change was introduced in pull requests [#1459: Add NHS.UK frontend browser support checks](https://github.com/nhsuk/nhsuk-frontend/pull/1459), [#1466: Throw `ElementError` for all missing elements](https://github.com/nhsuk/nhsuk-frontend/pull/1466) and [#1481: Prevent multiple initialisations of a single component instance](https://github.com/nhsuk/nhsuk-frontend/pull/1481).

#### Check your code does not rely on polyfills we have now removed

We have removed polyfills `Array.prototype.includes`, `CustomEvent`, `Element.closest()`, `matches()` DOM method and NodeList API `forEach` required for Internet Explorer 11 and below.

However, because these polyfills create or extend global objects ('polluting the global namespace'), you might have other code in your service unintentionally relying on the inclusion of these polyfills. You might need to introduce your own polyfills or rewrite your JavaScript to avoid using the polyfilled features.

These changes were introduced in [pull request #1326: Remove IE11 vendor polyfills](https://github.com/nhsuk/nhsuk-frontend/pull/1326).

### :wrench: **Fixes**

- [#1349: Add select component `value`, `disabled` and `formGroup` params](https://github.com/nhsuk/nhsuk-frontend/pull/1349)
- [#1401: Fix header menu active item indicator above desktop viewport](https://github.com/nhsuk/nhsuk-frontend/issues/1401)
- [#1463: Fix component nested Nunjucks macro options](https://github.com/nhsuk/nhsuk-frontend/pull/1463)
- [#1467: Update components to set a default `id` based on `name`](https://github.com/nhsuk/nhsuk-frontend/pull/1467)
- [#1468: Support initial `aria-describedby` on all form fields](https://github.com/nhsuk/nhsuk-frontend/pull/1468)
- [#1469: Remove deprecated code and legacy feature detection](https://github.com/nhsuk/nhsuk-frontend/pull/1469)
- [#1474: Fix missing `attributes` option on form groups](https://github.com/nhsuk/nhsuk-frontend/pull/1474)
- [#1479: Fix tabs component JavaScript to use `$nhsuk-breakpoints` option](https://github.com/nhsuk/nhsuk-frontend/pull/1479)
- [#1487: Fix character count not having error border colour when rendered with error message](https://github.com/nhsuk/nhsuk-frontend/pull/1487)
- [#1489: Apply conditional reveal fixes from GOV.UK Frontend](https://github.com/nhsuk/nhsuk-frontend/pull/1489)
- [#1449: Fix a visual bug with checkboxes inside a details component](https://github.com/nhsuk/nhsuk-frontend/pull/1449)
- [#1504: Skip header missing element checks without navigation](https://github.com/nhsuk/nhsuk-frontend/pull/1504)
- [#1505: Fix Sass "Error: This module was already loaded"](https://github.com/nhsuk/nhsuk-frontend/pull/1505)
- [#1511: Use pseudo element for ticks on contents list items](https://github.com/nhsuk/nhsuk-frontend/pull/1511)
- [#1512: Remove unused close icon](https://github.com/nhsuk/nhsuk-frontend/pull/1512)
- [#1514: Use `clip-path()` for plus and minus icons on details expander](https://github.com/nhsuk/nhsuk-frontend/pull/1514)
- [#1516: Remove unused global Sass variables](https://github.com/nhsuk/nhsuk-frontend/pull/1516)
- [#1522: Use em helper for contents list tick placement](https://github.com/nhsuk/nhsuk-frontend/pull/1522)
- [#1524: Use CSS-generated chevron for header menu](https://github.com/nhsuk/nhsuk-frontend/pull/1524)
- [#1525: Fix exclusive checkbox groups with unique name attributes](https://github.com/nhsuk/nhsuk-frontend/pull/1525)
- [#1527: Output hexadecimal colours for `nhsuk-shade` and `nhsuk-tint`](https://github.com/nhsuk/nhsuk-frontend/pull/1527)
- [#1528: Fix alt text in header](https://github.com/nhsuk/nhsuk-frontend/pull/1528)
- [#1532: Use em-based sizing for chevron size and shape](https://github.com/nhsuk/nhsuk-frontend/pull/1532)
- [#1533: Improve high contrast appearance for header and card headings](https://github.com/nhsuk/nhsuk-frontend/pull/1533)
- [#1536: Add support for id param to all components](https://github.com/nhsuk/nhsuk-frontend/pull/1536)

---

Huge thanks to everybody that contributed to this release: [@colinrotherham](https://github.com/colinrotherham), [@paulrobertlloyd](https://github.com/paulrobertlloyd), [@frankieroberto](https://github.com/frankieroberto), [@edwardhorsford](https://github.com/edwardhorsford), [@MatMoore](https://github.com/MatMoore), [@mattclaffey-nhs](https://github.com/mattclaffey-nhs), [@lasara-d](https://github.com/lasara-d), [@roshaanbajwa](https://github.com/roshaanbajwa), [@davidhunter08](https://github.com/davidhunter08), the Design System Review Panel and the GOV.UK Design System team.

Thanks to the following for their help in testing the v10 pre-release: [@adam-bell-nhs](https://github.com/adam-bell-nhs), [@chrimesdev](https://github.com/chrimesdev), [@craigdixon5](https://github.com/craigdixon5), [@dnimmo](https://github.com/dnimmo), [@imnatgreen](https://github.com/imnatgreen), [@jolumley-nhs](https://github.com/jolumley-nhs), [@maheshmuralip](https://github.com/maheshmuralip), [@malcolmbaig](https://github.com/malcolmbaig), [@nicki-nhs](https://github.com/nicki-nhs) and [@rowellx68](https://github.com/rowellx68).

And thanks to the following for reporting issues: [@andymantell](https://github.com/andymantell), [@GrilloPress](https://github.com/GrilloPress), [@kaycee45](https://github.com/kaycee45) and [@xLasercut](https://github.com/xLasercut).

## 9.6.4 - 10 July 2025

Note: This release was created from the `support/9.x` branch.

### :wrench: **Fixes**

- [#1471: Fix styles for button as link :visited when :active and :focus](https://github.com/nhsuk/nhsuk-frontend/pull/1471)

## 9.6.3 - 19 June 2025

Note: This release was created from the `support/9.x` branch.

### :wrench: **Fixes**

- [#1411: Fix card heading margin above custom HTML content](https://github.com/nhsuk/nhsuk-frontend/issues/1411)

## 9.6.2 - 9 June 2025

Note: This release was created from the `support/9.x` branch.

### :recycle: **Changes**

#### Resolve inconsistent link styles

We've completed a spring clean to resolve inconsistent link styles in [pull request #1312](https://github.com/nhsuk/nhsuk-frontend/pull/1312).

Please carefully review all links in custom or modified components to make sure that your hover, focus and active styles do not conflict with the defaults.

#### Reversed link style for breadcrumb and back link

You can now use the breadcrumb and back link components on dark backgrounds by using the `.nhsuk-breadcrumb--reverse` and `.nhsuk-back-link--reverse` classes respectively. Added in [pull request #1335](https://github.com/nhsuk/nhsuk-frontend/pull/1335).

### :wrench: **Fixes**

- [#1318: Consistent padding for card and expander](https://github.com/nhsuk/nhsuk-frontend/pull/1318)
- [#1324: Show border on summary row cells with no action link](https://github.com/nhsuk/nhsuk-frontend/pull/1324)
- [#1324: Increase spacing between paragraphs in summary list values](https://github.com/nhsuk/nhsuk-frontend/pull/1324)
- [#1325: Ensure summary list keys are aligned across lists](https://github.com/nhsuk/nhsuk-frontend/pull/1325)
- [#1325: Add `nhsuk-summary-list__row--no-border` modifier to remove border on an individual summary list row](https://github.com/nhsuk/nhsuk-frontend/pull/1325)
- [#1346: Fix primary card chevron position without description](https://github.com/nhsuk/nhsuk-frontend/pull/1346)
- [#1358: Fix spacing between button background and box shadow](https://github.com/nhsuk/nhsuk-frontend/pull/1358)

## 9.6.1 - 22 May 2025

Note: This release was created from the `support/9.x` branch.

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1313: Fix header menu margin collapse issue](https://github.com/nhsuk/nhsuk-frontend/pull/1313)
- [#1316: Removed empty meta description from default Nunjucks template](https://github.com/nhsuk/nhsuk-frontend/pull/1316)

## 9.6.0 - 20 May 2025

### :new: **New features**

#### Use new override classes to apply static spacing

You can now use static spacing override classes to apply spacing from [the static spacing scale](https://service-manual.nhs.uk/design-system/styles/spacing#static-spacing) to elements of your design.

The new classes start with: `nhsuk-u-static` followed by either `margin-` or `padding-`, and then a spacing unit number.

To apply spacing in a single direction, include `left-`, `right-`, `top-`, or `bottom-` just before the spacing unit.

For example:

- `nhsuk-u-static-margin-9` will apply a 64px margin to all sides of the element at all screen sizes
- `nhsuk-u-static-padding-right-5` will apply 32px of padding to the right side of the element at all screen sizes
- `nhsuk-u-static-margin-0` will remove all margins at all screen sizes

This was added in [pull request #1163: Add static spacing override classes](https://github.com/nhsuk/nhsuk-frontend/pull/1163).

### :wastebasket: **Deprecated features**

#### Add nhsuk namespace to Sass mixins and functions

We've completed changes to prefix all Sass mixins and functions with the `nhsuk` namespace. You can still use the previous names but we'll remove them in a future breaking release.

The following Sass mixins have been renamed:

- `care-card` renamed to `nhsuk-care-card`
- `clearfix` renamed to `nhsuk-clearfix`
- `flex` renamed to `nhsuk-flex`
- `flex-item` renamed to `nhsuk-flex-item`
- `heading-label` renamed to `nhsuk-heading-label`
- `panel` renamed to `nhsuk-panel`
- `panel-with-label` renamed to `nhsuk-panel-with-label`
- `print-color` renamed to `nhsuk-print-color`
- `print-hide` renamed to `nhsuk-print-hide`
- `reading-width` renamed to `nhsuk-reading-width`
- `remove-margin-mobile` renamed to `nhsuk-remove-margin-mobile`
- `top-and-bottom` renamed to `nhsuk-top-and-bottom`
- `visually-hidden` renamed to `nhsuk-visually-hidden`
- `visually-hidden-focusable` renamed to `nhsuk-visually-hidden-focusable`

Except for `visually-shown` which will be removed entirely. You must selectively apply `nhsuk-visually-hidden` using media queries instead.

Before:

```scss
// Hide by default
@include visually-hidden;

// Show from desktop
@include nhsuk-media-query($from: desktop) {
  @include visually-shown;
}
```

After:

```scss
// Hide until desktop only
@include nhsuk-media-query($until: desktop) {
  @include nhsuk-visually-hidden;
}
```

See https://github.com/nhsuk/nhsuk-frontend/issues/1168 for more details.

The following Sass functions have been renamed:

- `tint` renamed to `nhsuk-tint`
- `shade` renamed to `nhsuk-shade`

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1301: Support webpack `sass-loader` pkg: scheme with nested paths](https://github.com/nhsuk/nhsuk-frontend/pull/1307)

## 9.5.2 - 14 May 2025

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1301: Fix legacy Sass import path for inset text component](https://github.com/nhsuk/nhsuk-frontend/pull/1301)

## 9.5.1 - 14 May 2025

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1300: Fix deprecation warnings for settings and tools `/all` paths](https://github.com/nhsuk/nhsuk-frontend/pull/1300)

## 9.5.0 - 13 May 2025

### :new: **New features**

#### Define negative spacing using the `nhsuk-spacing()` function

You can now pass the negative equivalent of a point from the typography scale to the `nhsuk-spacing()` function to get negative spacing.

For example, `nhsuk-spacing(1)` returns `4px`, and `nhsuk-spacing(-1)` returns `-4px`.

This was added in [pull request #1293: Allow `nhsuk-spacing()` to output negative spacing](https://github.com/nhsuk/nhsuk-frontend/pull/1293).

#### Support for Sass modules

We’ve updated our Sass files to use the [Sass module system](https://sass-lang.com/blog/the-module-system-is-launched/).

This was added in [pull request #1137: Upgrade to Sass modules](https://github.com/nhsuk/nhsuk-frontend/pull/1137).

#### Blue login button

We've added styling for a blue button, to be used for login buttons, for example NHS login buttons.

This was added in [pull request #992: Add NHS login buttons](https://github.com/nhsuk/nhsuk-frontend/pull/992).

#### Add Nunjucks macro option configs

We've added `macro-options.json` files to share component options with ports of NHS.UK frontend and the design system website.

This was added in [pull request #1251: Add macro options config files to components](https://github.com/nhsuk/nhsuk-frontend/pull/1251).

#### Review Nunjucks macro `text`, `html` and `call` usage

For consistency with other components, the following Nunjucks macro changes have been included:

1. Added card component `caller` support
2. Added details component `caller` support
3. Added error summary component `caller` support
4. Added inset text component `caller` support
5. Added warning callout component `caller` and `params.text` support

This was added in [pull request #1257: Review and update `text`, `html` and `call` usage](https://github.com/nhsuk/nhsuk-frontend/pull/1257).

#### Reversed link style

You can now use links on dark background by using the `.nhsuk-link--reverse` class. Added in [pull request #1269](https://github.com/nhsuk/nhsuk-frontend/pull/1269).

#### Custom Sass grid column widths and breakpoints

We are now exposing new settings to allow you to customise breakpoints and responsive behaviour:

- `$nhsuk-grid-widths` - Map of grid column widths
- `$nhsuk-breakpoints` - Map of breakpoint definitions
- `$nhsuk-show-breakpoints` - Whether to show the current breakpoint in the top right corner

For example, Sass grid column widths can be configured using:

```scss
$nhsuk-grid-widths: (
  one-quarter: math.percentage(math.div(1, 4)),
  one-third: math.percentage(math.div(1, 3)),
  one-half: math.percentage(math.div(1, 2)),
  two-thirds: math.percentage(math.div(2, 3)),
  three-quarters: math.percentage(math.div(3, 4)),
  full: 100%
);
```

Sass breakpoint definitions can be configured using:

```scss
$nhsuk-breakpoints: (
  mobile: 320px,
  tablet: 641px,
  desktop: 769px,
  large-desktop: 990px
);
```

This was added in [pull request #1288: Allow custom Sass grid column widths and breakpoints](https://github.com/nhsuk/nhsuk-frontend/pull/1288).

#### Suppress Sass deprecation warnings

You can now suppress Sass warnings from deprecations within NHS.UK frontend by updating the `$nhsuk-suppressed-warnings` map. Every deprecation warning will now include a warning "key" which you can use in the following code, placed at the root of your Sass project:

```scss
$nhsuk-suppressed-warnings: (
  deprecated-feature
);
```

This was added in [pull request #1291: Add Sass warning suppression functionality](https://github.com/nhsuk/nhsuk-frontend/pull/1291)

### :wastebasket: **Deprecated features**

#### Stop using `nhsuk-u-font-size-24` and '24' on the typography scale

We have deprecated point 24 (24px large screens, 20px small screens) on the typography scale, including the font utility class `nhsuk-u-font-size-24` that uses point 24.

We will be removing this class and point 24 on the typography scale in a future release. You will no longer be able to call the Sass mixins `nhsuk-font()` or `nhsuk-font-size()` with `$size` set to '24'.

This change was introduced in [pull request #1294: Deprecate 24 on the typography scale](https://github.com/nhsuk/nhsuk-frontend/pull/1294)

#### Replace Sass mixins for media queries

If you're using the `mq()` Sass mixin to output CSS media queries, you must replace it with the `nhsuk-media-query()` mixin.

Before:

```scss
@include mq($from: tablet) {
  margin-top: nhsuk-spacing(4);
}
```

After:

```scss
@include nhsuk-media-query($from: tablet) {
  margin-top: nhsuk-spacing(4);
}
```

If you are overriding any settings prefixed with `$mq-` in your application you will need to update to use the new `$nhsuk-` prefixed settings.

#### Replace Sass mixins for grids

If you're using the `govuk-grid-column()` Sass mixin to create custom grid classes, you must replace it with the `nhsuk-grid-column()` mixin and set the `$class` parameter to `false`.

Before:

```scss
@include govuk-grid-column(
  one-quarter,
  $at: desktop,
  $class: "app-grid-column"
);
```

After:

```scss
.app-grid-column-one-quarter-at-desktop {
  @include nhsuk-grid-column(one-quarter, $at: desktop, $class: false);
}
```

If you're using the `govuk-grid-row()` Sass mixin, you must replace it with the `.nhsuk-grid-row` class in your HTML.

If you're using the `grid-width()` Sass mixin, you must replace it with the `nhsuk-grid-width()` mixin.

#### Replace Sass mixins for wrappers

If you're using the `govuk-main-wrapper()`, `govuk-main-wrapper--l()` or `govuk-main-wrapper--s()` Sass mixins, you must replace them with the `.nhsuk-main-wrapper`, `.nhsuk-main-wrapper--l` and `.nhsuk-main-wrapper--s` classes in your HTML.

#### Replace Sass mixin `nhsuk-typography-responsive()` with `nhsuk-font-size()`

We've renamed the Sass mixin `nhsuk-typography-responsive()` to `nhsuk-font-size()` and have deprecated `nhsuk-typography-responsive()`. This better communicates its intended purpose and aligns with `nhsuk-font()` parameters.

Before:

```scss
@include nhsuk-typography-responsive(26, $override-line-height: 1.2);
```

After:

```scss
@include nhsuk-font-size(26, $line-height: 1.2);
```

You can still use `nhsuk-typography-responsive()`, but we'll remove it in a future breaking release.

#### Updated Sass mixin, function and variable namespace

All other Sass mixins, functions and variables prefixed `govuk` are now prefixed `nhsuk`. The previous names are deprecated and will be removed in a future release.

For more information, see [pull request #1289: Deprecate Sass `govuk` namespace usage](https://github.com/nhsuk/nhsuk-frontend/pull/1289).

#### Importing Sass using `all` files

If you're importing the core NHS.UK frontend Sass only, or individual Sass layers (e.g. settings, tools), then you should remove `/all` from each path.

Before:

```scss
// Example 1: NHS.UK frontend core
@import "node_modules/nhsuk-frontend/packages/core/all";

// Example 2: NHS.UK frontend layers
@import "node_modules/nhsuk-frontend/packages/core/settings/all";
@import "node_modules/nhsuk-frontend/packages/core/tools/all";
```

After:

```scss
// Example 1: NHS.UK frontend core
@import "node_modules/nhsuk-frontend/packages/core";

// Example 2: NHS.UK frontend layers
@import "node_modules/nhsuk-frontend/packages/core/settings";
@import "node_modules/nhsuk-frontend/packages/core/tools";
```

#### Importing Sass individual component partials

If you're importing individual component Sass partials, then you should remove the duplicate component name from each path:

Before:

```scss
// Example: NHS.UK frontend individual components
@import "node_modules/nhsuk-frontend/packages/components/action-link/action-link";
@import "node_modules/nhsuk-frontend/packages/components/back-link/back-link";
@import "node_modules/nhsuk-frontend/packages/components/breadcrumb/breadcrumb";
```

After:

```scss
// Example: NHS.UK frontend individual components
@import "node_modules/nhsuk-frontend/packages/components/action-link";
@import "node_modules/nhsuk-frontend/packages/components/back-link";
@import "node_modules/nhsuk-frontend/packages/components/breadcrumb";
```

### :recycle: **Changes**

We've completed changes to fully replace 24px with 26px from the typography scale in [pull request #1294](https://github.com/nhsuk/nhsuk-frontend/issues/1294) for the following:

- Do and Don't list title
- Pagination "Previous" and "Next" titles
- Panel text content
- Table and warning callout headings
- Lead paragraph `.nhsuk-body-l` class
- Lede text `.nhsuk-lede-text` class

We've made changes to NHS.UK frontend in the following pull requests:

- [#1077: Secondary button has been restyled to improve its visual hierarchy and prevent users from interpreting it as a disabled button](https://github.com/nhsuk/nhsuk-frontend/pull/1077)
- [#1198: Reverse button has been restyled to better match other buttons](https://github.com/nhsuk/nhsuk-frontend/pull/1198)

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1258: Fix text input with prefix/suffix focus and width](https://github.com/nhsuk/nhsuk-frontend/pull/1258)
- [#1292: Fix for reverse buttons within Hero components](https://github.com/nhsuk/nhsuk-frontend/pull/1292)

## 9.4.1 - 22 April 2025

### :wrench: **Fixes**

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1248: Prevent Playwright setup running on npm `postinstall`](https://github.com/nhsuk/nhsuk-frontend/pull/1248)

## 9.4.0 - 22 April 2025

### :new: **New features**

#### Include a page template

A Nunjucks page template is now included within the npm package. See [Page template](https://service-manual.nhs.uk/design-system/styles/page-template) for documentation on the supported options.

New options added to the template are:

- `htmlLang` - for setting the language of the page, defaults to `en` (English)
- `htmlAttributes` - allows you to set any extra attributes on the `<html>` element

This was added in [pull request #1186: Add page template](https://github.com/nhsuk/nhsuk-frontend/pull/1186).

#### Stop long words breaking out of components with `nhsuk-u-text-break-word`

We've added a new override class to help display long or unpredictable words on narrow screens, such as an email address entered by a user.

Wrapping content with the `nhsuk-u-text-break-word` class or applying it to table cells will force words that are too long to break onto a new line.

```html
A confirmation email will be sent to <span class="nhsuk-u-text-break-word">aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com</span>.
```

Sass users can also use the `nhsuk-text-break-word` mixin.

This change was introduced in [pull request #1061: Add break-word typography helper](https://github.com/nhsuk/nhsuk-frontend/pull/1061).

#### Add classes and attributes to table cells

You can now add `classes` and `attributes` to table cells, for example using the break-word typography helper:

```njk
{{ table({
  caption: "Users",
  head: [
    {
      text: "Name"
    },
    {
      text: "Email address"
    }
  ],
  rows: [
    [
      {
        text: "Aleksandrina Featherstonehaugh-Whitehead",
        classes: "nhsuk-u-text-break-word"
      },
      {
        text: "aleksandrina.featherstonehaughwhitehead23@folkestonepharmacy.test.com",
        classes: "nhsuk-u-text-break-word"
      }
    ]
  ]
}) }}
```

This was added in [pull request #1172: Add table cell `classes` and `attributes` param support](https://github.com/nhsuk/nhsuk-frontend/pull/1172).

#### Add html content and heading attributes to hero

You can now use `caller`, `html`, `headingClasses` and `headingLevel` in the hero component.

This was added in [pull request #1201: Add missing params to hero component](https://github.com/nhsuk/nhsuk-frontend/pull/1201).

#### Default bottom margin on tables

This was added in [pull request #1005: Update table styles so nhsuk-table has bottom margin](https://github.com/nhsuk/nhsuk-frontend/pull/1005).

#### Source maps for precompiled files

You can now use [source maps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) to help identify errors and console messages from NHS.UK Frontend precompiled files.

This was added in [pull request #1152: Add source maps to compiled JavaScript and CSS](https://github.com/nhsuk/nhsuk-frontend/pull/1152).

### :wrench: **Fixes**

We've configured our build tasks to use [Browserslist](https://browsersl.ist) for browser compatibility. This change was introduced in [pull request #1135: Configure Browserslist for build tooling](https://github.com/nhsuk/nhsuk-frontend/issues/1135)

- Update stylesheet build to automatically add vendor prefixes using [Autoprefixer](https://github.com/postcss/autoprefixer)
- Change stylesheet minifier from [`clean-css`](https://www.npmjs.com/package/clean-css) to [`cssnano`](https://www.npmjs.com/package/cssnano) for Browserslist support
- Change JavaScript minifier from [`uglify-js`](https://www.npmjs.com/package/uglify-js) to [`terser`](https://www.npmjs.com/package/terser) with compatibility workarounds
- Fix JavaScript build to ensure Babel uses [Browserslist](https://browsersl.ist) configured browsers
- Fix JavaScript build to ensure only `nhsuk.min.js` is minified not `nhsuk.js`

We've made fixes to NHS.UK frontend in the following pull requests:

- [#1148: Fix Tabs component in Safari < 14 and Internet Explorer 11](https://github.com/nhsuk/nhsuk-frontend/pull/1148)
- [#908: Update secondary, reverse and warning buttons to use their hover variable rather than darkening the base colour](https://github.com/nhsuk/nhsuk-frontend/pull/908)
- [#1207: Update wording around font licence](https://github.com/nhsuk/nhsuk-frontend/pull/1207)
- [#1169: Update visually hidden behaviour to match GOV.UK Frontend](https://github.com/nhsuk/nhsuk-frontend/pull/1169)
- [#1173: Focus skip link target to improve screen reader announcements](https://github.com/nhsuk/nhsuk-frontend/pull/1173)
- [#1174: Fix Table component responsive semantics when `firstCellIsHeader` is set](https://github.com/nhsuk/nhsuk-frontend/pull/1174)
- [#1200: Fix bottom padding on the `nhsuk-main-wrapper--l` modifier class](https://github.com/nhsuk/nhsuk-frontend/pull/1200)
- [#1221: Fix JavaScript exports to use CommonJS by default](https://github.com/nhsuk/nhsuk-frontend/pull/1221)
- [#1228: Fix header navigation item allocation on resize](https://github.com/nhsuk/nhsuk-frontend/pull/1228)

## 9.3.0 - 13 February 2025

### :new: **New features**

- Add panel component ([PR 1012](https://github.com/nhsuk/nhsuk-frontend/pull/1012))

## 9.2.0 - 12 February 2025

### :new: **New features**

- Adds `text` param for Inset text ([PR 1113](https://github.com/nhsuk/nhsuk-frontend/pull/1113))
- Make it easier to set checkbox and radio checked items ([PR 1105](https://github.com/nhsuk/nhsuk-frontend/pull/1105))

### :wrench: **Fixes**

- Fix appearance of the select element for more consistency between browsers and OS ([Issue 527](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/527))
- Fix appearance of disabled warning buttons ([Issue 1034]([https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/1034]))
- Fix reverse button text colour ([PR 1080]([https://github.com/nhsuk/nhsuk-frontend/pull/1080]))
- Fix details component requiring html param in uppercase ([PR 1090](https://github.com/nhsuk/nhsuk-frontend/pull/1090), [Issue 1089](https://github.com/nhsuk/nhsuk-frontend/issues/1089))
- Replace image component example images to match assets used on service manual ([Issue 1091](https://github.com/nhsuk/nhsuk-frontend/issues/1091))

## 9.1.0 - 4 November 2024

### :new: **New features**

- Add task list component ([PR 969](https://github.com/nhsuk/nhsuk-frontend/pull/969))

### :wrench: **Fixes**

- Fix navigation items not flowing into the overflow drop-down menu on desktop ([PR 1062](https://github.com/nhsuk/nhsuk-frontend/pull/1062))
- Update header styles so that `.nhsuk-header__search-no-nav` class is no longer needed when header contains a search field but no navigation ([PR 1046](https://github.com/nhsuk/nhsuk-frontend/pull/1046))
- Update navigation list item padding to vertically align navigation items with width container ([PR 1033](https://github.com/nhsuk/nhsuk-frontend/pull/1033))

## 9.0.1 - 9 October 2024

### :wrench: **Fixes**

- Fix layout bug where breadcrumb component was changing height when more than one link shown
- Fix print styling bug with emergency care card ([Issue 533]([https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/533]))

## 9.0.0 - 18 September 2024

### :boom: **Breaking changes**

#### Updated back link and breadcrumbs ([PR 1002](https://github.com/nhsuk/nhsuk-frontend/pull/1002))

The breadcrumbs component no longer contains its own `<div class="nhsuk-width-container">` container.

Instead, you should move it inside the existing `<div class="nhsuk-width-container">` container for your overall page, but before the `<main>` tag.

This means that instead of this:

```html
<nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
  <div class="nhsuk-width-container">
    <ol class="nhsuk-breadcrumb__list">
      <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="#">Home</a></li>
    </ol>
  </div>
</nav>
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    ...
  </main>
</div>
```

You should have this:

```html
<div class="nhsuk-width-container">
  <nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
    <ol class="nhsuk-breadcrumb__list">
      <li class="nhsuk-breadcrumb__item"><a class="nhsuk-breadcrumb__link" href="#">Home</a></li>
    </ol>
  </nav>
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    ...
  </main>
</div>
```

The back link should also be placed within the `<div class="nhsuk-width-container">` container but before the `<main>` tag. Previous guidance suggested placing at the bottom of the page, but this has been updated to recommend placing it at the top.

The back link now contains some default margin above it, so you can remove any override classes you added previously, such as `nhsuk-u-margin-top-4`. However you can still include override classes if you want more or less spacing than the default.

#### Replaced font size class `nhsuk-u-font-size-32` with `nhsuk-u-font-size-36`, based on the new type scale ([PR 989](https://github.com/nhsuk/nhsuk-frontend/pull/989))

If you use this font size modifier class, you'll need to update it.

This means that instead of this:

```html
<p class="nhsuk-u-font-size-32">
```

You should have this:

```html
<p class="nhsuk-u-font-size-36">
```

#### Updated default `name` attributes for Date input component ([PR 994](https://github.com/nhsuk/nhsuk-frontend/pull/994))

The default name attributes for the date input elements now use square brackets around the date part. For example: `dob[day]`, `dob[month]`, `dob[year]`. Previously they used hyphens (`dob-day`, `dob-month`, `dob-year`).

The square brackets mean that the date parts will be saved as an object when using the NHS prototype kit, like this:

```json
{
  "dob": {
    "day": "13",
    "month": "12",
    "year": "1984"
  }
}
```

This means you can access the data in Nunjucks like this:

```njk
Your year of birth is {{ data.dob.year }}.
```

You can also now pass the object to the `values` key of the date input to set the values for the 3 inputs:

```njk
{{ dateInput({
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  values: data.dob
}) }}
```

You can override this new default by setting the `name` attribute on the individual date parts within `items`:

```njk
{{ dateInput({
  fieldset: {
    legend: {
      text: "What is your date of birth?"
    }
  },
  items: [
    {
      name: "dob-day",
      label: "Day",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "dob-month",
      label: "Month",
      classes: "nhsuk-input--width-2"
    },
    {
      name: "dob-year",
      label: "Year",
      classes: "nhsuk-input--width-4"
    }
  ]
}) }}
```

### :recycle: **Changes**

- Large headings, legends and labels updated to use 36px rather than 32px ([PR 989](https://github.com/nhsuk/nhsuk-frontend/pull/989))
- Medium headings, legends and labels updated to use 26px rather than 24px ([Issue 445](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/445))
- Add sizing classes for table caption
- Reduce heading caption sizes
- Adjust print styles, making headings and body type smaller
- Fix Sass deprecation on `mix` function (passing a number without unit) ([PR 995](https://github.com/nhsuk/nhsuk-frontend/pull/995))
- Add nhsukAttributes macro, copied from GOV.UK ([PR 998](https://github.com/nhsuk/nhsuk-frontend/pull/998))
- Hide header's navigation links on print ([PR 1001](https://github.com/nhsuk/nhsuk-frontend/pull/1001))
- Fix missing classes option for summary list rows ([PR 1007](https://github.com/nhsuk/nhsuk-frontend/pull/1007))
- Add support for inline conditions on summary list rows ([PR 1008](https://github.com/nhsuk/nhsuk-frontend/pull/1008))
- Change "Contact us" in the footer link examples to "Give us feedback" ([PR 972](https://github.com/nhsuk/nhsuk-frontend/pull/972))
- Reduce main wrapper padding on mobile ([PR 1003](https://github.com/nhsuk/nhsuk-frontend/pull/1003))
- Fix image encoding issue introduced in Gulp v5.0 ([PR 1013](https://github.com/nhsuk/nhsuk-frontend/pull/1013))

## 8.3.0 - 24 July 2024

### :new: **New features**

- Make `nhsuk-page-width` a default so that services can override it ([PR 971](https://github.com/nhsuk/nhsuk-frontend/pull/971))
- Make footer copyright statement configurable via Nunjucks parameters ([PR 975](https://github.com/nhsuk/nhsuk-frontend/pull/975))
- Add warning button ([PR 976](https://github.com/nhsuk/nhsuk-frontend/pull/976))
- Add support for custom classes and attributes in Header primary links ([PR 978](https://github.com/nhsuk/nhsuk-frontend/pull/978))

### :wrench: **Maintenance**

- Update Node to version 20 ([PR 957](https://github.com/nhsuk/nhsuk-frontend/pull/957))

### :wrench: **Fixes**

- Change "Contact us" in the footer link examples to "Give us feedback" ([PR 972](https://github.com/nhsuk/nhsuk-frontend/pull/972))
- Remove the pattern from the date input component ([PR 984](https://github.com/nhsuk/nhsuk-frontend/pull/984))
- Adjust `errorSummary` bottom margin ([PR 973](https://github.com/nhsuk/nhsuk-frontend/pull/973))
- Fix height of select component in Safari ([PR 987](https://github.com/nhsuk/nhsuk-frontend/pull/987))
- Set minimum width of select component ([PR 987](https://github.com/nhsuk/nhsuk-frontend/pull/987))
- Remove unused `nhsuk-u-top-and-bottom` utility class ([PR 979](https://github.com/nhsuk/nhsuk-frontend/pull/979))

## 8.2.0 - 12 June 2024

### :recycle: **Changes**

- Align label bottom margins with fieldset legend bottom margins ([PR 946](https://github.com/nhsuk/nhsuk-frontend/pull/946))

### :wrench: **Fixes**

- Change example link to hash ([PR 962](https://github.com/nhsuk/nhsuk-frontend/pull/962))
- Adjust nested list spacing ([PR 961](https://github.com/nhsuk/nhsuk-frontend/pull/961))
- Fix header navigation item alignment ([PR 054](https://github.com/nhsuk/nhsuk-frontend/pull/954))
- Fix bug with inset text component requiring uppercase `html` argument ([Issue 950](https://github.com/nhsuk/nhsuk-frontend/issues/950))
- Remove unused CSS from icon card component ([PR 943](https://github.com/nhsuk/nhsuk-frontend/pull/943))
- Remove unused CSS from breadcrumbs component ([PR 943](https://github.com/nhsuk/nhsuk-frontend/pull/943))
- Add `aria-hidden` to responsive labels in responsive tables, to avoid screen readers repeating them ([PR 942](https://github.com/nhsuk/nhsuk-frontend/pull/942))
- Add `opacity: 1` to header search placeholder, to increase colour contrast on Firefox ([PR 939](https://github.com/nhsuk/nhsuk-frontend/pull/939))

## 8.1.1 - 14 March 2024

### :wrench: **Fixes**

- Fix alignment of copyright footer
- Add missing/outdated backstop images
- Don't limit input heights to `40px`, to prevent vertical overflow

## 8.1.0 - 11 January 2024

### :wrench: **Fixes**

- Updated header component unit tests ([PR 900](https://github.com/nhsuk/nhsuk-frontend/pull/900)).
- Fixed bug where the header didn't align with the main width container ([PR 902](https://github.com/nhsuk/nhsuk-frontend/pull/902)). This fixes [Issue 901](https://github.com/nhsuk/nhsuk-frontend/issues/901)
- Clicking the chevron image on a 'Primary Card (With Chevron)' card element now focuses the link ([PR 905](https://github.com/nhsuk/nhsuk-frontend/pull/905)).
- Added font licensing guidance to the relevant package READMEs and updated the copyright guidance to include NHS England ([PR 915](https://github.com/nhsuk/nhsuk-frontend/pull/915)).

### :new: **New features**

- Add and export new `initAll` method in `nhsuk.js`, and pass document by default, but allowing smaller DOM scopes to be passed. This allows new nhsuk-frontend JS components to be initialised after page load, such as in new pieces of DOM added by JavaScript.
  - This fixes [issue 906](https://github.com/nhsuk/nhsuk-frontend/issues/906) where button elements added _after_ the page has loaded would not benefit from the button component's JS behaviours (double click prevention and space bar activation for links). ([PR 907](https://github.com/nhsuk/nhsuk-frontend/pull/907)).

## 8.0.2 - 19 October 2023

### :wrench: **Fixes**

- Resolves the bug of the drop down menu covering the main content of the page ([PR 898](https://github.com/nhsuk/nhsuk-frontend/pull/898)).

## 8.0.1 - 02 October 2023

### :wrench: **Fixes**

- Updated design examples for suffix and prefix, and added backstop regression images ([PR 826](https://github.com/nhsuk/nhsuk-frontend/pull/826)).
- Fix focus padding for the search input ([PR 896](https://github.com/nhsuk/nhsuk-frontend/pull/896)).
- Remove card component Javascript from documentation ([PR 891](https://github.com/nhsuk/nhsuk-frontend/pull/891)).

## 8.0.0 - 28 September 2023

### :boom: **Breaking changes**

- Updated header and footer to use the new styles and functionality to match the live nhs.uk site ([PR 881](https://github.com/nhsuk/nhsuk-frontend/pull/881))

As well as changes to the styles, this added an example of a footer with it's links in columns, and removed the redundant example of "Header transactional". This also fixes the issue ([Issue 805](https://github.com/nhsuk/nhsuk-frontend/issues/805)).

In the header variants, the menu toggle button has been replaced with a dropdown menu, that becomes visible when the screen width is below 768px (tablet width). The search toggle has been removed, and instead the search input automatically adjusts according to the screen width.

Instead of having this:

```
// menu toggle

<button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-expanded="false">Menu</button

// close menu button

<button class="nhsuk-header__navigation-close" id="close-menu">
  <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="27" height="27">
  </svg>
  <span class="nhsuk-u-visually-hidden">Close menu</span>
</button>
```

You will now only need this:

```
<button class="nhsuk-header__navigation-link nhsuk-header__menu-toggle nhsuk-header__menu-toggle--visible" aria-expanded="false">
  <span class="nhsuk-u-visually-hidden">Browse</span>
  More
  <svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path></svg>
</button>

<ul class="nhsuk-header__drop-down nhsuk-header__drop-down--hidden">

  // navigation items in the drop down menu

</ul>
```

### :wrench: **Fixes**

- Fix vertical alignment of primary card icon
- Change NHS Digital wording to NHS England
- Remove dead link in "Action link" example

### :new: **New features**

- Added suffix and prefix examples to text input component ([PR 884](https://github.com/nhsuk/nhsuk-frontend/pull/884))

We added 4 new text input examples that allow users to add suffixes and prefixed to the input form. This was done by adding "suffix" and "prefix" as macro options.

```
  input({
    "label": {
      "text": "What is the cost per item, in pounds?"
    },
    "prefix": "£",
    "suffix": "per item",
    "errorMessage": {
      "text": "Enter a cost per item, in pounds"
    }
  })
```

## 7.1.0 - 21 August 2023

### :new: **New features**

🆕 New features

- Added three new card variants, primary card(with chevron), secondary card and top task ([PR 878](https://github.com/nhsuk/nhsuk-frontend/pull/878))

### :wrench: **Fixes**

- Breadcrumb update ([PR 872](https://github.com/nhsuk/nhsuk-frontend/pull/872))

We removed the need to add the last breadcrumb outside of the 'Items' list, now simply include it in the list of items. This also fixes the issue ([Issue 471](https://github.com/nhsuk/nhsuk-service-manual-community-backlog/issues/471) in the nhsuk Service Manual) with not being able to add attributes to the last breadcrumb. Instead of having this:

```
  {{ breadcrumb({
    items: [
      {
        href: "#",
        text: "Level one"
      },
      {
        href: "#",
        text: "Level two"
      }
    ],
    href: "#",
    text: "Level three"
  }) }}
```

You will now only need this:

```
  {{ breadcrumb({
    items: [
      {
        href: "#",
        text: "Level one",
      },
      {
        href: "#",
        text: "Level two"
      },
      {
        href: "#",
        text: "Level three"
      }
    ]
  }) }}
```

You can now add attributes to the last breadcrumb.

Note: For backwards compatibility, 'href' and 'text' parameters outside of the items list will still work and display as the last breadcrumb. These will be removed in a future release.

- Redo fix of checkbox label being unintentionally full width of the screen due to ordering of css files ([Issue 842](https://github.com/nhsuk/nhsuk-frontend/issues/842)).

## 7.0.0 - 22 March 2023

### :new: **New features**

- Added Character Count component, ported from govuk-frontend ([PR 811](https://github.com/nhsuk/nhsuk-frontend/pull/811))
- Added Tabs component, ported from govuk-frontend ([PR 828](https://github.com/nhsuk/nhsuk-frontend/pull/828))

### :boom: **Breaking changes**

- Breadcrumb update

We iterated the breadcrumb, removing the white banner and bringing the breadcrumb link closer to the page heading, which it relates to, giving the heading context of where it sits within the site. Instead of having this:

```
  <p class="nhsuk-breadcrumb__back">
    <a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two/level-three">
      Back to Level three
    </a>
  </p>
```

You will only now need this:

```
  <p class="nhsuk-breadcrumb__back">
    <a class="nhsuk-breadcrumb__backlink" href="/level-one/level-two/level-three">
      <span class="nhsuk-u-visually-hidden">Back to &nbsp;</span>
      Level three
    </a>
  </p>
```

### :recycle: **Changes**

- Rework clickable cards using CSS invisible overlay rather than JS event handler to avoid problems with using Ctrl-click, middle click, right click to open new tabs ([PR 762](https://github.com/nhsuk/nhsuk-frontend/pull/762)).
  This change removes the `Card` component's associated JavaScript. If you are bundling this yourself in your pipeline you will need to edit your JS entrypoint to remove the lines which read: `import Card from '[wherever]';` and `Card();`
  You do not need to update your html as part of this change - this remains the same.

### :wrench: **Maintenance**

- Removes support for LibSass and Ruby Sass in favour of [Dart Sass](https://www.npmjs.com/package/sass)
- Upgrade all dependencies to their latest versions where possible
- Updates code formatting conventions to fall mostly in line with [Prettier](https://prettier.io/)'s recommendations. Details of the implementation and how it effects ESlint can be [found on the PR](https://github.com/nhsuk/nhsuk-frontend/pull/832#issue-1315246034).

### :wrench: **Fixes**

- Adds missing `open` and `id` parameters to `details` nunjucks component ([Issue 856](https://github.com/nhsuk/nhsuk-frontend/issues/856), [PR 857](https://github.com/nhsuk/nhsuk-frontend/pull/857))
  These were already documented in the service manual but not actually implemented.

## 6.2.0 - 17 January 2023

### :new: **New features**

- Button improvements
  - Add `role="button"` attribute to links _visually styled_ as buttons (`<a class="nhsuk-button" role="button">`) and bind a spacebar keydown listener to these elements so that they _behave_ like buttons.
  - Add optional `data-prevent-double-click="true"` attribute to buttons to trigger simple "debounce" behaviour to buttons to catch double clicks and prevent double submissions.
  - Add `data-module="nhsuk-button"` to buttons in order to trigger the above JS behaviours (it is recommended that you do this)

- Allow back-link component to be a button element ([PR 838](https://github.com/nhsuk/nhsuk-frontend/pull/838))

### :wrench: **Fixes**

- Fix issue with VoiceOver on Safari (iOS and macOS) not announcing a list as a list. This affects some components that have a list with style `list-style-type: none`, ie those that have a class of `nhsuk-list` on the `<ul>`. This fixes the do/don't list and the error summary components. The contents list and pagination components don't seem to be affected.

- Fix issue of checkbox label being unintentionally full width of the screen due to ordering of css files ([Issue 842](https://github.com/nhsuk/nhsuk-frontend/issues/842))

## 6.1.2 - 8 August 2022

### :wrench: **Fixes**

- Add missing `nhsuk-list--border` utility class
- Reduce input and textarea error border widths to eliminate text movement / dimension changes when focusing and unfocusing a field with an error ([Issue 825](https://github.com/nhsuk/nhsuk-frontend/issues/825)), ([PR 826](https://github.com/nhsuk/nhsuk-frontend/pull/826)).

## 6.1.1 - 13 June 2022

### :wrench: **Fixes**

- Remove duplicated width attributes on plus and minus icon SVGs - fixing validation and rendering issues with these icons

### :wrench: **Maintenance**

- Refreshed dependencies to make dependabot happy

## 6.1.0 - 12 January 2022

### :new: **New features**

- Added utility classes `nhsuk-u-text-align-left`, `nhsuk-u-text-align-centre` and `nhsuk-u-text-align-right`

### :wrench: **Fixes**

- Updated dependancies in `package.json` & generated new `package-lock.json`
- Changed spelling mistake `charitiest` to `charities`
- Fixed card component example format

## 6.0.1 - 29 November 2021

### :wrench: **Fixes**

- Added missing utility classes `nhsuk-u-display-block`, `nhsuk-u-display-inline-block`, `nhsuk-u-float-left` and `nhsuk-u-float-right`

## 6.0.0 - 29 November 2021

### :boom: **Breaking changes**

- Care card refactor

Care card is now a variant of the card component.

We've reworked the care cards component as a pattern to "Help users decide when and where to get care". We've done this for 2 reasons.

1. The care cards component was designed to deal with a specific problem in the context of health information. But we've seen teams use care cards in other ways and contexts with mixed results. By rewriting care cards as a pattern, we hope it's clearer what problem they're designed to solve.
2. We're tidying up the frontend, reducing duplication in the code, making it easier to maintain and improving its performance. We're taking out things which aren't components in their own right. Care cards are a variation of the card component, used as a solution to a specific need, so we're taking them out of the frontend in a breaking change release today.
3. Type 'immmediate' has changed to 'emergency' & 'primary' has changed to 'non-urgent'. (Help users decide when and where to get care (care cards))[https://service-manual.nhs.uk/design-system/patterns/help-users-decide-when-and-where-to-get-care]

- Remove Nav A-Z component & List panel component

The Nav A-Z component & List Panel component are two components in the NHS.UK frontend that did not have guidance in the service manual.

#### Nav A-Z

Before:

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

After:

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

#### List panel

Before:

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

After:

```
<ul class="nhsuk-list nhsuk-list--border">
  <li><a href="#">List item as a link</a></li>
  <li><a href="#">List item as a link</a></li>
  <li><a href="#">List item as a link</a></li>
</ul>
```

## 5.2.1 - 28 October 2021

### :wrench: **Fixes**

- Tidying and removing of duplicate styles in header SCSS ([Issue 711](https://github.com/nhsuk/nhsuk-frontend/issues/711)), ([PR 779](https://github.com/nhsuk/nhsuk-frontend/pull/779)).
- Removal of unnecessary static `aria-label="Open menu"` on the header menu button. Included more descriptive `aria-expanded="false"` on page load.
- Fixing misaligned search magnifiying glass in header on landscape iOS devices ([Issue 781](https://github.com/nhsuk/nhsuk-frontend/issues/781), [PR 782](https://github.com/nhsuk/nhsuk-frontend/pull/782))

## 5.2.0 - 22 September 2021

### :new: **New features**

- Add "None of these" JavaScript behaviour to checkboxes - allowing all checkboxes in a group to be automatically unchecked when the "None of the above" option is checked ([PR 756](https://github.com/nhsuk/nhsuk-frontend/pull/756))

### :wrench: **Fixes**

- Transactional header defaults to wrapping underneath the logo without the need for a modifier ([Issue 720](https://github.com/nhsuk/nhsuk-frontend/issues/720)).
- Add width, height, stroke and fill attributes to inline SVGs in order that they render at appropriate sizes when viewed with disabled/broken/missing CSS ([PR 761](https://github.com/nhsuk/nhsuk-frontend/pull/761)).
- Search input focus state style (desktop) – fix border width ([Issue 768](https://github.com/nhsuk/nhsuk-frontend/issues/768), [PR 771](https://github.com/nhsuk/nhsuk-frontend/pull/771)).
- Stop polyfilling details elements in browsers that support it natively since the polyfill was causing issues with JAWS/Firefox ([Issue 754](https://github.com/nhsuk/nhsuk-frontend/issues/754), [PR 773](https://github.com/nhsuk/nhsuk-frontend/pull/773))

## 5.1.0 - 14 May 2021

### :new: **New features**

- Ensure Error Summary receives keyboard focus when rendered ([Issue 702](https://github.com/nhsuk/nhsuk-frontend/issues/702)).
- Enhance Error Summary link focus behaviour such that the nearest label/legend remains in view when scrolling ([PR 725](https://github.com/nhsuk/nhsuk-frontend/pull/725)).

  If you are importing component JavaScript with ES6 imports, you will need to update your imports to include the Error Summary JavaScript:

  ```javascript
  // Components
  import ErrorSummary from '../node_modules/nhsuk-frontend/packages/components/error-summary/error-summary'

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    ErrorSummary()
  })
  ```

  Note: You may need to change the path to `node_modules` depending on your project structure.

- Added `$nhsuk-fonts-path` and `$nhsuk-include-font-face` variables to allow for self-hosted fonts or
  disabling font altogether

  The default `@font-face`, "Frutiger", is loaded from `https://assets.nhs.uk`. The host for the fonts can be
  overridden or disabled entirely.
  - `$nhsuk-fonts-path`: base URL to load fonts from (e.g. `/fonts/`; trailing slash required)
  - `$nhsuk-include-font-face`: set to false to disable the inclusion of the `@font-face` definition entirely

### :wrench: **Fixes**

- Fix aXe accessibility warning on breadcrumb and expander components ([PR 718](https://github.com/nhsuk/nhsuk-frontend/pull/718))
- Changed SCSS linting package to stylelint from sass-lint, which is more extensible and actively maintained.

## 5.0.0 - 16 March 2021

### :boom: **Breaking changes**

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

### :new: **New features**

- Updated browser and assistive technology support documentation - remove support for IE8-10. Read the blog post ([Changing our testing requirements for Internet Explorer 8, 9 and 10](https://technology.blog.gov.uk/2018/06/26/changing-our-testing-requirements-for-internet-explorer-8-9-and-10/)) by GOV.UK for more information why we have done this now.
- add ability to not display the 'do not' prefix on list items that have the type 'cross' for the do and don't list component

### :wrench: **Fixes**

- Removing support for IE8-10 and updating the NHS logo SVG html means the `xlink:href` is no longer an issue ([PR 657](https://github.com/nhsuk/nhsuk-frontend/pull/657), [PR 673](https://github.com/nhsuk/nhsuk-frontend/pull/673)). This also fixes the issue of not being able to select or focus on the NHS logo when using VoiceOver on iOS ([PR 631](https://github.com/nhsuk/nhsuk-frontend/pull/631))
- Fix Create release GitHub Action which wasn't publishing to NPM ([Issue 691](https://github.com/nhsuk/nhsuk-frontend/issues/691))
- Modifying the Card JavaScript to reference Card rather than the old Panel and adding Card to the NPM docs.
- Give the Action link icon sufficient contrast when used in the Care card immediate variant ([Issue 588](https://github.com/nhsuk/nhsuk-frontend/issues/588))
- Fix the insufficient colour contrast ratio for the Search placeholder text ([Issue 687](https://github.com/nhsuk/nhsuk-frontend/issues/687))
- Remove `max-width` from service header with a logo only ([PR 705](https://github.com/nhsuk/nhsuk-frontend/pull/705))
- Add a `max-width` to the service header with service name to accommodate longer service names ([Issue 708](https://github.com/nhsuk/nhsuk-frontend/issues/708))
- Setting IE to use display block for the responsive table on small resolutions ([Issue 712](https://github.com/nhsuk/nhsuk-frontend/issues/712))

## 4.1.0 - 21 January 2021

### :new: **New features**

- Add `inputmode` and `spellcheck` options to the text input Nunjucks macro
- Change `type="number"` to `inputmode="numeric"` for the date input component
- Add a colon after the word Important on the warning callout component ([Issue 670](https://github.com/nhsuk/nhsuk-frontend/issues/653))

### :wrench: **Fixes**

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

### :boom: **Breaking changes**

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

### :new: **New features**

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

### :wrench: **Fixes**

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

### :new: **New features**

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
  import Header from '../node_modules/nhsuk-frontend/packages/components/header/header'
  import SkipLink from '../node_modules/nhsuk-frontend/packages/components/skip-link/skip-link'
  import Details from '../node_modules/nhsuk-frontend/packages/components/details/details'
  import Radios from '../node_modules/nhsuk-frontend/packages/components/radios/radios'
  import Checkboxes from '../node_modules/nhsuk-frontend/packages/components/checkboxes/checkboxes'

  // Polyfills
  import '../node_modules/nhsuk-frontend/packages/polyfills'

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    Details()
    Header()
    SkipLink()
    Radios()
    Checkboxes()
  })
  ```

  Note: You may need to change the path to `node_modules` depending on your project structure.

### :wrench: **Fixes**

- Tidy dependencies - Removed unnecessary JavaScript linting NPM packages
- JS utils - Fix toggleClass util which duplicated classes if there was no other class before it, more tests added
- Nunjucks documentation - describe items as arrays not objects ([Issue 604](https://github.com/nhsuk/nhsuk-frontend/issues/604))

## 3.0.4 - 24 March 2020

### :wrench: **Fixes**

- Breadcrumb - fix the text colour on :focus:hover ([Issue 589](https://github.com/nhsuk/nhsuk-frontend/issues/589))
- Transactional Header - fix the text colour on :focus:hover for non visited links ([Issue 592](https://github.com/nhsuk/nhsuk-frontend/issues/592))
- Button - fix the text colour on :focus :visited states and remove the role="button" from button as a link example ([Issue 593](https://github.com/nhsuk/nhsuk-frontend/issues/593)) ([Issue 425](https://github.com/nhsuk/nhsuk-frontend/issues/425))

## 3.0.3 - 17 February 2020

### :wrench: **Fixes**

- Expander - fix the Expander plus and minus icon sizing on IE11 ([Issue 564](https://github.com/nhsuk/nhsuk-frontend/issues/564))
- Button - fix the active state text colour for button as a link
- Back button - fix the text hover colour for visited links
- Breadcrumb - fix the text hover colour for visited links
- Pagination - fix the pagination arrow colour on active and visited links
- Header - remove random margin from the Menu button on Safari ([PR 581](https://github.com/nhsuk/nhsuk-frontend/pull/581))
- Care card - prevent additional padding on care card headings
- Header - use the latest version of the GOV.UK Accessible autocomplete which fixes a bug that prevented users from clicking on options in certain circumstances

## 3.0.2 - 11 November 2019

### :wrench: **Fixes**

- Details keydown - following the details polyfill refactor, we've fixed an issue with keydown events not opening or closing the component
- Search defaults - change default header search URL to use nhs.uk search

## 3.0.1 - 8 November 2019

### :wrench: **Fixes**

- Focus states - following the focus styles changes, we've fixed an issue with the header navigation link styling

## 3.0.0 - 7 November 2019

### :boom: **Breaking changes**

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

  | Colour variable removed               | Suggested replacement                |
  | ------------------------------------- | ------------------------------------ |
  | $color_tint_nhsuk-warm-yellow-30      | $color_nhsuk-warm-yellow             |
  | $color_tint_nhsuk-warm-yellow-10      | $color_nhsuk-warm-yellow             |
  | $nhsuk-link-focus-color               | $nhsuk-focus-text-color              |
  | $nhsuk-link-hover-background-color    | $nhsuk-focus-color                   |
  | $nhsuk-link-focus-background-color    | $nhsuk-focus-color                   |
  | $nhsuk-link-active-background-color   | $nhsuk-focus-color                   |
  | $nhsuk-button-text-colour             | $nhsuk-button-text-color             |
  | $nhsuk-button-hover-colour            | $nhsuk-button-hover-color            |
  | $nhsuk-reverse-button-text-colour     | $nhsuk-reverse-button-text-color     |
  | $nhsuk-button-shadow-colour           | $nhsuk-button-shadow-color           |
  | $nhsuk-secondary-button-colour        | $nhsuk-secondary-button-color        |
  | $nhsuk-secondary-button-hover-colour  | $nhsuk-secondary-button-hover-color  |
  | $nhsuk-secondary-button-shadow-colour | $nhsuk-secondary-button-shadow-color |
  | $nhsuk-reverse-button-colour          | $nhsuk-reverse-button-color          |
  | $nhsuk-reverse-button-hover-colour    | $nhsuk-reverse-button-hover-color    |
  | $nhsuk-button-colour                  | $nhsuk-button-color                  |
  | $nhsuk-button-hover-colour            | $nhsuk-button-hover-color            |
  | $nhsuk-secondary-button-colour        | $nhsuk-secondary-button-color        |
  | $nhsuk-secondary-button-hover-colour  | $nhsuk-secondary-button-hover-color  |
  | $nhsuk-secondary-button-shadow-colour | $nhsuk-secondary-button-shadow-color |
  | $nhsuk-reverse-button-colour          | $nhsuk-reverse-button-color          |
  | $nhsuk-reverse-button-hover-colour    | $nhsuk-reverse-button-hover-color    |
  | $nhsuk-reverse-button-shadow-colour   | $nhsuk-reverse-button-shadow-color   |
  | $nhsuk-focus-colour                   | $nhsuk-focus-color                   |
  | $nhsuk-focus-text-colour              | $nhsuk-focus-text-color              |
  | $nhsuk-button-shadow-colour           | $nhsuk-button-shadow-color           |

  </details>

  <hr>

### :boom: **Breaking changes**

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
  import nhsuk_feedbackBanner from 'node_modules/nhsuk-frontend/packages/components/feedback-banner/feedback-banner'
  ```

  ```js
  nhsuk_feedbackBanner(3000)
  ```

  <hr>

### :boom: **Breaking changes**

- Refactor component JavaScript to make it more robust and use the latest ES6 coding standards ([Issue 425](https://github.com/nhsuk/nhsuk-frontend/issues/425)) ([Issue 450](https://github.com/nhsuk/nhsuk-frontend/issues/450))

  **JavaScript**

  If you are importing component JavaScript with ES6 imports, you will need to update the imports to:

  ```js
  // Components
  import Header from './components/header/header'
  import SkipLink from './components/skip-link/skip-link'
  import Details from './components/details/details'

  // Initialize components
  document.addEventListener('DOMContentLoaded', () => {
    Details()
    Header()
    SkipLink()
  })
  ```

  If you are already importing JavaScript with these export names, you can change the default export name.

### :new: **New features**

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

### :wrench: **Fixes**

- Images - Add `size` and `srcset` attributes to the images component for responsive loading of images. ([Issue 422](https://github.com/nhsuk/nhsuk-frontend/issues/422))
- Jaws/NVDA not reading fieldset heading - removing old `overflow: hidden` hack for hint text in legend ([Issue 534](https://github.com/nhsuk/nhsuk-frontend/issues/534))
- Fallback font - Fix fallback to be Arial by removing Helvetica.
- Fieldset legend - Fix bottom margin of fieldset legend heading modifiers to make spacing consistent.
- Hero - Prevent text breaking out of box on smaller screen sizes ([Issue 432](https://github.com/nhsuk/nhsuk-frontend/issues/432))
- Table - Update table cell padding to align content
- Header search autocomplete - Use the latest version of GOV.UK accessible autocomplete ([Issue 538](https://github.com/nhsuk/nhsuk-frontend/issues/538))

## 2.3.2 - 30 September 2019

### :wrench: **Fixes**

- Header search - Fix javascript error when header search autocomplete is not present on the page ([Issue 531](https://github.com/nhsuk/nhsuk-frontend/issues/531)), add linting to all component JavaScript files, exclude linting from details polyfill, fix linting errors in autocomplete JavaScript, remove unnecessary JavaScript and CSS from autocomplete.

## 2.3.1 - 10 September 2019

### :wrench: **Fixes**

- Details (Expander variant) - Fix an issue on Microsoft Edge with the sizing of the +/- icons overlapping the title of the Expander. ([Issue 508](https://github.com/nhsuk/nhsuk-frontend/issues/508))
- Footer - Added a new parameter to the nunjucks template to override the default copyright notice. ([Issue 485](https://github.com/nhsuk/nhsuk-frontend/issues/485))
- Visually hidden mixin - Fix margin issue which causes text to be read in the wrong order on VoiceOver
- Header search - Fix issue with the search dropdown moving down the page when you scroll ([Issue 484](https://github.com/nhsuk/nhsuk-frontend/issues/484)) and handle the enter keydown event to perform search ([Issue 522](https://github.com/nhsuk/nhsuk-frontend/issues/522))

## 2.3.0 - 23 July 2019

### :new: **New features**

- Lede text - Lede text styling for use after the `<h1>` element, often used as intro text for the page immediately following the page header. You can see an example of Lede text on the [NHS website Live Well page](https://www.nhs.uk/live-well/), you can find the HTML code for Lede text in the [Typography section in the README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core#lede-text). ([Issue 106](https://github.com/nhsuk/nhsuk-service-manual-backlog/issues/106))

- Secondary text colour utility class - a new utility class to be able to use the secondary text colour within elements (`$nhsuk-secondary-text-color` - `#425563`) You can find the HTML code for secondary text colour utility class in the [Utilities section in the README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/core#secondary-text-colour) ([Issue 465](https://github.com/nhsuk/nhsuk-frontend/issues/465))

### :wrench: **Fixes**

- Care card (immediate) - Fix colour contrast issue when using the Details component within the Care card (immediate) ([Issue 475](https://github.com/nhsuk/nhsuk-frontend/issues/475))

- Open Graph image and meta data - use the latest Open Graph image and meta data from the NHS website. You can find this asset in the `packages/assets/logos` directory and the recommended meta data for Open Graph cards in the [Installing using compiled files - HTML template](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-compiled.md#html-template)

- Updated details.scss, radios.scss and checkboxes.scss components to remove &s from the middle of selectors and added new selectors that don't use the &s.

- Details component - Additional top padding for a h2 / nhsuk-heading-l which is placed after the details component. [Issue 486](https://github.com/nhsuk/nhsuk-frontend/issues/486)

## 2.2.0 - 24 June 2019

### :new: **New features**

- Footer - A variant for footer links to be in lists in 3 columns, which can be used when there are more than just a few links. You can find the markup and example in the [Footer component README](https://github.com/nhsuk/nhsuk-frontend/blob/master/packages/components/footer/README.md#footer-with-list-columns) [(Issue 168)](https://github.com/nhsuk/nhsuk-frontend/issues/168)

- Favicon - The favicon design has changed and the favicon asset files have been updated in the `packages/assets/favicons` directory. The file names have stayed the same - but there are also some additional recommended favicon metadata tags for different devices. You can find a list of the recommended favicons to use in the [Installing with npm - importing assets documentation](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-with-npm.md#importing-assets-optional) and the [Installing using compiled files - HTML template](https://github.com/nhsuk/nhsuk-frontend/blob/master/docs/installation/installing-compiled.md#html-template). ([Issue 447](https://github.com/nhsuk/nhsuk-frontend/issues/447))

### :wrench: **Fixes**

- Remove light font version - The light version of the Frutiger font has been removed as it was only been used in one place. The SASS `$nhsuk-font-light` variable has been remapped to use the `$nhsuk-font-normal` value as a defensive measure for now until it is decided to remove the `$nhsuk-font-light` variable completely. ([PR 460](https://github.com/nhsuk/nhsuk-frontend/pull/460))

- Expander group component - Fixed expander group spacing issues when used with components with no top margin ([Issue 439](https://github.com/nhsuk/nhsuk-frontend/issues/439))

- Update dependencies to their latest versions - this fixes a common security issue within the node-sass package. See https://github.com/sass/node-sass/issues/2625 for more details
- Search autocomplete - Fixed the query parameter on submit. [(Issue 459)](https://github.com/nhsuk/nhsuk-frontend/issues/459) - Also added two new parameters to the nunjucks template to make it more versatile. [(Issue 458)
  ](https://github.com/nhsuk/nhsuk-frontend/issues/458)

- Fixed `nhsuk-u-reading-width` utility class - the measurement has been adjusted to work with our base font size (16px) ([Issue 462](https://github.com/nhsuk/nhsuk-frontend/issues/462))

## 2.1.0 - 8 April 2019

### :new: **New features**

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

### :wrench: **Fixes**

- Reorder the asset `preconnect` and remove unneeded `dns-prefetch` ([Issue 434](https://github.com/nhsuk/nhsuk-frontend/issues/434))

- Header search icon padding has been altered due to the icon not being central for the desktop breakpoint.

## 2.0.0 - 11 March 2019

### :boom: **Breaking changes**

- Hero component - Refactored hero component to not overlap with the header when zooming in / increasing the font size massively. There have been minor HTML changes so please update your code if you are using this component.([PR 411](https://github.com/nhsuk/nhsuk-frontend/pull/411)), ([Issue 400](https://github.com/nhsuk/nhsuk-frontend/issues/400))

### :new: **New features**

- Summary list component - Use the summary list to summarise information, for example, a user’s responses at the end of a form.

  If you are importing all styles with `@import 'node_modules/nhsuk-frontend/packages/nhsuk';` you will automatically have access to the new component when you update. Alternatively if you are importing each of the individual components separately you will need to import the component with `@import 'node_modules/nhsuk-frontend/packages/components/summary-list/summary-list';`

  ([Issue 384](https://github.com/nhsuk/nhsuk-frontend/issues/384))

### :wrench: **Fixes**

- Button component - A fix for the :focus state to display a 4px yellow border. ([Issue 406](https://github.com/nhsuk/nhsuk-frontend/issues/406))

- JavaScript variable scope - Globally scoped variables were causing issues with JavaScript frameworks such as Angular, so they have been moved to be locally scoped within functions. However, this could be improved as we have to duplicate variables between the multiple functions, so its likely this is a temporary fix before refactoring our JavaScript to be class based. ([PR 402](https://github.com/nhsuk/nhsuk-frontend/pull/402)), ([Issue 398](https://github.com/nhsuk/nhsuk-frontend/issues/398)).

  The JavaScript files will update automatically, when you update the nhsuk-frontend version and your application will work as normal.

## 1.0.1 - 20 February 2019

### :wrench: **Fixes**

- Panel component - A fix for the panel to go full width of the grid item, rather than just the width of the content. ([Issue 395](https://github.com/nhsuk/nhsuk-frontend/issues/395))

### :new: **New features**

- Promo component - Updated the Nunjucks macro and css to allow any level of heading for the promo heading rather than being hardcoded to a `<h3>` ([PR 392](https://github.com/nhsuk/nhsuk-frontend/pull/392))

## 1.0.0 - 5 February 2019

### :tada: **Official release of the NHS.UK frontend**

- v1.0.0 of the NHS.UK frontend library!

### :wrench: **Fixes**

- Review date component - Removed the `<time>` markup around the date because it doesn't have a `datetime` attribute (which can't be automatically generated) and also we can't guarantee that the content will be a valid date/time string ([PR 381](https://github.com/nhsuk/nhsuk-frontend/pull/381))

- Header component - Update of the Nunjucks template and documentation ([PR 380](https://github.com/nhsuk/nhsuk-frontend/pull/380))

## 0.9.1 (Prerelease) - 4 February 2019

### :wrench: **Fixes**

- Header, hero and breadcrumbs - IE8 fixes to make the header and hero components display better, and hidden a back link (used in mobile view) in the breadcrumbs component ([PR 376](https://github.com/nhsuk/nhsuk-frontend/pull/376))

## 0.9.0 (Prerelease) - 31 January 2019

### :new: **New features**

- Emergency alert, feedback banner, footer, header, hero component - Add options for extra classes and attributes in the Nunjucks macro. ([PR 361](https://github.com/nhsuk/nhsuk-frontend/pull/361))

### :wrench: **Fixes**

- Footer text amend - Uncapitalised copyright message in footer - 'copyright' rather than 'Copyright' ([PR 360](https://github.com/nhsuk/nhsuk-frontend/pull/360))

## 0.8.0 (Prerelease) - 17 January 2019

### :boom: **Breaking changes**

- Header - The autocomplete has been rewritten to remove the dependency on jQuery and now uses [GOV.UK's accessible autocomplete component](https://github.com/alphagov/accessible-autocomplete). You will need to do an `npm install` to update your packages and update the header HTML accordingly. ([PR 342](https://github.com/nhsuk/nhsuk-frontend/pull/342))

## 0.7.0 (Prerelease) - Jan 2, 2019

### :new: **New features**

- Button component - Add option for button to be also an `<a>` or `<input>` element. ([PR 324](https://github.com/nhsuk/nhsuk-frontend/pull/324))

### :wrench: **Fixes**

- Project structure - move website pages out of the `/docs` folder and into `/app` along with other general project clean up ([PR 324](https://github.com/nhsuk/nhsuk-frontend/pull/321))

## 0.6.0 (Prerelease) - 18 December 2018

### :boom: **Breaking changes**

- npm JavaScript file path - The `nhsuk.min.js` file has been moved from `packages/` into `dist/` if you are referencing
  the compiled JavaScript file from the `packages/` folder please update your projects.

- Footer no longer includes a logo and the nunjucks macro arguments have been updated - if you are using the footer nunjucks
  macro then you need to update it. ([PR 300](https://github.com/nhsuk/nhsuk-frontend/pull/300))

### :new: **New features**

- ES6 JavaScript modules - NHS.UK frontend JavaScript is now written in ES6 format, meaning you can import individual components
  that you require (if you are using a transpiler such as Babel). ([PR 258](https://github.com/nhsuk/nhsuk-frontend/pull/258))

See more about using ES6 modules in your project in the [installing with npm - importing Javascript documentation](/docs/installation/installing-with-npm.md#option-2-import-javascript-using-modules).

## 0.5.3 (Prerelease) - 13 December 2018

### :new: **New features**

- Header - Add 'aria-label' Nunjucks argument so it can be overridden ([PR 297](https://github.com/nhsuk/nhsuk-frontend/pull/297))

## 0.5.2 (Prerelease) - 12 December 2018

### :wrench: **Fixes**

- Address styling - Add generic styling for the `<address>` element ([PR 295](https://github.com/nhsuk/nhsuk-frontend/pull/295))

- Focus styles - Add focus styles on links when in High Contrast Mode in Windows to make it easier to distinguish where you are. ([PR 294](https://github.com/nhsuk/nhsuk-frontend/pull/294))

## 0.5.1 (Prerelease) - 11 December 2018

### :wrench: **Fixes**

- Feedback banner - Fix an issue with the JavaScript reporting errors within the console log
  when scrolling down the page if the feedback banner did not exist on the page. ([PR 293](https://github.com/nhsuk/nhsuk-frontend/pull/293))

- Details - Add the missing component JavaScript to the `nhsuk.min.js` bundle. ([PR 285](https://github.com/nhsuk/nhsuk-frontend/pull/285))

## 0.5.0 (Prerelease) - 7 December 2018

### :boom: **Breaking changes**

- Utility classes - Utility classes should be prefixed with `nhsuk-u-` rather than `nhsuk-!-`. ([PR 282](https://github.com/nhsuk/nhsuk-frontend/pull/282))

  If you are using any utility classes in your HTML, such as spacing, width or typography overrides, you need to update your HTML classes from
  `nhsuk-!-` to `nhsuk-u-`.

  You can find out more about utility class usage in the [utility class documentation](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core#utilities).

### :wrench: **Fixes**

- Footer - Add the ability to change the link of the NHS logo within the nunjucks macro with `homeHref` argument. Also have the logo show by default with the ability to hide it using the `showLogo` argument. ([PR 278](https://github.com/nhsuk/nhsuk-frontend/pull/278))

## 0.4.0 (Prerelease) - 3 December 2018

### :boom: **Breaking changes**

- Breadcrumb - Updated nunjucks macro so now you do not need duplicate entries for it to work ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

  Use the latest [Breadcrumb nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#nunjucks-macro) and [Breadcrumb HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#html-markup) in your app.

- Care card - Change the way triangle is generated in care cards for accessiblity purposes ([PR 269](https://github.com/nhsuk/nhsuk-frontend/pull/269))

  Use the latest [Care card HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card#quick-start-examples) in your app.

### :wrench: **Fixes**

- Header - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

- Footer - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 272](https://github.com/nhsuk/nhsuk-frontend/pull/272))

## 0.3.0 (Prerelease) - 3 December 2018

### :boom: **Breaking changes**

- Footer - Nunjucks macro arguments no longer contains `secondaryLinks` only `primaryLinks` ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

  Use the latest [Footer nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#nunjucks-macro) and [Footer HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#html-markup) in your app.

- List panel - Put each list panel in a list item ([PR 262](https://github.com/nhsuk/nhsuk-frontend/pull/262))

  Use the latest [List panel nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#nunjucks-macro) and [List panel HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#html-markup)

- Pagination - Update pagination markup and styling ([PR 263](https://github.com/nhsuk/nhsuk-frontend/pull/263))

  Use the latest [Pagination nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#nunjucks-macro) and [Pagination HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#html-markup)

### :new: **New features**

- Form elements - All form elements have now been added to NHS.UK frontend. Including a new transactional header and footer. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

- Footer - The footer has had a visual redesign. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

## 0.2.1 (Prerelease) - 27 November 2018

### :wrench: **Fixes**

- Header &amp; Footer - Remove NHS logo SVG nunjucks include ([PR 256](https://github.com/nhsuk/nhsuk-frontend/pull/256))

## 0.2.0 (Prerelease) - 27 November 2018

### :boom: **Breaking changes**

- Breadcrumb - Refactor breadcrumb SVG icons to background images. ([PR 246](https://github.com/nhsuk/nhsuk-frontend/pull/246))

  Use the latest [Breadcrumb HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#html-markup) in your app.

- Care card - Rename care cards to non-urgent, urgent and immediate. ([PR 252](https://github.com/nhsuk/nhsuk-frontend/pull/252))

  Use the latest [Care card HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card#quick-start-examples) in your app.

- Do &amp; don't list - Rename check list to tick, update Nunjucks parameters. ([PR 248](https://github.com/nhsuk/nhsuk-frontend/pull/248))

  Use the latest [Do & don't list HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/do-dont-list#html-markup) in your app.

### :wrench: **Fixes**

- Action link - Add argument to the nunjucks macro allow action link to open in new window ([PR 245](https://github.com/nhsuk/nhsuk-frontend/pull/245))
- Contents list - Fix MacOS VoiceOver issue for accessibility ([PR 245](https://github.com/nhsuk/nhsuk-frontend/pull/245))

## 0.1.6 (Prerelease) - 22 November 2018

### :wrench: **Fixes**

- Release 0.1.5 was missing the `nhsuk.min.js` within the packages folder for npm. It is now included.

## 0.1.5 (Prerelease) - 22 November 2018

### :wrench: **Fixes**

- Update skip link documentation, template and js ([PR 204](https://github.com/nhsuk/nhsuk-frontend/pull/204))
- Fixes rogue markup and helps the page validate ([PR 216](https://github.com/nhsuk/nhsuk-frontend/pull/216))
- List panel fixes ([PR 227](https://github.com/nhsuk/nhsuk-frontend/pull/227))
- Add underline when focus on main navigation items ([PR 233](https://github.com/nhsuk/nhsuk-frontend/pull/233))
- Tidy up SVG icons ([PR 235](https://github.com/nhsuk/nhsuk-frontend/pull/235))
- Expander SVG background image base64 ([PR 236](https://github.com/nhsuk/nhsuk-frontend/pull/236))
- A-Z navigation fixes ([PR 240](https://github.com/nhsuk/nhsuk-frontend/pull/240))

## 0.1.4 (Prerelease) - 13 November 2018

### :tada: **Initial release of the NHS.UK frontend**

- This release includes all the content page components and the first
  installable npm package.
