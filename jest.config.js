const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  rootDir: ".",
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    ...tsJestTransformCfg,
  },
};
