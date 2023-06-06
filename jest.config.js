const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3001',
  },
  moduleNameMapper: {
    '^.+\\.(svg)$': '<rootDir>/__mocks__/svg.ts', // 맨 위에 와야함
    '^@/types(.*)$': '<rootDir>/src/types/$1',
    'public/(.*)': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
