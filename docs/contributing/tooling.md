# Tooling

## npm scripts

To run an npm script, run `npm run <script_name>` on the command line.

| command | action                                                     |
| ------- | ---------------------------------------------------------- |
| `start` | Runs the _default_ gulp task (runs pre script `build`)     |
| `test`  | Runs tests using ESLint (runs pre scripts `lint`, `build`) |
| `lint`  | Runs linting and formatting checks only                    |
| `build` | Compiles CSS, JS and builds documentation                  |

You can optionally add `--ignore-scripts` to skip pre and post scripts.

For example, skip straight to the local server without building again:

```console
npm start --ignore-scripts
```

## Gulp tasks

We use [gulp](https://gulpjs.com/) for automating common tasks.

To run a gulp task, run `npx gulp <task_name>` on the command line.

| task         | action                                                                 |
| ------------ | ---------------------------------------------------------------------- |
| `default`    | Serve the documentation on port 3000. Recompile when there are changes |
| `style`      | Compiles CSS only, including minified files in `dist/`                 |
| `script`     | Compiles JS only, including minified files in `dist/`                  |
| `build`      | Deletes `dist/` contents then runs `style` and `script`                |
| `zip`        | Creates a distributable zip file in `dist/`                            |
| `watch`      | Runs `style` and `script` when there are changes                       |
| `docs:build` | Recompile documentation                                                |
| `docs:watch` | Recompile documentation when there are changes                         |
| `docs:serve` | Serve documentation on port 3000                                       |

---

Next: [Linting](linting.md)
