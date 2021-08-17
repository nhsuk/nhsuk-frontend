# Automated testing

## Visual regression testing - BackstopJS

[BackstopJS](https://github.com/garris/BackstopJS) is an open source visual regression testing framework, which automates visual regression testing of UI elements by comparing DOM screenshots over time. Tests can be run at different screen resolutions and also simulate key presses, clicks events and hover states.

These tests run automatically within the continuous integration pipeline and run during all builds, pull requests and merges.

For full documentation on the BackstopJS framework, read the [BackstopJS documentation on GitHub](https://github.com/garris/BackstopJS/blob/master/README.md)

### Tests configuration

BackstopJS tests configuration and files can be found within the `backstop` folder in the [tests directory](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests).

`backstop.js` contains all the test configuration and tests scenarios.

**`id`** – Used for screenshot naming. Set this property when sharing reference files with teammates -- otherwise omit and BackstopJS will auto-generate one for you to avoid naming collisions with BackstopJS resources.

**`viewports`** – An array of screen size objects your DOM will be tested against.  Add as many as you like -- but add at least one.

**`scenarios`** – This is where you set up your actual tests. The important sub properties are...

- **`scenarios[n].label`** – Required. Also used for screenshot naming.
- **`scenarios[n].url`** – Required. Tells BackstopJS what endpoint/document you want to test.  This can be an absolute URL or local to your current working directory.

_TIP: no other SCENARIO properties are required. Other properties can just be added as necessary_

You can find a full list of other SCENARIO properties within the [BackstopJS advanced scenarios documentation](https://github.com/garris/BackstopJS/blob/master/README.md#advanced-scenarios).

### Test commands

We use [Docker](https://www.docker.com/) to run our tests within a consistent environment, this prevents cross-platform rendering issues (such as font rendering and aliasing).

Docker is installed on the continuous integration service automatically but if you want to run any of the tests locally you will need to have Docker installed. Install docker on your machine from the [Docker Downloads Page](https://hub.docker.com/search/?type=edition&offering=community&architecture=amd64) and make sure Docker is running on your machine.

#### Run tests

```
npm run backstop:test
```

This will start the application and run the tests concurrently.

Each time that a test is run locally a new set of bitmaps will be created in `tests/backstop/<timestamp>/`.

Once the test bitmaps are generated, a report comparing the most recent test bitmaps against the current reference bitmaps will display.

If you run tests frequently, your `tests/backstop/<timestamp>/` folder may have a lot of historic tests bitmaps, you can delete the contents of this folder with `npm run backstop:clean`.

#### Run an individual test

To run a test on an individual scenario, pass a `--filter<scenarioLabelRegex>` argument to just run scenarios matching your scenario label.

```
npm run backstop:test -- --filter="Action link"
```

#### Update test references

BackstopJS creates a set of test bitmaps each time tests are run and compares them with the reference bitmaps.

If you have made intentional visual changes, the reference bitmaps need to be updated for the tests (and future tests) to pass.

After running the tests (`npm run backstop:test`) you can update the reference screenshots with:

```
npm run backstop:approve
```

#### Add new tests scenarios

If you want to add new tests you will need to add the test scenarios to the `backstop.js` file following the [scenario configuration guidelines](#tests-configuration). Once you have added the new tests you will need to update the reference bitmaps to include a reference for the new tests.

```
npm run backstop:ref
```

---

Next: [Support for browsers and assistive technology](browser-support.md)
