# Poly-IT

University project on the subject \"Internet technologies\" (first semester).

# CLI

* Install all modules:
```
npm install
```

* Run:
```
npm run start
```

* Run in dev-mode:
```
npm run dev
```

* Run all migrations and seed all files:
```
npm run db:init
```

* Rollback all migrations:
```
npm run db:rollback
```

# Dev configuration

## xo linter

```json
"xo": {
    "ignores": [
      "db/seeds"
    ],
    "rules": {
      "new-cap": [
        "error",
        {
          "capIsNewExceptions": [
            "Router"
          ]
        }
      ]
    }
  },
```

# Project structure
The repository has the following directory structure:
```
📦poly-it
 ┣ 📂controllers
 ┃ ┗ 📜employee.js
 ┣ 📂daos
 ┃ ┗ 📜employee.js
 ┣ 📂db
 ┃ ┣ 📂migrations
 ┃ ┃ ┣ 📜20211026123032-create-positions-table.js
 ┃ ┃ ┗ 📜20211026123036-create-employees-table.js
 ┃ ┣ 📂seeds
 ┃ ┃ ┣ 📜01-positions.js
 ┃ ┃ ┗ 📜02-employees.js
 ┃ ┣ 📜db.js
 ┃ ┗ 📜knexfile.js
 ┣ 📂routes
 ┃ ┣ 📜employees.js
 ┃ ┗ 📜index.js
 ┣ 📂services
 ┃ ┗ 📜employee.js
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┗ 📜package.json
```