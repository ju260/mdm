module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],
  verbose: true,
  collectCoverage: true,
  cache: false,
  collectCoverageFrom: [
    '<rootDir>/**/*.vue',
    '<rootDir>/src/store/**/*.js'
  ],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testURL: 'http://localhost/'
}
