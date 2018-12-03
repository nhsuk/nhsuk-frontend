# Changelog

## 0.3.0 (Prerelease) - Dec 03, 2018

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
