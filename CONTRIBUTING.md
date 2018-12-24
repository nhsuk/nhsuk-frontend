# Contribute to NHS.UK frontend

## Requirements

To run NHS.UK frontend locally you'll need to:
* [set up git](https://help.github.com/articles/set-up-git/)
* [install Node.js](https://nodejs.org/en/)
We recommend to use the [long-term support (LTS) version of Nodejs](https://nodejs.org/en/download/), rather than the latest beta version.

> Type `git --version` to check if git is installed. This should print a version number like "git version 2.18.0".

> Type `node -v` to check if Node is installed. This should print a version number like "v8.11.3".

## 1. Fork the repository

[Fork the repository](https://help.github.com/articles/fork-a-repo/) first, if you're an external contributor.

## 2. Clone the repository

You can clone the repository directly if you're a member of the [NHS.UK GitHub organisation](https://github.com/nhsuk/). Use this code:

```
git clone git@github.com:nhsuk/nhsuk-frontend.git nhsuk-frontend

cd nhsuk-frontend
```

You'll have to clone your own fork if you're not a member.

Replace 'Username' in the git clone command below with your GitHub username.

```
git clone https://github.com/Username/nhsuk-frontend.git nhsuk-frontend

cd nhsuk-frontend
```

## 3. Install dependencies

We use [node package manager (npm)](https://docs.npmjs.com/getting-started/what-is-npm) to manage the dependencies in development, which is included with the Nodejs installation.

> Make sure you are in the project directory when you run the `npm install` command below. You can switch to the project directory with the command `cd nhsuk-frontend`.

```
npm install
```

## 4. Start a local server

This will build files, serve web pages and watch for changes when you save a file.

```
npm start
```

> The application will be available at [http://localhost:3000](http://localhost:3000).

## 5. Make your changes

You can read our [getting started documentation](/docs/contributing/getting-started.md) to learn more about our application architecture, tooling, coding standards, testing policies and our pipelines.

## 6. Create a pull request

You will need to [create a pull request](https://help.github.com/articles/creating-a-pull-request/) with your changes. One of the NHS.UK frontend will review it and approve or feedback on changes required.

You'll need to [create a pull request from a fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) if you have cloned your own fork.
