# Staying up to date with changes

Staying up to date with the latest version of NHS.UK frontend helps make sure your service:

- continues to look, feel and behave consistently with the NHS website
- benefits from the latest accessibility and usability improvements
- works correctly in the latest browsers and assistive technologies, and benefits from any new improvements made possible in those versions

As with all software dependencies, you should have a plan to regularly update NHS.UK frontend as part of the ongoing maintenance of your service.

## Getting updates when we publish a new release

To make sure you're notified when we publish a new release, you can:

- [watch the nhsuk-frontend repository](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) on GitHub
- join our [free Slack workspace](https://service-manual.nhs.uk/slack) or find other [community resources](https://service-manual.nhs.uk/community-and-contribution/community-resources)
- use an automated dependency monitoring tool like [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates)

## Find out which version you're currently using

If you [installed NHS.UK frontend using npm](./installing-with-npm.md), find out which version of NHS.UK frontend you're using by running `npm list nhsuk-frontend` from the root of your project:

```console
$ npm list nhsuk-frontend
project@1.0.0 /path/to/your/project
└── nhsuk-frontend@10.0.0
```

If you [installed NHS.UK frontend using precompiled files](./installing-compiled.md), the CSS and JavaScript files should include the version number as part of the filename.

## Understanding what has changed

How to interpret the version numbering and the release notes.

### How the version numbering works

NHS.UK frontend's version number follows the format `MAJOR.MINOR.PATCH` where `MAJOR`, `MINOR` and `PATCH` are numbers.

We aim to follow [semantic versioning](https://semver.org/). This means we will:

- increase the `PATCH` number if a release only includes bug fixes, for example going from v9.6.0 to v9.6.1
- increase the `MINOR` number and reset the `PATCH` number to 0 if a release includes new features, for example going from v9.6.1 to v9.7.0
- increase the `MAJOR` number and reset the `MINOR` and `PATCH` numbers to 0 if a release might require you to make changes to your service when you update (see [breaking changes](#breaking-changes)), for example going from v9.6.0 to v10.0.0

The intention is to make sure you can easily update to new minor and patch releases without needing to make any changes to your service.

However, what you consider a breaking change can depend on how you are using NHS.UK frontend in your service. You should always read the release notes and test your service when upgrading to a new version.

### Using the release notes

We publish [release notes on GitHub](https://github.com/nhsuk/nhsuk-frontend/releases) for every release. They document the changes we've made, including both technical and design changes.

When upgrading to a newer version of NHS.UK frontend you should read all the release notes from the version you are currently using, up to and including the version you are upgrading to.

The release notes can be quite long, especially for new major versions. It's important to read them carefully, but you might find many of the changes do not affect your service.

#### :boom: **Breaking changes**

We'll only include breaking changes in major releases.

Breaking changes might require you to take some action so your service continues to work.

You might find many of the breaking changes do not affect you, especially if you have a process for dealing with deprecations and upgrading versions when upgrading between minor and patch releases.

Some breaking changes involve making changes to your HTML. If you're using our Nunjucks macros to generate the HTML for your service, the changes are usually automatically applied.

#### :recycle: **Changes**

We might include recommended or non-breaking changes in any release.

You do not need to make recommended changes for your service to keep working, but these changes often provide improvements of some kind. For example, making something more accessible.

#### :new: **New features**

We'll only include new features in major or minor releases.

Some features will require you to make changes to your service, if you want to use them.

#### :wastebasket: **Deprecated features**

We might include deprecations in any release.

We deprecate things to communicate a future breaking change, usually scheduled to be made in the next major version.

For example, we would deprecate something in v9.6.0 before we remove it in v10.0.0 at which point we would include it as a breaking change in the release notes.

If you deal with deprecations as they come up you can reduce the amount of work required to upgrade to the next major version.

#### :wrench: **Fixes**

We might include fixes in any release.

Fixes include bug fixes and small improvements that do not require you to do anything.

If a fix requires you to do something, we will include it as a recommended or breaking change.

## Updating to the latest version

Once you know what has changed, you're ready to upgrade to the latest version.

You're responsible for making sure your service continues to work as expected after upgrading.

You might want to consider using automated testing or visual regression tests to increase your confidence and minimise the amount of manual testing required.

### Updating to the latest version if you installed NHS.UK frontend using npm

> If you need to update NHS.UK frontend for a specific package in a monorepo project (for example using npm workspaces, Yarn workspaces, or pnpm workspaces), please make sure to adapt the commands to the tool you are using.

To update to the most recent version, run:

```console
npm install nhsuk-frontend@latest
```

If you want to install an earlier version, replace latest with the version that you want to update to. For example:

```console
npm install nhsuk-frontend@9.6.0
```

If you want to install the most recent version of NHS.UK frontend v9.x, run:

```console
npm install nhsuk-frontend@latest-v9
```

### Updating to the latest version if you installed NHS.UK frontend using precompiled files

Follow the instructions on the page [Try NHS.UK frontend using precompiled files](./installing-compiled.md), replacing any files that already exist.

You should also remove older versions of the precompiled CSS and JavaScript, and any other files that no longer exist in the latest release.

## Thanks to the Government Digital Service (GDS)

This documentation has been taken from [Staying up to date with changes](https://frontend.design-system.service.gov.uk/staying-up-to-date/) with a few minor adaptations.
