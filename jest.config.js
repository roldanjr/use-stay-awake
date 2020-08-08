module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js)x?$": "ts-jest",
  },
  preset: "ts-jest",
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js|jsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
};
