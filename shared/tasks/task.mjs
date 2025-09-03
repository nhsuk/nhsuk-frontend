/**
 * Creates a Gulp task with display name
 *
 * {@link https://gulpjs.com/docs/en/api/task#task-metadata}
 *
 * @template {TaskFunction} TaskFunction
 * @param {string} displayName - Task name for Gulp CLI
 * @param {TaskFunction} taskFn - Task function to wrap
 */
export function name(displayName, taskFn) {
  taskFn.displayName = displayName
  return taskFn
}

/**
 * @import { TaskFunction } from 'gulp'
 */
