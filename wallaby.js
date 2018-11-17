module.exports = function(wallaby) {
  return {
    files: [
      "tsconfig.json",
      "src/**/*.ts?(x)",
      "src/**/*.snap",
      "src/**/*.json",
      "!src/**/*.test.ts?(x)",
    ],
    tests: ["src/**/*.test.ts?(x)"],

    env: {
      type: "node",
      runner: "node",
    },

    testFramework: "jest",
  }
}
