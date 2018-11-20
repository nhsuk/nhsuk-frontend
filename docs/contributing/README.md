# Contributing to NHS.UK Frontend

## Requirements

To run NHS.UK Frontend locally you'll need to [set up git](https://help.github.com/articles/set-up-git/) and have [Node.js](https://nodejs.org/en/) installed.
We recommend using the [long-term support (LTS)](https://nodejs.org/en/download/) version of Nodejs, rather than the latest beta version.

> To check if you have git installed, type `git --version`. This should print a version number such as "git version 2.18.0".

> To check if Node is installed, type `node -v`. This should print a version number such as "v8.11.3".

## 1. Fork the repository

If you're an external contributor make sure to [fork the repository](https://help.github.com/articles/fork-a-repo/) first.

## 2. Clone repository

If you're a member of the [NHS.UK GitHub organisation](https://github.com/nhsuk/) you can clone the repository directly:

```
git clone git@github.com:nhsuk/nhsuk-frontend.git nhsuk-frontend

cd nhsuk-frontend
```

Otherwise you'll have to clone your own fork:

```
git clone https://github.com/Username/nhsuk-frontend.git nhsuk-frontend

cd nhsuk-frontend
```

> If you're cloning you're own fork, make sure you replace 'Username' in the git clone command above with your own GitHub username.

## 3. Install dependencies

We use [npm](https://docs.npmjs.com/getting-started/what-is-npm) to manage the dependencies in development, which is included with the Nodejs installation.

```
npm install
```

> Make sure you are in the project directory when you run the `npm install` command, you can switch to the project directory with `cd nhsuk-frontend`


## 4. Start a local server

This will build files, serve web pages and watch for changes when you save a file.

```
npm start
```

> The application will be available at [http://localhost:3000](http://localhost:3000).

## 5. Make your changes

You can read our [getting started documentation](./getting-started.md) to learn more about our application architecture, tooling, coding standards, testing policies and our pipelines.

> If you need help or have any question you can contact us on [Slack](https://nhsuk.slack.com/messages/CCPLQ9YAJ) or [send us an email](mailto:nhsdigital.NHSUK-Frontend@nhs.net)

## 6. Create a pull request

You will need to [create a pull request](https://help.github.com/articles/creating-a-pull-request/) with your changes for one of the NHS.UK Frontend team to review.

If you have cloned your own fork you will need to [create a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/).
