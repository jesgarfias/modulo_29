module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // 👈 ¡Muy importante!
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // Ignorar CSS en los tests
  },
  testEnvironment: "jsdom",
};