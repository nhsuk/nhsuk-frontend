/**
 * Remove all compiled files
 *
 * @param {string[]} pattern - glob patterns or paths to clean
 * @param {string[]} [ignore] - glob patterns or paths to ignore
 */
export async function clean(pattern, ignore) {
  const { deleteAsync } = await import('del')
  await deleteAsync(pattern, { ignore })
}
