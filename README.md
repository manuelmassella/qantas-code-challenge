# Project Overview

This project is a code challenge for Qantas, focusing on clean code principles, scalability, and maintainability. The implementation leverages modern front-end technologies, ensuring a structured and modular approach.

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project uses [Tailwind CSS](https://tailwindcss.com/) for styling.


### Installation

Before running the project, install the necessary dependencies:

```bash
npm install
```
### Running the Development Server

To start the development server, run:

```bash
npm run dev
```
Once the server is running, open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Running Tests

To execute the test suite, run:

```bash
npm run test
```

## Project Approach

The implementation follows a structured development process:

1. **Environment Setup** - Configure the development environment and dependencies.
2. **HTML Structure & Initial Layout** - Establish the fundamental page structure.
3. **Component Extraction** - Identify and separate reusable UI components.
4. **User Interaction Features** - Implement interactivity and dynamic functionality.
5. **Testing** - Write and execute test cases to ensure application reliability.


## Trade-offs & Considerations

### Star Rating System

- The rating widget was initially implemented using only CSS. While functional, it can be improved by utilizing SVG images for better visual fidelity, allowing support for empty, half, and full-star representations.
- Currently, separate components exist for the self-rating and star rating systems. These could be merged into a single, more dynamic component that takes a "type" parameter, handling logic internally for both cases.

### Test Coverage

- The current test suite focuses on key functionality, such as hotel list price sorting and the correct display of hotel information.
- While these tests cover the primary requirements, additional test cases could be added to improve coverage, especially for user interactions and edge cases.

### Conclusions

This project demonstrates a scalable and maintainable approach to front-end development while adhering to best practices. Future improvements can focus on refining the UI, optimizing performance, and expanding test coverage.

