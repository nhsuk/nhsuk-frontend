# Tooling

## npm scripts

To run an npm script, run `npm run <script_name>` on the command line.

| command | action                                                     |
| ------- | ---------------------------------------------------------- |
| `start` | Runs the _default_ gulp task (runs pre script `build`)     |
| `test`  | Runs tests using ESLint (runs pre scripts `lint`, `build`) |
| `lint`  | Runs linting and formatting checks only                    |
| `build` | Compiles CSS, JS and builds the review app                 |

You can optionally add `--ignore-scripts` to skip pre and post scripts.

For example, skip straight to the local server without building again:

```console
npm start --ignore-scripts
```

## Gulp tasks

We use [Gulp](https://gulpjs.com/) for automating common tasks.

Gulp tasks are defined in:

- [Project `gulpfile.mjs`](/gulpfile.mjs) and [`shared/tasks/`](/shared/tasks) folder
- [Package `gulpfile.mjs` for NHS.UK frontend](/packages/nhsuk-frontend/gulpfile.mjs)
- [Package `gulpfile.mjs` for the review app](/packages/nhsuk-frontend-review/gulpfile.mjs)

### NHS.UK frontend only

To list all available tasks for the NHS.UK frontend package:

```sh
npx --workspace nhsuk-frontend -- gulp --tasks
```

For a specific task, run `npx --workspace nhsuk-frontend -- gulp <task-name>` on the command line:

| task       | action                                                                  |
| ---------- | ----------------------------------------------------------------------- |
| `styles`   | Compile NHS.UK frontend styles only                                     |
| `scripts`  | Compile NHS.UK frontend scripts only                                    |
| `fixtures` | Compile NHS.UK frontend component fixtures and macro options            |
| `assets`   | Copy NHS.UK frontend assets only                                        |
| `build`    | Run tasks `styles`, `scripts`, `fixtures`, `assets` once only           |
| `watch`    | Run tasks `styles`, `scripts`, `fixtures`, `assets` on relevant changes |
| `release`  | Create GitHub release distribution zip file                             |

### Review app only

To list all available tasks for the review app:

```sh
npx --workspace @nhsuk/frontend-review -- gulp --tasks
```

For a specific task, run `npx --workspace @nhsuk/frontend-review -- gulp <task-name>` on the command line:

| task       | action                                                                |
| ---------- | --------------------------------------------------------------------- |
| `styles`   | Compile review app styles only                                        |
| `scripts`  | Compile review app scripts only                                       |
| `assets`   | Copy review app assets only                                           |
| `html`     | Compile review app Nunjucks into HTML                                 |
| `validate` | Validate review app Nunjucks HTML output                              |
| `build`    | Run tasks `styles`, `scripts`, `assets`, `html`, `validate` once only |
| `watch`    | Run tasks `styles`, `scripts`, `assets`, `html` on relevant changes   |
| `serve`    | Serve review app on port 3000                                         |

---

Next: [Linting](linting.md)
