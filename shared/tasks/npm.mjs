import { task } from '@nhsuk/frontend-tasks'
import runScript from '@npmcli/run-script'
import PluginError from 'plugin-error'

/**
 * Spawns Node.js child process for npm script
 *
 * @param {string} name - npm script name
 * @param {string[]} [args] - npm script CLI arguments
 */
export async function run(name, args = []) {
  try {
    const task = await runScript({
      args,
      event: name,
      path: process.cwd(),
      stdio: 'inherit'
    })

    // Throw on missing npm script
    if (!task.cmd) {
      throw new Error(`Task '${name}' not found`)
    }
  } catch (cause) {
    throw new PluginError(`npm run ${name}`, cause, {
      showProperties: false
    })
  }
}

/**
 * Creates a Gulp task for run()
 *
 * @param {string} name - npm script name
 * @param {string[]} [args] - npm script CLI arguments
 */
export function script(name, args = []) {
  let displayName = `npm run ${name}`

  if (args.length) {
    displayName = `${displayName} ${args.join(' ')}`
  }

  return task.name(displayName, () => run(name, args))
}
