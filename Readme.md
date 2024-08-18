### workflow ca - social media client

[![Automated Unit Testing](https://github.com/jonlar93/social-media-client/actions/workflows/unit-test.yml/badge.svg?branch=workflow)](https://github.com/jonlar93/social-media-client/actions/workflows/unit-test.yml)

[![Automated E2E Testing](https://github.com/jonlar93/social-media-client/actions/workflows/e2e-test.yml/badge.svg?branch=workflow)](https://github.com/jonlar93/social-media-client/actions/workflows/e2e-test.yml)


## Description

This project served as the coursework for the Workflow course at Noroff. The assignment involved enhancing the quality of a pre-existing social media app by incorporating various development workflows and establishing a testing strategy.

Enhancements comprised the integration of ESLint for code linting and Prettier for code formatting, alongside the implementation of pre-commit hooks to uphold code quality. It also included the development of both unit and end-to-end testing using Jest and Cypress. Furthermore, GitHub Actions was set up to continuously integrate these tests.

## getting started

# installing

1. clone the repo


```bash
git@github.com:jonlar93/social-media-client.git
```

2.  Install the dependencies:

```bash
npm install
```


### Running

To run the app in development mode, use the following command:

```bash
npm run start
```


### Running Tests

To run both unit and end-to-end tests:

```bash
npm run test
```

To run unit tests using Jest:

```bash
npm run test-unit
```

To open Cypress for end-to-end testing in interactive mode:

```bash
npm run test-e2e
```

To run Cypress end-to-end tests in headless mode:

```bash
npm run test-e2e-cli
```

### Code Formatting and Linting

To format the code using Prettier:

```bash
npm run format
```

To lint the code using ESLint:

```bash
npm run lint
```

To fix linting issues using ESLint:

```bash
npm run lint-fix
```



