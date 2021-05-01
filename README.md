# Sass Loader Webpack Error

## Setup

```sh
npm install
npx webpack serve
```

That's it.

This project is importing a file that contains variables from `pretty-checkbox`
in `src/styles/main.scss` which is causing the following error:

```
ERROR in ./src/styles/main.scss
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
SassError: Undefined variable.
  ╷
3 │ .#{$pretty--class-name} * {
  │    ^^^^^^^^^^^^^^^^^^^
  ╵
  node_modules/pretty-checkbox/src/scss/_core.scss 3:4  @use
  src/styles/main.scss 5:1                              root stylesheet
```
