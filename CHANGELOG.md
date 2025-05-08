<!-- @format -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **CI/CD & Automation**:
  - `.github/workflows/lint.yml`: Added to automate ESLint and Prettier checks on the repository.
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
- Updated `.prettierignore` to exclude `package-lock.json` from formatting checks.
- Updated ESLint config to ignore `tsconfig.json` when linting JSON files.
- Updated CSpell config to include TypeScript dictionary.
- Expanded custom project terms dictionary for CSPell with new terms.
- Updated `lint-staged` in `package.json` to include TypeScript files.

[Unreleased]: https://github.com/topfrag-gg/codstats-api/compare/main%40%7B1day%7D...HEAD
