# Ecosystem UI kit for refine.

## Package manager
**NPM**

## Installation

```bash

npm install

```

## Development

### Start
You can start the development server with the following command:
```bash
npm run story
```

### Storybook
For component visualization and documentation used [Storybook](https://storybook.js.org/).

### Generator
For component generation used [Hygen](http://www.hygen.io/docs/templates).

```bash
npm run gen:component <NAME> # generate component with name "Name"
npm run gen:provider <NAME> # generate provider with name "NameProvider"
npm run gen:hook <NAME> # generate hook with name "useName"
npm run gen:interface <NAME> # generate interface with name "name"
```


### Build

Build the packages with the following command:
```bash
npm run build
```

### Code styles
This project uses [Prettier](https://prettier.io/) for code formatting. You can run the following command to format the code:
```bash
npm run prettier
```

Linting is done with [ESLint](https://eslint.org/). You can run the following command to lint the code:
```bash
npm run lint
```

Husky is used to run linting and formatting before each commit. If you want to skip this, you can use the `--no-verify` flag.


### Flow
Development is based on releases.
When creating a new release, you need to create a branch with the name of the release.
After creating a branch, you need to update the version in the packages/ecosystem-ui-refine/package.json files,
package.json, lerna.json and commit.
After completing all the changes, you need to set the tag with the release version and make MR(Merge request) to the master branch.
After the merge, the branch is deleted and a new branch is created for the next release.


### Tests

For tests used [Jest](https://jestjs.io/). You can run the following command to run tests:
```bash
npm run test
```
More information: [Jest](https://jestjs.io/), [Testing Library React Hooks](https://react-hooks-testing-library.com/)
and [Testing Library React](https://testing-library.com/docs/react-testing-library/intro/)