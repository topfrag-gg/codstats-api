<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.1] - 2025-05-13

### Added

- Enhanced linting, formatting, and spellchecking tools.
- **Tooling**: Integrated `@cspell/dict-docker` into the CSpell configuration.
- **ESLint**: Installed and configured the following plugins:
  - `eslint-plugin-prettier`
  - `eslint-config-prettier`
  - `eslint-plugin-jsdoc`
  - `eslint-plugin-unicorn`
  - `eslint-plugin-promise`
  - `eslint-plugin-n`
  - `eslint-plugin-security`
  - `eslint-plugin-import`
  - `eslint-plugin-unused-imports`
  - `eslint-plugin-sonarjs`
- **Prettier**: Enabled import sorting with `@ianvs/prettier-plugin-sort-imports`.

### Changed

- **ESLint**: Configured rules for the following plugins:
  - `jsdoc`, `node`, `unicorn`, `promise`, `security`, `prettier`, `import`, `sonarjs`.
- Added general ESLint rules for JavaScript and TypeScript files.
- Added ESLint settings to `.vscode/settings.json` file.
- **Prettier**: Updated `quoteProps` option from `"consistent"` to `"as-needed"`.
- **Prettier**: Fixed incorrect `npm-lock.yaml` pattern in `.prettierignore` file.

### Fixed

- **Code & Docs**: Fixed and updated JSDoc comments in the following files:
  - `src/middleware/error-handler.ts`
  - `src/middleware/not-found.ts`
  - `scripts/loader.ts`.

### Refactored

- **NPM Scripts**: Updated the `lint:all` script in `package.json` to also run `prettier:check`.

### Removed

- **Prettier**: Removed `prettier-plugin-jsdoc`.
- **Code & Docs**: Removed unnecessary comments (`// import modules`) from middleware and route files.

## [0.1.0] - 2025-05-09

### Added

