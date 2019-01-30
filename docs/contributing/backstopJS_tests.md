# Visual regression testing - BackstopJS

[BackstopJS](https://github.com/garris/BackstopJS) is an open source visual regression testing framework, which automates visual regression testing of UI elements by comparing DOM screenshots over time. Tests can be run at different screen resolutions and also simulate key presses, clicks events and hover states. 

These tests run automatically within the continuous integration pipeline and run during all builds, pull requests and merges.

For full documentation on the BackstopJS framework, read the [BackstopJS documentation on GitHub](https://github.com/garris/BackstopJS/blob/master/README.md)

## Tests configuration

BackstopJS tests configuration and files can be found within the `backstop` folder in the [tests directory](https://github.com/nhsuk/nhsuk-frontend/tree/master/tests).

`backstop.json` contains all the test configuration and tests scenarios.

**`id`** – Used for screenshot naming. Set this property when sharing reference files with teammates -- otherwise omit and BackstopJS will auto-generate one for you to avoid naming collisions with BackstopJS resources.

**`viewports`** – An array of screen size objects your DOM will be tested against.  Add as many as you like -- but add at least one.

**`scenarios`** – This is where you set up your actual tests. The important sub properties are...

- **`scenarios[n].label`** – Required. Also used for screenshot naming.
- **`scenarios[n].url`** – Required. Tells BackstopJS what endpoint/document you want to test.  This can be an absolute URL or local to your current working directory.

_TIP: no other SCENARIO properties are required. Other properties can just be added as necessary_

You can find a full list of other SCENARIO properties within the [BackstopJS advanced scenarios documentation](https://github.com/garris/BackstopJS/blob/master/README.md#advanced-scenarios).

## Test commands

We use [Docker](https://www.docker.com/) to run our tests within a consistent environment.

Docker is installed on the continuous integration service automatically but if you want to run any of the tests locally you will need to have Docker installed.

### Run tests

To run the tests locally:

`docker-compose run backstop test`

### Update tests

If you want to update the existing tests reference screenshots (following any intentional changes):

`docker-compose run backstop reference`

### Add new tests

If you want to add new tests you will need to add the test scenarios to the `backstop.json` file following the [scenario configuration guidelines](#tests-configuration). Once you have added the new tests you will need to update the reference screenshots:

`docker-compose run backstop reference`
