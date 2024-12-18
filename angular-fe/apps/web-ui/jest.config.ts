/* eslint-disable */
export default {
  displayName: 'angular-fe',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  reporters: ['default', ['jest-sonar', { outputDirectory: 'reports/sonar' }]],
  coverageDirectory: '../../reports/coverage/',
  coverageReporters: [['lcov'], 'text-summary'],
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  // Ignore node_modules except for .mjs files and the @ngneat package.
  transformIgnorePatterns: ['node_modules/?!(.*\\.mjs$|@ngneat)'],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  verbose: false,
};
