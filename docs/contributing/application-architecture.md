# Application architecture

The application generates static HTML pages to preview components, with each component having their own page, these files can be found in `packages/nhsuk-frontend-review/`. To make changes to components, you will have to edit the individual components files within `packages/nhsuk-frontend/`. These are usually the only 2 folders that you will need.

---

- `.github/`

  GitHub specific files, such templates for pull requests and issues.

- `dist/` (Automatically generated)

  Automatically generated compiled files and build assets for GitHub pages, releases and npm packages. Don't manually edit files in this folder as they will be deleted.

- `docs/`

  Markdown files for documentation on GitHub, such as contributing to the project, coding standards and more.

- `node_modules/` (Automatically generated)

  Node.js package manager (npm) modules for third party dependencies. This folder is automatically generated when running `npm install`. Don't manually edit files in this folder as they will be deleted.

- `packages/`

  - `nhsuk-frontend-review`

    - `dist/` **contains auto-generated files**

      Builds of nhsuk-frontend-review served by [GitHub Pages](https://pages.github.com).

    - `src/`

      Nunjuck (HTML) files for the component example pages that you see at http://localhost:3000/nhsuk-frontend when running the application locally and on https://nhsuk.github.io/nhsuk-frontend

  - `nhsuk-frontend`

    Package published on npm.
    Consume all of nhsuk-frontend through a single package.

    - `dist/` **contains auto-generated files**

      Builds of nhsuk-frontend published and exported from the npm package.

    - `src/`

      NHS.UK frontend individual components files, such as all the stylesheet (scss) files, HTML templates (nunjucks), READMEs and assets.

- `shared/`

  - `tasks/`

    Read about [npm and Gulp tasks](tooling.md) for more information.

- `tests/`

  - `backstop/`

    BackstopJS visual regression test output and reference files. See project [backstop.config.js](../../backstop.config.js) for more information.

---

Next: [Coding standards and style guide](coding-standards.md)
