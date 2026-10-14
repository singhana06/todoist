# Todoist Clone

A full-featured Todoist clone built with React, Firebase, and modern web technologies. This project demonstrates best practices in React development including custom hooks, context API, component composition, and comprehensive testing.

![Todoist Preview](todoist-preview.png?raw=true)

## About

This is an educational project created to showcase a real-world React application. It implements core todo management features including task creation, editing, deletion, organization with projects and tasks, and a beautiful dark mode interface.

**Features:**
- ✅ Create, read, update, and delete todos
- 🎯 Organize todos into projects
- 🌙 Dark mode support (click the Pizza icon!)
- 🔥 Real-time sync with Firebase
- 🎨 Responsive UI with SCSS styling
- 🧪 Comprehensive test coverage with React Testing Library

## Tech Stack

- **Frontend Framework:** React 16.13
- **State Management:** Context API + Custom Hooks
- **Backend/Database:** Firebase 7.15
- **Styling:** SCSS/Node-Sass
- **Testing:** React Testing Library & Jest
- **Code Quality:** ESLint, Prettier
- **Build Tool:** Create React App

## Prerequisites

- Node.js (v12 or higher)
- npm or yarn
- Firebase account (for backend services)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/singhana06/todoist.git
cd todoist
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Configure Firebase

1. Create a `src/firebase.js` file by copying from the example:
   ```bash
   cp src/firebase.js.example src/firebase.js
   ```

2. Add your Firebase configuration credentials to `src/firebase.js`

### 4. Start the Development Server

```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`
Launches the test runner in interactive watch mode with coverage requirements (90% minimum):
- Line coverage: 90%
- Branch coverage: 90%
- Function coverage: 90%
- Statement coverage: 90%

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## Project Structure

```
src/
├── components/      # React components
├── context/         # Context API providers
├── hooks/          # Custom React hooks
├── helpers/        # Utility functions
├── constants/      # Application constants
├── __tests__/      # Test files
├── App.js          # Root component
├── App.scss        # Global styles
├── index.js        # Entry point
└── firebase.js     # Firebase configuration
```

## Key Features

### Dark Mode
Click the Pizza icon (🍕) in the top right corner to toggle between light and dark themes.

### Task Management
- Create new tasks and projects
- Edit existing tasks
- Delete tasks when no longer needed
- Organize tasks by projects

### Real-time Synchronization
Tasks are synced in real-time with Firebase, allowing seamless access across devices.

## Testing

This project maintains high test coverage with a minimum threshold of 90% across all metrics:

```bash
npm test
```

Test files are located in `src/__tests__/` and use React Testing Library for testing components.

## Code Quality

The project uses ESLint and Prettier for code quality:

- **ESLint Config:** Airbnb style guide
- **Prettier:** Automatic code formatting

## Contributing

Contributions are highly encouraged! Areas where help would be appreciated:

- 🎯 Accessibility improvements (a11y)
- 🐛 Bug fixes
- ✨ New features
- 📚 Documentation improvements

Please feel free to submit pull requests and issues!

## Accessibility

We're looking for contributions to improve the accessibility of this application. If you're interested in helping, please check open issues or create a new one!

## License

This project is licensed under the MIT License. See the [LICENSE.txt](LICENSE.txt) file for details.

## Credits

Original tutorial and project: [Karl Hadwen](https://github.com/singhana06)

Subscribe to the YouTube channel: [Cognitive Surge](http://bit.ly/CognitiveSurge) for more React tutorials and project walkthroughs!

## Support

If you encounter any issues or have questions, please open an issue on GitHub or refer to the original tutorial on the Cognitive Surge YouTube channel.

---

Happy coding! 🚀
