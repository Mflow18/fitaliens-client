module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules",
    "dist",
    "*.d.ts",
    "coverage",
    "jest.config.js",
  ],
  plugins: [
    "@typescript-eslint",
    "github",
    "jsx-a11y",
    "prettier",
    "sonarjs",
    "functional",
  ],
  extends: [
    "plugin:react-hooks/recommended",
    "hardcore",
    "hardcore/react",
    "hardcore/react-testing-library",
    "hardcore/jest",
    "hardcore/fp",
    "hardcore/ts",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:github/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "prettier",
    "plugin:functional/lite",
    "plugin:functional/stylistic",
  ],
  env: {
    browser: true,
  },

  overrides: [
    {
      files: [
        "server/**/*.ts",
        "*.test.ts",
        "*.test.tsx",
        "*.spec.ts",
        "*.spec.tsx",
      ],
      plugins: ["jest"],
      extends: ["hardcore/node", "plugin:jest/recommended"],
      globals: {
        __dirname: true,
        JSX: true,
      },
      env: {
        browser: false,
      },
      rules: {
        "unicorn/prefer-module": "off", // To be able to use __dirname
      },
    },
  ],
  rules: {
    // OFF
    "@typescript-eslint/no-unused-vars": "off", //  handled by no-unused-vars
    "i18n-text/no-en": "off",
    "filenames/match-regex": "off", // handled by unicorn/filename-case
    "import/named": "off", // doesnt work well
    "import/no-deprecated": "off", // takes too long
    "import/default": "off", // takes too long
    "import/no-unresolved": "off", // module bundle is vite
    "import/no-named-as-default-member": "off", // takes too long
    "import/no-namespace": "off", // enable namespaces
    "unicorn/no-null": "off",
    "total-functions/require-strict-mode": "off", // too much of a mess with imports
    "@typescript-eslint/naming-convention": "off", // annoying in interface declarations
    "@typescript-eslint/prefer-readonly-parameter-types": "off", // overriden by functional/prefer-immutable-type
    "react/forbid-component-props": "off", // too much of a mess
    "import/no-unused-modules": "off", // takes too long
    "no-unused-vars": "off", // handled by @typescript-eslint/no-unused-vars
    "functional/no-return-void": "off", // messes up with interfaces
    "react/jsx-no-bind": "off", // outdated
    "react-perf/jsx-no-new-function-as-prop": "off",
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
