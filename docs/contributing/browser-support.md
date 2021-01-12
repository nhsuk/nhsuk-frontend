# Browser support

NHS.UK frontend browser support is shown in the table below.

| Operating system | Browser                              | Support   |
|----------------- |--------------------------------------|-----------|
| Windows          | Internet Explorer 11                 | compliant |
| Windows          | Edge (latest versions)               | compliant |
| Windows          | Google Chrome (latest versions)      | compliant |
| Windows          | Mozilla Firefox (latest versions)    | compliant |
| macOS            | Safari 12+                           | compliant |
| macOS            | Google Chrome (latest versions)      | compliant |
| macOS            | Mozilla Firefox (latest versions)    | compliant |
| iOS              | Safari for iOS 12.1 and later        | compliant |
| iOS              | Google Chrome (latest versions)      | compliant |
| Android          | Google Chrome (latest versions)      | compliant |
| Android          | Samsung Internet (latest versions)   | compliant |

'Compliant' means that components should look and function as they were designed to do in other modern browsers.

'Latest versions' refers to the latest stable version and the version immediately before that.

We no longer support older versions of Internet Explorer. This is due to the very low and falling numbers that these browsers make up compared to our total visits. Read the blog post [Changing our testing requirements for Internet Explorer 8, 9 and 10](https://technology.blog.gov.uk/2018/06/26/changing-our-testing-requirements-for-internet-explorer-8-9-and-10/) by GOV.UK for more information on why we have done this.

# Assistive technology support

We test the NHS.UK frontend with the following assistive technology:

| Software                 | Type               | Browser                             |
|--------------------------|--------------------|-------------------------------------|
| [JAWS](https://www.freedomscientific.com/Products/Blindness/JAWS)     | Windows desktop screen reader      | Internet Explorer 11, Chrome (latest version) |
| [NVDA](https://www.nvaccess.org/) | Windows desktop screen reader      | Firefox (latest versions)|
| [VoiceOver](https://www.apple.com/uk/accessibility/iphone/vision/)           | Apple mobile and desktop screen reader      | Safari 12+ |
| [TalkBack](https://support.google.com/accessibility/android/topic/3529932?hl=en-GB&ref_topic=9078845)           | Android mobile screen reader      | Chrome (latest version) |
| [Dragon NaturallySpeaking](https://www.nuance.com/en-gb/dragon.html)| Windows speech recognition | Internet Explorer 11 |
| [ZoomText](https://www.zoomtext.com/products/zoomtext-magnifierreader/)             | Windows desktop screen magnifier   | Internet Explorer 11 |

Testing with the various technologies above should cover the vast amount of
users who use assistive technologies.

We also test that our components:

- are accessible using a keyboard only
- function correctly when using [high contrast mode in Windows](https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode)
- function correctly when changing colour schemes in ZoomText

---

Next: [Git style guide](git-style-guide.md)
