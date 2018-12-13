# NHS.UK Frontend Changelog

## 0.5.3 (Prerelease) - Dec 13, 2018

:new: **New features**

- Header - Add 'aria-label' Nunjucks argument so it can be overridden  ([PR 297](https://github.com/nhsuk/nhsuk-frontend/pull/297))

## 0.5.2 (Prerelease) - Dec 12, 2018

:wrench: **Fixes**

- Address styling - Add generic styling for the `<address>` element  ([PR 295](https://github.com/nhsuk/nhsuk-frontend/pull/295))

- Focus styles - Add focus styles on links when in High Contrast Mode in Windows to make it easier to distinguish where you are. ([PR 294](https://github.com/nhsuk/nhsuk-frontend/pull/294))

## 0.5.1 (Prerelease) - Dec 11, 2018

:wrench: **Fixes**

- Feedback banner - Fix an issue with the JavaScript reporting errors within the console log
when scrolling down the page if the feedback banner did not exist on the page.  ([PR 293](https://github.com/nhsuk/nhsuk-frontend/pull/293))

- Details - Add the missing component JavaScript to the `nhsuk.min.js` bundle. ([PR 285](https://github.com/nhsuk/nhsuk-frontend/pull/285))

## 0.5.0 (Prerelease) - Dec 07, 2018

:boom: **Breaking changes**

- Utility classes - Utility classes should be prefixed with `nhsuk-u-` rather than `nhsuk-!-`. ([PR 282](https://github.com/nhsuk/nhsuk-frontend/pull/282))

  If you are using any utility classes in your HTML, such as spacing, width or typography overrides, you need to update your HTML classes from
  `nhsuk-!-` to `nhsuk-u-`.

  You can find out more about utility class usage in the [utility class documentation](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/core#utilities).

:wrench: **Fixes**

- Footer - Add the ability to change the link of the NHS logo within the nunjucks macro with `homeHref` argument. Also have the logo show by default with the ability to hide it using the `showLogo` argument. ([PR 278](https://github.com/nhsuk/nhsuk-frontend/pull/278))

## 0.4.0 (Prerelease) - Dec 03, 2018

:boom: **Breaking changes**

- Breadcrumb - Updated nunjucks macro so now you do not need duplicate entries for it to work ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

  Use the latest [Breadcrumb nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#nunjucks-macro) and [Breadcrumb HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/breadcrumb#html-markup) in your app.

- Care card - Change the way triangle is generated in care cards for accessiblity purposes ([PR 269](https://github.com/nhsuk/nhsuk-frontend/pull/269))

  Use the latest [Care card HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/care-card#quick-start-examples) in your app.

:wrench: **Fixes**

- Header - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 276](https://github.com/nhsuk/nhsuk-frontend/pull/276))

- Footer - Removed icon includes from nunjucks macro and added the SVG's inline ([PR 272](https://github.com/nhsuk/nhsuk-frontend/pull/272))

## 0.3.0 (Prerelease) - Dec 03, 2018

:boom: **Breaking changes**

- Footer - Nunjucks macro arguments no longer contains `secondaryLinks` only `primaryLinks` ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

  Use the latest [Footer nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#nunjucks-macro) and [Footer HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/footer#html-markup) in your app.

- List panel - Put each list panel in a list item ([PR 262](https://github.com/nhsuk/nhsuk-frontend/pull/262))

  Use the latest [List panel nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#nunjucks-macro) and [List panel HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/list-panel#html-markup)

- Pagination - Update pagination markup and styling ([PR 263](https://github.com/nhsuk/nhsuk-frontend/pull/263))

  Use the latest [Pagination nunjucks macro arguments](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#nunjucks-macro) and [Pagination HTML markup](https://github.com/nhsuk/nhsuk-frontend/tree/master/packages/components/pagination#html-markup)

:new: **New features**

- Form elements - All form elements have now been added to NHS.UK Frontend. Including a new transactional header and footer. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

- Footer - The footer has had a visual redesign. ([PR 208](https://github.com/nhsuk/nhsuk-frontend/pull/208))

## 0.2.1 (Prerelease) - Nov 27, 2018

:wrench: **Fixes**

- Header &amp; Footer - Remove NHS logo SVG nunjucks include ([PR 256](https://github.com/nhsuk/nhsuk-frontend/pull/256))

## 0.2.0 (Prerelease) - Nov 27, 2018

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

## 0.1.6 (Prerelease) - Nov 22, 2018

:wrench: **Fixes**

- Release 0.1.5 was missing the `nhsuk.min.js` within the packages folder for npm. It is now included.

## 0.1.5 (Prerelease) - Nov 22, 2018

:wrench: **Fixes**

- Update skip link documentation, template and js ([PR 204](https://github.com/nhsuk/nhsuk-frontend/pull/204))
- Fixes rogue markup and helps the page validate ([PR 216](https://github.com/nhsuk/nhsuk-frontend/pull/216))
- List panel fixes ([PR 227](https://github.com/nhsuk/nhsuk-frontend/pull/227))
- Add underline when focus on main navigation items ([PR 233](https://github.com/nhsuk/nhsuk-frontend/pull/233))
- Tidy up SVG icons ([PR 235](https://github.com/nhsuk/nhsuk-frontend/pull/235))
- Expander SVG background image base64 ([PR 236](https://github.com/nhsuk/nhsuk-frontend/pull/236))
- A-Z navigation fixes ([PR 240](https://github.com/nhsuk/nhsuk-frontend/pull/240))

## 0.1.4 (Prerelease) - Nov 13, 2018

:tada: **Initial release of the NHS.UK Frontend**

- This release includes all the content page components and the first
installable npm package.
