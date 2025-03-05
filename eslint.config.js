const canonical = require('eslint-plugin-canonical');
const tsParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      canonical,
    },
    ignores: ['node_modules/**', '.next/**'],
    rules: {
      'no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      'canonical/filename-match-exported': 'off',
      'canonical/filename-match-regex': 'off',
      'canonical/filename-no-index': 'off',
      'canonical/id-match': [
        'error',
        '(^[A-Za-z]+(?:[A-Z][a-z]*)*\\d*$)|(^[A-Z]+(_[A-Z]+)*(_\\d$)*$)|(^(_|\\$)$)',
        {
          ignoreDestructuring: true,
          ignoreNamedImports: true,
          onlyDeclarations: true,
          properties: true,
        },
      ],
      'canonical/no-restricted-strings': 'off',
      'canonical/no-use-extend-native': 'error',
      'canonical/prefer-inline-type-import': 'error',
    },
  },
];
