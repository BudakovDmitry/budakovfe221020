import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  preset: "ts-jest",
};

export default config;