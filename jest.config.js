module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", 
  ],
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", 
  },
  testEnvironment: "jsdom",
};
