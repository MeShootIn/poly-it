# 🌐 poly-it

University project on the subject \"Internet technologies\" at [SPbSTU][spbstu]
of the 1st year of the master's degree.

[spbstu]: https://english.spbstu.ru

## 📦 Installation

Just clone the repository somewhere:
```bash
git clone https://github.com/MeShootIn/poly-it
```

## 🚀 Usage

* Install all modules:
```bash
npm install
```

* Run:
```bash
npm run start
```

* Run in dev-mode:
```bash
npm run dev
```

* Run all migrations and seed all files:
```bash
npm run db:init
```

* Rollback all migrations:
```bash
npm run db:rollback
```

## 🖥️ Dev configuration

### ☑️ XO linter

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

## 📂 Project structure

The repository has the following directory structure:
```
📂 .
├── 📜 .gitignore
├── 📂 controllers
│   └── 📜 employee.js
├── 📂 daos
│   └── 📜 employee.js
├── 📂 db
│   ├── 📜 db.js
│   ├── 📂 migrations
│   │   ├── 📜 20211026123032-create-positions-table.js
│   │   └── 📜 20211026123036-create-employees-table.js
│   └── 📂 seeds
│       ├── 📜 01-positions.js
│       └── 📜 02-employees.js
├── 📜 index.js
├── 📜 package-lock.json
├── 📜 package.json
├── 📜 README.md
├── 📂 routes
│   └── 📜 employees.js
├── 📂 services
│   └── 📜 employee.js
└── 📜 yarn.lock
```
