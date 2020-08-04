module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    // 'src/store/*.js',
    'src/components/*.vue',
    'src/views/*.vue',
    'src/views/**/*.vue',
  ],
  coverageDirectory: 'tests/coverage',
  coverageReporters: [
    'lcov',
    'text',
  ],
  testMatch: [
    '<rootDir>/tests/unit/**/*.spec.(js)',
    // '<rootDir>/tests/unit/user/*.spec.(js)',
  ],
  transformIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(js|jsx)?$': '<rootDir>/node_modules/babel-jest',
  },
};
