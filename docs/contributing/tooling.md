
# Tooling

## npm scripts

| command | action |
|---------|--------|
| `npm start` | Runs the *default* gulp task |
| `npm test` | Runs CSS linting |
| `npm run bundle` | See gulp bundle |


## Gulp tasks

We use [gulp](https://gulpjs.com/) for automating common tasks.

To run a gulp task, run `./node_modules/.bin/gulp <task_name>` on the command line.

| task | action |
|------|--------|
| `default` | Serve the documentation on port 3000. Recompile when there are changes |
| `clean` | Remove all compiled files |
| `style` | Compiles CSS |
| `bundle` | Creates distributable CSS and JS files in `dist/` |
| `watch` | Recompile documentation and distributables when there are changes |
| `docs:build` | Recompile documentation |
| `docs:serve` | Serve documentation on port 3000 |
