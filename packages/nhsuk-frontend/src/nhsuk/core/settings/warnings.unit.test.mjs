import { compileStringAsync, sassNull } from 'sass-embedded'

describe('Warnings settings', () => {
  const sassModules = `
    @use "sass:list";
    @use "core/settings/warnings" as *;
  `

  /** @type {Logger} */
  let logger = {}

  beforeEach(() => {
    // Create a mock warn function that we can use to override the native @warn
    // function, that we can make assertions about post-render.
    logger.warn = jest.fn().mockReturnValue(sassNull)
  })

  it('Fires a @warn with the message plus the key suffix text', async () => {
    const sass = `
      ${sassModules}

      @include nhsuk-warning('test', 'This is a warning.');
    `

    await compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
      logger
    })

    // Expect our mocked @warn function to have been called once with a single
    // argument, which should be the test message
    expect(logger.warn).toHaveBeenCalledWith(
      'This is a warning. To silence this warning, update ' +
        '$nhsuk-suppressed-warnings with key: "test"',
      expect.anything()
    )
  })

  it('Only fires one @warn per warning key', async () => {
    const sass = `
      ${sassModules}

      @include nhsuk-warning('test', 'This is a warning.');
      @include nhsuk-warning('test', 'This is a warning.');
    `

    await compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
      logger
    })

    // Expect our mocked @warn function to have been called once with a single
    // argument, which should be the test message
    expect(jest.mocked(logger.warn)?.mock.calls).toHaveLength(1)
  })

  it('fires every @warn if $silence-further-warnings is false', async () => {
    const sass = `
      ${sassModules}

      @include nhsuk-warning('test', 'This is a warning.', $silence-further-warnings: false);
      @include nhsuk-warning('test', 'This is a warning.');
    `

    await compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
      logger
    })

    expect(jest.mocked(logger.warn)?.mock.calls).toHaveLength(2)
  })

  it('Does not fire a @warn if the key is already in $nhsuk-suppressed-warnings', async () => {
    const sass = `
      ${sassModules}

      $nhsuk-suppressed-warnings: list.append($nhsuk-suppressed-warnings, 'test');
      @include nhsuk-warning('test', 'This is a warning.');
    `

    await compileStringAsync(sass, {
      loadPaths: ['packages/nhsuk-frontend/src/nhsuk'],
      logger
    })

    expect(logger.warn).not.toHaveBeenCalled()
  })
})

/**
 * @import { Logger } from 'sass-embedded'
 */
