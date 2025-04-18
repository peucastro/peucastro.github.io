module.exports = {
  overrides: [
    {
      files: ["*.astro"],
      plugins: ["astro"],
      env: {
        node: true,
        "astro/astro": true,
        es2020: true,
      },
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
  ],
};
