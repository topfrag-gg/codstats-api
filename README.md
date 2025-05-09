<!-- @format -->

# CODStats API

![GitHub License](https://img.shields.io/github/license/topfrag-gg/codstats-api?color=blue)
![Version](https://img.shields.io/github/v/tag/topfrag-gg/codstats-api)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/topfrag-gg/codstats-api/build.yml)
![Contributors](https://img.shields.io/static/v1?label=contributors&message=1&color=purple)
![GitHub repo size](https://img.shields.io/github/repo-size/topfrag-gg/codstats-api?color=yellow)
![GitHub code size](https://img.shields.io/github/languages/code-size/topfrag-gg/codstats-api?color=red)
![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/topfrag-gg/codstats-api?color=skyblue)
![GitHub Repo stars](https://img.shields.io/github/stars/topfrag-gg/codstats-api)
![GitHub watchers](https://img.shields.io/github/watchers/topfrag-gg/codstats-api)

## Overview

The **CODStats API** is the backend for **CODStats**, a statistics and insights platform dedicated to the **Call of Duty
League (CDL)** and the **Call of Duty Challengers** scene. It provides competitive players, fans, and analysts with
access to rich eSports data, including player stats, match breakdowns, seasonal leaderboards, and more.

This RESTful API is designed for performance, scalability, and developer experience. It powers the core functionality of
CODStats across:

- Player & team statistics
- Leaderboard generation
- Match schedules & results
- Event and tournament data
- Historical performance tracking and comparisons
- Secure access with authentication & roles

## Project Structure

```ASCII
codstats-api/
├─ .cspell/                   # Custom CSpell dictionaries
├─ .github/                   # GitHub configurations (workflows, settings, etc.)
│  ├─ workflows/
├─ .husky/                    # Husky hooks for Git (e.g., pre-commit, pre-push)
├─ .vscode/                   # VSCode settings (extensions, workspace configs)
├─ config/                    # Environment-specific configurations (default, production)
├─ public/                    # Static assets (favicon, etc.)
├─ scripts/                   # Custom scripts (build, deployment automation)
├─ src/                       # Application source code
│  ├─ libs/                   # Core express setup, CORS, helmet
│  ├─ middleware/             # API middleware (error, redirect, 404)
│  ├─ routes/                 # Route handlers (index, health, etc.)
│  ├─ app.ts                  # Express app instance
│  ├─ server.ts               # Server bootstrap
├─ .dockerignore              # Files and folders to exclude from Docker build context
├─ .editorconfig              # Code style consistency across different editors/IDEs
├─ .gitattributes             # Git settings for end-of-line handling, diffs, etc.
├─ .gitignore                 # Specifies intentionally untracked files to ignore in Git
├─ .npmrc                     # NPM configuration (e.g., save-exact, registry settings)
├─ .nvmrc                     # Node.js version file for NVM
├─ .prettierignore            # Files/folders ignored by Prettier
├─ .prettierrc                # Prettier formatting rules
├─ CHANGELOG.md               # Project changelog with version history
├─ commitlint.config.js       # Commit message linting rules
├─ cspell.json                # Custom spell-checking configuration (CSpell)
├─ Dockerfile                 # Docker build instructions for the API container
├─ eslint.config.js           # ESLint configuration using flat config format
├─ fly.toml                   # Fly.io deployment configuration
├─ index.ts                   # Main entry point for the API
├─ LICENSE                    # Project license (MIT)
├─ nodemon.json               # Development config for automatic restarts
├─ package-lock.json          # Lockfile for dependency consistency
├─ package.json               # Project metadata, scripts, and dependency definitions
├─ README.md                  # Project overview, setup instructions, and documentation
└─ tsconfig.json              # TypeScript configuration
```

## Author

Created and maintained by [@mister-fix](https://github.com/mister-fix/).

## Contributors

- [@mister-fix](https://github.com/mister-fix/) 🐉

## License

This project is licensed under the [MIT License](./LICENSE). You can learn more about open-source licenses here:
[choosealicense.com](https://choosealicense.com/).

## Acknowledgements

- Inspired by modern web application architectures. Special thanks to the open-source community for their valuable
  contributions.
- Thanks to the Node.js and Express.js communities for their excellent documentation and support. Special thanks to the
  Prisma team for creating an amazing ORM.

## Contact

For questions, suggestions, or contributions, open an issue or email:
[hellostephenwm@gmail.com](mailto:hellostephenwm@gmail.com).

## Miscellaneous

- Thanks to [@rxaviers](https://github.com/rxaviers/) for the emoji's used in this project, you can
  [check them out here](https://gist.github.com/rxaviers/7360908).
- Badges and shields used in the project markdown files are generated by [img.shields.io](https://img.shields.io/).