- **Deployment**:
  - `fly.toml`: Configuration file for deploying the API to [Fly.io](https://fly.io/).
  - `Dockerfile`: Added to containerize the API for cloud deployment.
  - `.dockerignore`: Added to exclude unnecessary files from Docker build context.
- **CI/CD & Automation**:
  - `.github/workflows/fly-deploy.yml`: Added workflow to automate API deployment to Fly.io.
  - `.github/workflows/lint.yml`: Added workflow to automate ESLint and Prettier checks on the repository.
  - `.github/workflows/commitlint.yml`: Added workflow for pushed commit message linting.
  - `.github/workflows/spellcheck.yml`: Added workflow to check for spelling errors on pushed commits.
- **Git Hooks**:
  - `.husky/commit-msg`: Added to check commit message format with Commitlint.
  - `.husky/pre-commit`: Added to lint, format, and spell check staged files.
- **Linting & Formatting**:
  - `commitlint.config.js`: Added to enforce consistent Git commit message formatting using Commitlint.
  - `cspell.json`: Configuration for code and documentation spell checking.
  - `.cspell/project-dependencies.txt`: Dictionary with names of dependencies that CSpell doesn't recognize.
  - `.cspell/project-terms.txt`: Dictionary with project specific terms.
  - Installed and configured ESLint with TypeScript support for code quality and static analysis.
  - Installed and configured Prettier for consistent code formatting.
  - Installed `npm-run-all` to orchestrate sequential/parallel npm scripts.
  - Added `lint`, `lint:fix`, `lint:all`, `prettier:check`, `prettier:fix`, `format`, and `spellcheck` scripts to
    `package.json` for streamlined development workflows.
- **Project Infrastructure**:
  - `.editorconfig`: Added to ensure consistent file and code formatting across different editors and IDEs.
  - `.gitattributes`: Added to handle line endings and file types in Git, ensuring consistency across platforms.
  - `.gitignore`: Added to exclude unnecessary files (e.g., `node_modules`, etc.) from version control.
  - `.npmrc`: Added config settings for the `npm` CLI.
  - `.nvmrc`: Added to specify the Node.js version for consistent development environments.
  - `.vscode/extensions.json`: Added list of recommended VSCode extensions.
  - `.vscode/settings.json`: Added to establish workspace settings for contributors on VSCode.
- **Project Metadata**:
  - `package-lock.json`: Added to track the exact dependency tree and ensure reproducible builds.
  - `package.json`: Added project metadata, installed development dependencies, and various scripts.
- **Documentation**:
  - `LICENSE`: Added open-source [project license](./LICENSE) MIT License.
  - `CHANGELOG.md`: Added to document all notable changes to the project.
  - `README.md`: Added to provide an overview of the project.
- **Project Configuration**:
  - `config/default.js` and `config/production.js`: Environment-specific configuration files for application setup.
  - `tsconfig.json`: TypeScript compiler configuration.
  - `nodemon.json`: Configuration for automatic server reloading during development.
- **Scripts**:
  - `scripts/build.js`: Script for building the application.
  - `scripts/loader.js`: Script for dynamic module loading for `nodemon`.
- **Middleware**:
  - `src/middleware/api-redirect.ts`: Middleware to handle base API path redirection.
  - `src/middleware/error-handler.ts`: Centralized error-handling middleware.
  - `src/middleware/not-found.ts`: Middleware to handle 404 Not Found responses.
- **Libraries**:
  - `src/libs/cors.ts`: CORS configuration helper.
  - `src/libs/express.ts`: Express app initialization.
  - `src/libs/helmet.ts`: Helmet middleware setup for HTTP header security.
- **Routing**:
  - `src/routes/index.routes.ts`: Root route handler.
  - `src/routes/health.routes.ts`: Health check endpoint routes.
- **Application Entrypoints**:
  - `src/app.ts`: Express application setup.
  - `src/server.ts`: Application HTTP server bootstrapper.
  - `index.ts`: Main entrypoint to initialize and run the application.
- **Public Assets**:
  - `public/`: Directory for serving static assets like favicons and other images.

### Changed

- Fixed and enhanced the pre-commit hook to lint, format, and spellcheck staged files only.
- Updated VSCode workspace settings in `.vscode/settings.json`:
  - Excluded `dist` and `node_modules` directories from file explorer.
  - Enabled Prettier config requirement with `"prettier.requireConfig": true` and specified config path.
  - Configured JavaScript formatting preferences (single quotes, semicolons, braces placement).
- Prettier formatting applied to commitlint config, GitHub workflows, LICENSE file, and README.md.
- Updated `.prettierignore` to exclude `package-lock.json`, and `LICENSE` file from formatting and formatting checks.
- Updated ESLint config to ignore `tsconfig.json` when linting JSON files.
- Updated CSpell config to include TypeScript dictionary.
- Expanded custom project terms dictionary for CSPell with new terms.
- Updated `lint-staged` in `package.json` to include TypeScript files.
- Replaced Windows-specific `rd /s /q` clean command with cross-platform `rimraf`.
- Installed `open-cli` and updated the `docs` script to work cross-platform.
- Refactored `scripts/build.js` to delegate all cleanup steps to the `clean` script.
- Added new scripts to `package.json`: `start:prod`, `type-check`, `clean`, `reset`, `deploy`, and `docs`.
- Added [project structure](./README.md#project-structure) section to `README.md` file.
- Project name in the main heading of the `README.md` file.

### Fixed

- Fixed the links attached to the [shields.io/](https://shields.io/) badges at the top of the `README.md` file.

### Removed

- Removed Prettier format pragma from the top of the `LICENSE` file to ensure correct license detection by GitHub.

### Refactored

- N/A (no refactors in this release)

[Unreleased]: https://github.com/topfrag-gg/codstats-api/compare/v0.1.1...HEAD
[0.1.1]: https://github.com/topfrag-gg/codstats-api/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/topfrag-gg/codstats-api/releases/tag/v0.1.0
