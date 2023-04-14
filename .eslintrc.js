// eslint-disable-next-line import/no-commonjs, unicorn/prefer-module, no-undef
module.exports = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules",
    "dist",
    "*.d.ts",
    "coverage",
    "jest.config.js",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:github/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "github", "jsx-a11y", "prettier", "sonarjs"],
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx", "*.spec.ts", "*.spec.tsx"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      globals: {
        __dirname: true,
      },
      rules: {
        "unicorn/prefer-module": "off", // To be able to use __dirname
      },
    },
  ],
  rules: {
    // OFF
    "i18n-text/no-en": "off",
    "filenames/match-regex": "off", // handled by unicorn/filename-case
    "import/named": "off", // doesn't work well
    "import/no-deprecated": "off", // takes too long
    "import/default": "off", // takes too long
    "import/order": "off", // to avoid debate
    "import/no-unresolved": "off", // module bundle is vite
    "import/no-named-as-default-member": "off", // takes too long
    "import/no-namespace": "off", // enable namespaces
    "unicorn/no-null": "off",
    "no-unused-vars": "off", // handled by @typescript-eslint/no-unused-vars
    // ERRORS
    "import/extensions": [
      "error",
      "never",
      {
        json: "always",
        scss: "always",
        css: "always",
        svg: "always",
      },
    ],
    "import/no-anonymous-default-export": ["error", { allowNew: true }],
    "no-console": ["error", { allow: ["warn", "error", "info"] }],
    "prettier/prettier": "error",
    "unicorn/filename-case": [
      "error",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ["^[A-Za-z0-9]+\\.[A-Za-z0-9]+$"], // To allow syntax like TripDAO.ts
      },
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          prop: false,
          props: false,
          i: false,
          str: false,
          args: false,
          doc: false,
          docs: false,
        },
      },
    ],
  },
};
