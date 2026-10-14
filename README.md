<!-- 
This is the README for the Todoist Clone project.
It provides documentation on setup, features, tech stack, and project structure.
For more information about contributing or licensing, see the respective sections below.
-->

# Todoist Clone

A Todoist clone built with React (custom hooks and context), Firebase and React Testing Library, using create-react-app as a base. Styling is done with SCSS.

![Preview](todoist-preview.png?raw=true)

## Features

- Create, view and complete tasks
- Organise tasks into projects
- Inbox, Today and Next 7 days views
- Dark mode (click the pizza icon at the top right)

## Tech stack

- [React](https://reactjs.org/) 16 (custom hooks, context)
- [Firebase](https://firebase.google.com/) (Firestore)
- SCSS (`node-sass`)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest
- ESLint (Airbnb config) and Prettier

## Getting started

### Prerequisites

- Node.js and [Yarn](https://yarnpkg.com/) (or npm)
- A Firebase project with Firestore enabled

### Setup

1. Clone the repository and install dependencies:

   ```sh
   yarn install
   ```

2. Copy `src/firebase.js.example` to `src/firebase.js` and fill in your Firebase project's configuration values (`apiKey`, `authDomain`, `databaseURL`, `projectId`, `storageBucket`, `messagingSenderId`, `appId`).

3. Start the development server:

   ```sh
   yarn start
   ```

   The app runs at http://localhost:3000.

## Available scripts

| Script        | Description                                  |
| ------------- | -------------------------------------------- |
| `yarn start`  | Run the app in development mode              |
| `yarn build`  | Create a production build in `build/`        |
| `yarn test`   | Run the tests in watch mode                  |
| `yarn eject`  | Eject from create-react-app (irreversible)   |

To see test coverage, run `yarn test --coverage`. The project enforces a 90% global coverage threshold.

## Project structure

```
src/
  App.js, index.js   App entry points
  components/        UI components (tasks, projects, layout)
  constants/         Shared constants
  context/           React context providers
  helpers/           Utility functions
  hooks/             Custom hooks (data fetching from Firebase)
  __tests__/         Tests
```

## Contributing

Contributions are highly encouraged! One thing not yet done is accessibility, so help there would be especially welcome.

## About

This project was built as a tutorial to give a better understanding of React by building a real application. Subscribe to the YouTube channel at http://bit.ly/CognitiveSurge for more projects like this.

## License

See [LICENSE.txt](LICENSE.txt).
