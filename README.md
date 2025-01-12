# Frontend Advanced Architecture

This project serves as a comprehensive guide and reference implementation for building scalable, maintainable, and efficient frontend applications. It emphasizes modern architectural patterns, best practices, and the integration of cutting-edge technologies to facilitate the development of robust user interfaces.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#tech-stack)
- [Project Structure](#project-structure)
- [Key Highlights](#key-highlights)
- [Design Patterns and Architecture](#design-patterns-and-architecture)
- [Pages and Features](#pages-and-features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction
In the rapidly evolving landscape of web development, establishing a solid frontend architecture is crucial for delivering exceptional user experiences. This project explores various contemporary frontend architecture patterns, highlighting their key features, benefits, and appropriate use cases.

## 🛠️ Tech Stack
### Core Libraries and Frameworks
- ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white) **React v17.0.2** — a library for building user interfaces.
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) **TypeScript v4.4.4** — a strongly typed programming language.
- ![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white) **Redux Toolkit v1.6.2** — a modern approach to state management.
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white) **React Router v6.0.2** — routing for applications.

### Styling and UI
- ![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white) **Sass v1.49.9** — a CSS preprocessor to enhance styling.
- ![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white) **Storybook v6.4.9** — a platform for developing and testing UI components.
- **Design System**: located in the `ui/` folder, it can be extracted into a separate library.

### Testing
- ![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white) **Jest v27.5.1** — a JavaScript testing framework.
- ![Testing Library](https://img.shields.io/badge/Testing_Library-E33332?logo=testing-library&logoColor=white) **@testing-library/react v12.1.3** — testing React components.
- ![Loki](https://img.shields.io/badge/Loki-FF4785?logo=loki&logoColor=white) **Loki v0.34.0** — a tool for visual testing.

### Build and DevOps
- ![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?logo=webpack&logoColor=white) **Webpack v5.69.1** — a module bundler.
- ![Husky](https://img.shields.io/badge/Husky-5D4B8A?logo=git&logoColor=white) **Husky v7.0.0** — Git hooks for pre-commit checks.
- ![React Refresh](https://img.shields.io/badge/React_Refresh-F9A03C?logo=react&logoColor=white) **React Refresh v0.14.2** — hot reload for React.
- ![Stylelint](https://img.shields.io/badge/Stylelint-263238?logo=stylelint&logoColor=white) **Stylelint v14.5.3** — a CSS linter.
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white) **ESLint v7.32.0** — a JavaScript linter.
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=white) **Prettier v2.5.1** — a code formatter.

### Backend and Mocks
- ![JSON Server](https://img.shields.io/badge/JSON_Server-000000?logo=json&logoColor=white) **JSON Server v0.17.0** — to mock backend APIs.


## Project Structure

The project's structure is organized to promote scalability and maintainability:

```
frontend-advanced-architecture/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── containers/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   ├── utils/
│   └── index.js
├── .babelrc
├── .eslintrc.js
├── .prettierrc
├── package.json
└── webpack.config.js
```

- **public/**: Contains the static assets and the HTML template.
- **src/**: Contains the source code of the application.
  - **assets/**: Static assets like images, fonts, etc.
  - **components/**: Reusable UI components.
  - **containers/**: Components connected to the Redux store.
  - **pages/**: Components representing different pages/routes.
  - **redux/**: Redux-related code, including actions and reducers.
  - **services/**: Modules for API calls and business logic.
  - **utils/**: Utility functions and helpers.
- **index.js**: Entry point of the application.
- **.babelrc**: Babel configuration file.
- **.eslintrc.js**: ESLint configuration file.
- **.prettierrc**: Prettier configuration file.
- **package.json**: Lists project dependencies and scripts.
- **webpack.config.js**: Webpack configuration file.

## 🌟 Key Highlights

### 1. **Feature-Sliced Design (FSD) Architecture**

The project is built using the Feature-Sliced Design methodology, which promotes separation of concerns by dividing the application into logical slices:
- **App Layer:** Application-wide initialization and setup.
- **Entities Layer:** Domain entities (e.g., User, Product).
- **Features Layer:** Reusable features (e.g., authentication, filtering).
- **Pages Layer:** Complete pages for routing.
- **Processes Layer:** Global business processes (e.g., checkout flow).
- **Shared Layer:** Reusable code such as utilities, constants, or design tokens.

### 2. **Custom Design System**

- Found in the `ui/` directory.
- Can be extracted and published as a standalone npm library.
- Built with reusable components, typography, and theme support.
- Integrated with **Storybook** for showcasing all components in isolation.

### 3. **Mock Backend**

- `json-server` is used for simulating API responses during development.
- Configuration is located in `config/mock-server.json`.

### 4. **CI/CD Pipeline and Git Hooks**

- Pre-commit hooks ensure code quality with ESLint, Prettier, and TypeScript checks.
- CI/CD pipeline configuration is managed via GitHub Actions.

### 5. **Internationalization (i18n)**

- Multi-language support is implemented using the `i18next` library.
- Language files are stored in `src/shared/translations/`.

### 6. **Storybook Integration**

- Storybook is configured to visualize components and features.
- Run `npm run storybook` to explore the design system and its components.

### 7. **Testing**

- Unit and integration tests are configured using Jest and React Testing Library.
- Test cases are located in `src/__tests__/`.

### 8. **Themes and adaptive design**

- 3 theme realization
- Adaptive design for dektop/mobile/tablet devices.


## 📋 Configuration

This project is highly configurable:
- **Webpack Configs:** Located in `config/build` for different environments.
- **ESLint, Stylint and Prettier:** Config files are in the root directory for linting and formatting.
- **Storybook Configs:** Found in `config/storybook/`.
- **Testing Configs:** Jest and Testing Library setups in `config/jest`.

---

## 📈 Future Improvements

- Enhance Storybook documentation for complex use cases.
- Add performance monitoring tools.
- Extend the design system with advanced components.
- Implement SSR (Server-Side Rendering) and compare performance benefits.

## Design Patterns and Architecture

This project implements several design patterns, core patterns to enhance code quality and maintainability:

- **Component-Based Architecture**: Encourages reusability and separation of concerns by dividing the UI into independent, reusable components.
- **Service Layer Pattern**: Abstracts API calls and business logic into services, promoting separation of concerns and easier testing.
- **Container-Presenter Pattern**: Separates the logic (containers) from the view (presentational components) to enhance reusability and maintainability.
- **Atomic Design** for UI components.
- **Redux Toolkit Slices** for state management.
- **Asynchronous Hooks** for handling requests and side effects.
- **Layered Decomposition:** dividing the application into modules (`entities`, `features`, `shared`, `widgets`, `pages`).

These patterns are instrumental in creating scalable and maintainable frontend applications.

## Pages and Features

The application includes the following pages and features:

- **Auth Page**: Provides functionality for authorization and registration.
- **Main Page**: Provides all Main Page information, links, functionality
- **Home Page**: Provides an overview and navigation links.
- **About Page**: Offers information about the project and its purpose.
- **Article Page**: Articles pages and comment form.
- **Feature Showcase**: Demonstrates the implementation of various design patterns and architectural principles.
- **Contact Page**: Includes a form for users to get in touch.
- **Profile Page**: Includes a profile information.

## Installation and Launch

```bash
# Clone the repository
$ git clone https://github.com/fara0000/frontend-advanced-architecture

# Install dependencies
$ npm install

# Run the application
$ npm start

# Run tests
$ npm test

# Launch Storybook
$ npm run storybook

# Start JSON Server
$ npm run server
```

---

## Usage

To run the application locally:

```bash
npm start
```

This will start the development server, and you can view the application at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch**:

   ```bash
   git checkout -b feature-name
   ```

3. **Make your changes**.
4. **Commit your changes**:

   ```bash
   git commit -m 'Add feature name'
   ```

5. **Push to the branch**:

   ```bash
   git push origin feature-name
   ```

6. **Create a Pull Request**.

## License

This project is licensed under the [MIT License](./LICENSE).
