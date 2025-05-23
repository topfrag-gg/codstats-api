<style>h1 { border-bottom: 0; }</style>

# ![header image](./header.svg)

![License](https://img.shields.io/github/license/topfrag-gg/codstats-api?color=blue)
![Version](https://img.shields.io/github/v/tag/topfrag-gg/codstats-api?label=version)
![Build](https://img.shields.io/github/actions/workflow/status/topfrag-gg/codstats-api/build.yml)
![Last Commit](https://img.shields.io/github/last-commit/topfrag-gg/codstats-api?color=yellow)
![Contributors](https://img.shields.io/github/contributors/topfrag-gg/codstats-api?color=5d00ff)
![Open Issues](https://img.shields.io/github/issues/topfrag-gg/codstats-api?color=ff0000)

<!-- ![Top Language](https://img.shields.io/github/languages/top/topfrag-gg/codstats-api?color=2943d6) -->
<!-- ![Code Size](https://img.shields.io/github/languages/code-size/topfrag-gg/codstats-api?color=red) -->
<!-- ![GitHub repo size](https://img.shields.io/github/repo-size/topfrag-gg/codstats-api?color=yellow) -->
<!-- ![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/topfrag-gg/codstats-api?color=skyblue) -->
<!-- ![Stars](https://img.shields.io/github/stars/topfrag-gg/codstats-api) -->
<!-- ![GitHub watchers](https://img.shields.io/github/watchers/topfrag-gg/codstats-api) -->

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

## 🚀 Getting Started

Follow the steps below to get the **CODStats API** up and running on your local machine.

### Prerequisites

To ensure that the API works as intended on your local machine, make sure you have the following services running with
the recommended versions below:

- [Git](https://git-scm.com/downloads): v2.49.0+
- [Node.js](https://nodejs.org/en/about/previous-releases): v22.13.1+
- [npm](https://npmjs.com/package/npm?activeTab=versions): v10.9.2+
- [Docker](https://www.docker.com/products/): v28.0.4+

### Clone the Repository

Run the following command to clone the repository:

```bash
git clone https://github.com/mister-fix/codstats-api.git
cd codstats-api
```

### Install Dependencies

```bash
npm install
```

### Configure Variables

Create a `.env` file in the root of the project directory and add the necessary variables for the API to work:

```ini
HOST=localhost
PORT=5000
PROTOCOL=HTTP
```

Included in the project files is a `.env.example` file that you can use as a baseline for your local `.env` file. The
example file has all of the variable names needed to run the API, but with dummy values, feel free to change provided
values to custom values that you want to use for your local installation.

At minimum, your `.env` file must have `HOST`, `PORT`, and `PROTOCOL` variables set in order for the API to start. The
other variables are needed for once the API is running, such as for authentication, etc.

### Running the API

Run the following command to start the API in development mode:

```bash
npm run dev
```

The following will be printed in your terminal indicating that the API has started successfully:

```bash
> codstats-api@0.1.0 dev
> cross-env NODE_ENV=development nodemon

[nodemon] 3.1.9
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): index.ts config\**\* src\**\* scripts\**\*
[nodemon] watching extensions: ts,js,json
[nodemon] starting `node --loader ./scripts/loader.js --no-warnings=ExperimentalWarning ./index.ts`
Server environment: development
Server listening on: http://localhost:8080
Press CTRL-C to stop
```

To run the API in production mode, you must first compile the project by running the following command:

```bash
npm run build
```

The following will be printed in your terminal indicating that the project build script is running:

```bash
> codstats-api@0.1.0 build
> node ./scripts/build.js

🏗️ Building project...
```

Once complete, the 'dist' folder will appear in the root project directory with the source code compiled into
JavaScript.

To start the project run the following command:

```bash
npm run start:prod:local
```

The following will be printed in your terminal indicating that the project has started successfully:

```bash
> codstats-api@0.1.1 start:prod:local
> cross-env NODE_ENV=production --env-file=.env.production.local node -r tsconfig-paths/register ./dist/index.js

Server environment: production
Server listening on: http://localhost:8080
Press CTRL-C to stop
```

### Set Up Local Database with Docker

To run PostgreSQL database locally for development you can use the provided `docker-compose.yml` file.

#### Step 1: Match Environment Variables

Ensure the following variables in your `.env` file match those in the `docker-compose.yml`:

```ini
POSTGRES_USER=your_postgres_username
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_database_name
```

Also, set the `DATABASE_URL` in your `.env` file to match the format:

```ini
DATABASE_URL=postgresql://your_postgres_username:your_postgres_password@localhost:5432/your_database_name
```

> Replace `your_postgres_username`, `your_postgres_password`, and `your_database_name` with your values from your Docker
> config if customized.

#### Step 2: Start PostgreSQL

Run the following Docker command to start the database container in detached mode:

```bash
docker-compose up -d
```

This will launch a local PostgreSQL instance accessible at `localhost:5432`. If you have PSQL installed in your machine,
you can check to see if your database is up and running.

Run the following command:

```bash
psql -h localhost -U <your_postgres_username> -d <your_database_name>
```

Enter your Postgres password when prompted.

#### Step 3: Run Prisma Migrations

After the database container is running, run the Prisma migrations to apply the database schema:

```bash
npx prisma migrate dev
```

#### Step 4: Seed the Database

Run the seed script to populate the database with any initial data:

```bash
npm run db:seed
```

Your local database should now be ready and connected to the API.

#### Step 5: Viewing the Database

You can view the database on your browser by running the following command:

```bash
npx prisma studio
```

Which will print the following in your terminal:

```bash
Environment variables loaded from .env
Prisma schema loaded from prisma\schema.prisma
Prisma Studio is up on http://localhost:5555
```

You can visit the provided URL [http://localhost:5555](http://localhost:5555) to view your database tables and seeded
resources.

You can also view the database with PGAdmin, which is already configured in the `docker-compose.yml` file. Make sure
your `.env` file has the following variables

```ini
PGADMIN_EMAIL = "your_pgadmin_email"
PGADMIN_PASSWORD = "your_pgadmin_password"
```

> Replace the `your_pgadmin_email` and `your_pgadmin_password` with the email and password you would like to use PGAdmin
> with.

PGAdmin should be accessible in your browser at this link
[http://localhost:5050/login?next=/](http://localhost:5050/login?next=/). In the login box, enter the email address and
password you saved in your `.env` file for PGAdmin.

If you have any trouble configuring your `.env` from these instructions, do note that I have provided an example
`.env.example` file with all of the necessary environment variables, just change their values to whatever values you
want to use for your local installation.

#### ⚠️ Important Note: Local PostgreSQL Conflicts with Docker

If you have **PostgreSQL installed natively on your machine**, it may conflict with the **Dockerized PostgreSQL
instance**, since both default to port `5432`. This can result in connection errors such as authentication failures or
the container refusing to start.

To prevent conflicts, **you must stop the locally running PostgreSQL service** before launching the Docker container.

#### 🪟 How to Stop PostgreSQL on Windows

1. Press `Windows + R` to open the Run dialog box.
2. Type `services.msc` and hit Enter.
3. In the Services window, scroll down and look for a service named something like:

```arduino
postgresql-x64-14 - PostgreSQL Server 14
```

> The name may vary depending on your version or system architecture.

4. Right-click on the service and select "**Stop**".

This will free up port `5432` and ensure your **Docker-based PostgreSQL instance starts and works correctly.**

> 💡 Tip: You can optionally disable the service or change its startup type to "Manual" if you plan to use Docker
> consistently for your PostgreSQL development.

## Project Structure

```ASCII
codstats-api/
├─ .cspell/                   # Custom CSpell dictionaries
├─ .github/                   # GitHub configurations (workflows, settings, etc.)
│  ├─ workflows/
├─ .husky/                    # Husky hooks for Git (e.g., pre-commit, pre-push)
├─ .vscode/                   # VSCode settings (extensions, workspace configs)
├─ config/                    # Environment-specific configurations (default, production)
├─ generated/                 # Auto-generated files (e.g., Prisma client, OpenAPI types)
├─ prisma/                    # Prisma schema, migrations, and seed scripts
├─ public/                    # Static assets (favicon, etc.)
├─ scripts/                   # Custom scripts (build, deployment automation)
├─ src/                       # Application source code
│  ├─ common/                 # Shared types and constants
│  ├─ libs/                   # Core express setup, CORS, helmet
│  ├─ middleware/             # API middleware (error, redirect, 404)
│  ├─ routes/                 # Route handlers (index, health, etc.)
│  ├─ utils/                  # Utility functions and helpers (logger, etc.)
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
├─ docker-compose.yml         # Docker Compose configuration for local database
├─ Dockerfile                 # Docker build instructions for the API container
├─ eslint.config.js           # ESLint configuration using flat config format
├─ fly.toml                   # Fly.io deployment configuration
├─ index.ts                   # Main entry point for the API
├─ LICENSE                    # Project license (MIT)
├─ nodemon.json               # Development config for automatic restarts
├─ package-lock.json          # Lockfile for dependency consistency
├─ package.json               # Project metadata, scripts, and dependency definitions
├─ README.md                  # Project overview, setup instructions, and documentation
├─ tsconfig.json              # TypeScript
└─ tsconfig.lint.json         # TypeScript config used for linting (ESLint scope)
```

## Database Schema

For a detailed explanation of the database models and relationships used in CODStats, see the
[docs/schema.md](docs/schema.md) file.

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
