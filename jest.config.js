module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
};
