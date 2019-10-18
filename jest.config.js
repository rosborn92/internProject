module.exports = {
  moduleDirectories: ["./node_modules", "./app/javascript"],
  setupFiles: ["./app/javascript/test/test-setup"],
  setupFilesAfterEnv: ["./node_modules/jest-enzyme/lib/index.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testMatch: ["**/__tests__/**/*.js"],
  testPathIgnorePatterns: ["/node_modules/", "/vendor/"]
};
