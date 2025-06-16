# How we provide support for different browsers

Users can access NHS services through a wide range of new to older browsers. Our components provide a baseline experience through HTML and CSS, allowing all users to complete their tasks even if JavaScript is not working. Some components have JavaScript enhancements which add extra features or fix accessibility issues.

From NHS.UK frontend v10.0.0 onwards, Internet Explorer 11 and other older browsers will no longer run NHS.UK frontend JavaScript. Your service will not stop working, but components will look and behave differently without JavaScript.

Service teams should [use a progressive enhancement approach (GOV.UK service manual)](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) to make sure users can still access any content and complete their tasks.

## Browser support

Supported browsers can be split into three levels:

- **Compliant** – we aim to provide the same baseline experience.
- **Necessary** – we aim to support optional enhancements as much as possible. However, we might sometimes need to adjust the component's behaviour, while still allowing the users to complete their task. This might include:

  - falling back to the no-JavaScript experience
  - disabling parts of the enhancement
  - doing a simpler alternative

- **Limited** – we do not download or attempt to parse NHS.UK frontend JavaScript. We will not regularly test in these browsers. We will not fix bugs affecting these browsers.

We test NHS.UK frontend with the following browsers:

| Browser                        | Support   |
| ------------------------------ | --------- |
| Chrome (stable versions)       | Compliant |
| Chrome 61 and later            | Necessary |
| Firefox (stable versions)      | Compliant |
| Firefox 60 and later           | Necessary |
| Edge (stable versions)         | Compliant |
| Edge 16-18, Edge 79 and later  | Necessary |
| Internet Explorer 11           | Limited   |
| Safari (stable versions)       | Compliant |
| Safari 11 and later            | Necessary |
| Safari 10.3 (iOS)              | Limited   |
| Safari 10.1 (macOS)            | Limited   |
| Opera (most recent)            | Compliant |
| Opera 48 and later             | Necessary |
| Samsung Internet (most recent) | Compliant |
| Samsung Internet 8.2 and later | Necessary |

Stable versions refer to all stable releases of Chrome, Firefox and Edge released in the last 6 months and the last 4 releases of Safari.

## Assistive technology support

We test NHS.UK frontend with the following assistive technology:

| Software                                            | Software version | Browser                                  |
| --------------------------------------------------- | ---------------- | ---------------------------------------- |
| JAWS (desktop screen reader)                        | 2019 or later    | Chrome or Edge (latest version)          |
| NVDA (desktop screen reader)                        | Latest           | Chrome, Firefox or Edge (latest version) |
| VoiceOver on iOS (mobile screen reader)             | Latest           | Safari (latest version                   |
| TalkBack (mobile screen reader)                     | Latest           | Chrome (latest version)                  |
| Windows Magnifier or Apple Zoom (screen magnifiers) | Latest           | Any                                      |
| Dragon (speech recognition)                         | 15 or later      | Chrome (latest version)                  |

This table is based on the [2016 survey of assistive technologies used to access GOV.UK](https://accessibility.blog.gov.uk/2016/11/01/results-of-the-2016-gov-uk-assistive-technology-survey/) and the more recent [WebAIM screen reader survey](https://webaim.org/projects/screenreadersurvey9/).

We also test that our components:

- are accessible using a keyboard only
- function correctly when using [high contrast mode in Windows](https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode)
- function correctly when using ZoomText (screen magnifier)

---

Next: [Git style guide](git-style-guide.md)
