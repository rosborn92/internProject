module.exports = {
  moduleDirectories: ["./node_modules", "./app/javascript"],
  setupFiles: ["./app/javascript/test/test-setup"],
  setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/__tests__/**/*.js","**/*.test.js"],
  testPathIgnorePatterns: ["/node_modules/", "/vendor/"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js"
  }
};
