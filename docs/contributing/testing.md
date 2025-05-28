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

| Device                 | Screen resolution | % of sessions |
| ---------------------- | ----------------- | ------------- |
| iPhone 6-8             | 375x667           | 20.93%        |
| Galaxy S8              | 360x640           | 14.92%        |
| iPhone 5/SE            | 320x568           | 10.41%        |
| iPad                   | 768x1024          | 7.17%         |
| iPhone 6+, 6s+, 7+, 8+ | 414x736           | 4.87%         |
| Surface, iPad Pro      | 1366x768          | 4.10%         |
| Large Desktop          | 1920x1080         | 2.45%         |
| Small Desktop, Laptop  | 1280x1024         | 1.21%         |

Find out about [browser support](./browser-support.md#browser-support) and [assistive technology](./browser-support.md#assistive-technology-support).

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
