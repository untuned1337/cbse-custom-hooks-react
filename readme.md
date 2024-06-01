# Custom Hooks Collection

## Provided Functions
This library provides the following custom hooks:
1. **useLocalStorage**: A hook for interacting with browser's local storage.
2. **usePagination**: A hook for managing pagination state in React applications.
3. **useDebounce**: A hook for debouncing input changes.
4. **useMediaQuery**: A hook for responsive design by detecting media query matches.
5. **useKeyPress**: A hook for capturing keypress events.
6. **useClickOutside**: A hook for detecting clicks outside a specified element.

## Purpose
The purpose of this library is to offer a set of reusable custom hooks that address common challenges faced by React developers during application development. These hooks aim to simplify state management, user interactions, and responsiveness in React components.

## Business Problems Solved
- Efficient local storage management for persisting user data.
- Streamlining pagination implementation for large datasets.
- Reducing unnecessary API requests by debouncing user input.
- Designing responsive layouts based on media query conditions.
- Handling keyboard interactions for improved user experience.
- Implementing click outside detection for closing modals, popovers, or dropdowns.

## Intended Use
Developers can incorporate these custom hooks into their React projects to enhance functionality and improve user interactions. Each hook comes with detailed documentation on how to use it effectively in various scenarios.

## Restrictions for Component Usage
- **Technical Restrictions**: These hooks are designed for use in React applications and may not be compatible with other frameworks or libraries.
- **Business Restrictions**: Ensure that you comply with relevant data privacy regulations when using the `useLocalStorage` hook to store user data.

## Other Important Information
- It's recommended to thoroughly test the hooks in different scenarios before integrating them into production applications.
- Refer to the specific documentation provided for each hook to understand the parameters and return values.
- Contributions and feedback are welcome. Feel free to raise issues or submit pull requests to enhance the library.

## User Guide

### 1. Installation:
- Install the library using `npm install cbse-custom-hooks-react`.

#### 2. Usage:
- Import required hooks into your components.
```jsx import useLocalStorage from 'custom-hooks-library/util/localStorage';
import {
  useDebounce,
  useLocalStorage,
  useClickOutside,
  useKeyPress,
  usePagination,
  useMediaQuery,
} from 'cbse-custom-hooks-react';
```

- Follow usage examples and code samples provided.

### 3. Available Hooks:
- Refer to the listed hooks for specific functionalities.

### 4. Implementation:
- Integrate the hooks following the provided examples.
- Thoroughly test hooks before deployment.

### 5. Best Practices:
- Follow the guidelines for effective usage.
- Contribute and provide feedback for enhancements.

### 6. Additional Resources:
- Utilize the code samples and comments for further understanding.