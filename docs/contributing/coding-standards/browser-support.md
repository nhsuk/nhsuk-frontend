# Browser support

NHS.UK frontend browser support is shown in the table below.

'Compliant' means that components should look and function as they were designed to do in other modern browsers.

'Functional' means that components may not look exactly as they were designed but must still function properly and be usable without any errors.


| Operating system | Browser                                | Support     |
|----------------- |----------------------------------------|-------------|
| Windows          | Internet Explorer 8-10                 | functional  |
| Windows          | Internet Explorer 11                   | compliant   |
| Windows          | Edge (latest 2 versions)               | compliant   |
| Windows          | Google Chrome (latest 2 versions)      | compliant   |
| Windows          | Mozilla Firefox (latest 2 versions)    | compliant   |
| macOS            | Safari 9+                              | compliant   |
| macOS            | Google Chrome (latest 2 versions)      | compliant   |
| macOS            | Mozilla Firefox (latest 2 versions)    | compliant   |
| iOS              | Safari for iOS 9.3 and later           | compliant   |
| iOS              | Google Chrome (latest 2 versions)      | compliant   |
| Android          | Google Chrome (latest 2 versions)      | compliant   |
| Android          | Samsung Internet (latest 2 versions)   | compliant   |

# Assistive technology support

| Software                 | Type               | Browser                             |
|--------------------------|--------------------|-------------------------------------|
| [JAWS](https://www.freedomscientific.com/Products/Blindness/JAWS)     | screen reader      | Internet Explorer 11 |                     
| [ZoomText](https://www.zoomtext.com/products/zoomtext-magnifierreader/)             | screen magnifier   | Internet Explorer 11 |
| [Dragon NaturallySpeaking](https://www.nuance.com/en-gb/dragon.html)| speech recognition | Internet Explorer 11 |
| [NVDA](https://www.nvaccess.org/) | screen reader      | Firefox (latest versions)|
| [VoiceOver](https://www.apple.com/uk/accessibility/iphone/vision/)           | screen reader      | Safari on iOS10 and OS X |

Testing with the various technologies above should cover the vast amount of
users who use assistive technologies.

We also test that are components:

- are accessible using a keyboard only
- function correctly when using [high contrast mode in Windows](https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode)
- function correctly when changing colour schemes in ZoomText
