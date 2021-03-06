module.exports = {
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: '.*vue',
      options: {
        parser: 'vue',
      },
    },
  ],
};
