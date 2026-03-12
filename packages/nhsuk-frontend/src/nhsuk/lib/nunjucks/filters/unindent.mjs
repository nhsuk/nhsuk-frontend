/**
 * Remove indentation from code blocks
 *
 * @param {string} code - Code with indentation
 * @returns {string} Code with indentation removed
 */
export function unindent(code) {
  const lines = code.split(/\n/)

  // Skip when some lines are not indented
  if (lines.some((line) => !!line && line === line.trimStart())) {
    return code
  }

  const indents = lines
    .filter((line) => /^\s+/.test(line))
    .flatMap((line) => /^\s+/.exec(line)?.[0] ?? [])

  // Skip when no lines are indented
  if (!indents.length) {
    return code
  }

  // Find smallest indentation
  const indent = indents.reduce(
    (a, b) => (a.length <= b.length ? a : b),
    indents[0]
  )

  // Remove smallest indentation from all lines
  return lines
    .map((line) =>
      line.startsWith(indent) ? line.substring(indent.length) : line
    )
    .join('\n')
}
