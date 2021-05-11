module.exports = {
  setupFilesAfterEnv: ["<rootDir>/__tests__/setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/node_modules/**",
  ],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: [".next/", "/node_modules/", "/coverage/"],
  transform: {
    "\\.[jt]sx?$": [
      "esbuild-jest",
      {
        loaders: {
          ".spec.js": "jsx",
          ".js": "jsx",
        },
      },
    ],
  },
};
