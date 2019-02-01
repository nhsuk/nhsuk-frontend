# Running the application locally

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

You can clone the repository directly if you're a member of the [NHS.UK GitHub organisation](https://github.com/nhsuk/)

```
git clone git@github.com:nhsuk/nhsuk-frontend.git nhsuk-frontend
```

Otherwise you'll have to clone your own fork

```
git clone https://github.com/[Username]/nhsuk-frontend.git nhsuk-frontend
```

> Replace '[Username]' in the git clone command above with your own GitHub username.

## 3. Install dependencies

We use [node package manager (npm)](https://docs.npmjs.com/getting-started/what-is-npm) to manage third party dependencies.

Whilst in the project directory you will need to install the dependencies listed in `package.json`

```
cd nhsuk-frontend
```

```
npm install
```

## 4. Start a local server

This will build files, serve web pages and watch for changes when you save a file.

```
npm start
```

> The application will be available at [http://localhost:3000](http://localhost:3000).

---

Next: [Application architecture](application-architecture.md)
