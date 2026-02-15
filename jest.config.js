module.exports = {
  testEnvironment: "node",
  verbose: true,
  clearMocks: true,
  testMatch: ["**/__tests__/**/*.test.js"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports",
        filename: "index.html",
        expand: true,
      },
    ],
  ],
};
