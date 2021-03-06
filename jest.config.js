module.exports = {
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/**.eslintrc**',
    '!**/jest.config**',
    '!**/webpack.config**',
    '!**/lcov-report/**',
    '!**/block-navigation**',
    '!**/prettify**',
    '!**/datagenerator**',
    '!**/bundle**',
    '!**/sorter**',
  ],
  testURL: 'http://localhost:3003/',
};
