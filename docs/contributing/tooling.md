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

| task     | action                                                  |
| -------- | ------------------------------------------------------- |
| `style`  | Compiles CSS only, including minified files in `dist/`  |
| `script` | Compiles JS only, including minified files in `dist/`   |
| `build`  | Deletes `dist/` contents then runs `style` and `script` |
| `zip`    | Creates a distributable zip file in `dist/`             |
| `watch`  | Runs `style` and `script` when there are changes        |

### Review app only

To list all available tasks for the review app:

```sh
npx --workspace @nhsuk/frontend-review -- gulp --tasks
```

For a specific task, run `npx --workspace @nhsuk/frontend-review -- gulp <task-name>` on the command line:

| task    | action                                      |
| ------- | ------------------------------------------- |
| `build` | Recompile review app                        |
| `watch` | Recompile review app when there are changes |
| `serve` | Serve review app on port 3000               |

---

Next: [Linting](linting.md)
