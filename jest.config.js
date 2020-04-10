module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/file-transformer.js',
    '^.+\\.tsx?$': 'babel-jest',
  },
  testMatch: ['**/src/**/*.test.ts', '**/src/**/*.test.tsx'],
};
