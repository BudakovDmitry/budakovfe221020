import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  preset: "ts-jest",
  transform: {
    "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
  },
  transformIgnorePatterns: [
    "node_modules/(?!variables/.*)"
  ]
};

export default config;