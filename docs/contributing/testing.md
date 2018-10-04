# Testing

## Unit tests

> To be completed.

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

'Compliant' means that the components must look as good and function as well as they do in other modern browsers.

'Functional' means the components may not look perfect in the given browser, but must still be usable without errors and without 'looking broken'.

## Assistive technology support

| Software                 | Type               | Browser                             |
|--------------------------|--------------------|-------------------------------------|
| JAWS                     | screen reader      | Internet Explorer 11                |                     
| ZoomText                 | screen magnifier   | Internet Explorer 11                |
| Dragon NaturallySpeaking | speech recognition | Internet Explorer 11                |
| NVDA                     | screen reader      | Firefox (latest versions)           |
| VoiceOver                | screen reader      | Safari on iOS10 and OS X            |

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
