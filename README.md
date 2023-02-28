# ESLint: Use 2 processors with the same file (separate plugins)

Steps to reproduce the issue:

1. Run `yarn`.
2. Run `yarn lint`. You should get 2 `Duplicate object key  json/duplicate-key` errors.
3. In `eslint.config.js` comment out line 20: `processor: json.processors[".json"],`.
4. Run `yarn lint`. You should get 1 `package.json is not sorted correctly  json-files/sort-package-json` error.

Expected result: 3 errors from both `json` and `json-files` plugins.

Conclusion: It is impossible to use 2 different processors with the same file, even if we want to use a different processor with a different plugin.
