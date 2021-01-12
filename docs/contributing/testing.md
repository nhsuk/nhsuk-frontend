
# Testing

## Screen resolution testing

You should test at all the standard device screen resolutions and the top 8 screen
resolutions for [NHS.UK](https://www.nhs.uk) (in both landscape and portrait mode).
This combined will give us confidence that it will work for the majority of our users.

### Standard devices

Google Chrome DevTools has a preset list of standard device screen resolutions to test against.
See [Simulate Mobile Devices with Device Mode in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/device-mode/)
and [Test Responsive and Device-specific Viewports](https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports).

### NHS website resolution statistics

These statistics are from the NHS website, using Google analytics, over a 1 year period (June 2017 to June 2018).

| Device                  | Screen resolution   | % of sessions |
|-------------------------|---------------------|---------------|
| iPhone 6-8              | 375x667             | 20.93%        |
| Galaxy S8               | 360x640             | 14.92%        |
| iPhone 5/SE             | 320x568             | 10.41%        |
| iPad                    | 768x1024            | 7.17%         |
| iPhone 6+, 6s+, 7+, 8+  | 414x736             | 4.87%         |
| Surface, iPad Pro       | 1366x768            | 4.10%         |
| Large Desktop           | 1920x1080           | 2.45%         |
| Small Desktop, Laptop   | 1280x1024           | 1.21%         |

## Browser support

'Compliant' means that components should look and function as they were designed to do in other modern browsers.

'Latest versions' refers to the latest stable version and the version immediately before that.

We no longer support older versions of Internet Explorer. This is due to the very low and falling numbers that these browsers make up compared to our total visits. Read the blog post [Changing our testing requirements for Internet Explorer 8, 9 and 10](https://technology.blog.gov.uk/2018/06/26/changing-our-testing-requirements-for-internet-explorer-8-9-and-10/) by GOV.UK for more information on why we have done this.

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

## Assistive technology support

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

### How to test

#### Screen readers

The following should be checked when testing using a screen reader:

- every element can be read
- links and form elements can be keyboard tabbed to
- landmarks are announced correctly
- ARIA attributes are correctly used
- form elements can be used correctly


#### Screen magnifiers

The following should be considered when testing using a screen magnifier:

- use various levels of magnification, up to at least 10 times
- ensure scroll width for content is not too long and can be easily understood
- ensure form elements and their labels are close to each other


#### Speech recognition

The following should be considered when testing using speech recognition software:

- every link can be accessed
- every form element can be accessed
- every interactive element can be accessed


#### Colour schemes

Use the operating system's different colour schemes and ensure that content is
clear and viewable. Examples of colour schemes include:

- different contrast modes
- inverted colours
- greyscale

---

Next: [Automated testing](automated-testing.md)
