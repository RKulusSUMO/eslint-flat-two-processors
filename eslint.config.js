import json from "eslint-plugin-json";
import jsonFiles from "eslint-plugin-json-files";

export default [
  {
    files: ["package.json"],
    plugins: {
      "json-files": jsonFiles,
    },
    processor: jsonFiles.processors[".json"],
    rules: {
      "json-files/sort-package-json": "error",
    },
  },
  {
    files: ["package.json"],
    plugins: {
      json,
    },
    processor: json.processors[".json"],
    rules: {
      "json/duplicate-key": "error",
    },
  },
];
