// Importing Testing Library matchers for better DOM assertions
import '@testing-library/jest-dom';

// Import global dependencies for tests
import { beforeAll, afterAll, beforeEach, afterEach } from 'vitest';

// Mocking Fetch API if required
import 'whatwg-fetch';

// Example of a global setup, useful for initializing mock server or other global test setups

// Mock Server setup example (optional)
if (process.env.NODE_ENV === 'test') {
  const { server } = require('./mockServer'); // Import your mock server setup here
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());
}

// Vitest hooks for common setup tasks
beforeEach(() => {
  // Runs before every test
  console.log('Setting up for test...');
});

afterEach(() => {
  // Runs after every test
  console.log('Cleaning up after test...');
});