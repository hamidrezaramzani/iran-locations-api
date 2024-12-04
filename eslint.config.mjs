import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...fixupConfigRules(compat.extends(
  'eslint:recommended',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
  'plugin:jsx-a11y/recommended',
  'plugin:import/errors',
  'plugin:import/warnings',
  'plugin:@next/next/recommended',
)),
{
  ignores:[
    '.next','node_modules'
  ]
}
,{

  plugins: {
    react: fixupPluginRules(react),
    'react-hooks': fixupPluginRules(reactHooks),
    'jsx-a11y': fixupPluginRules(jsxA11Y),
    import: fixupPluginRules(_import),
  },

  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },

    ecmaVersion: 'latest',
    sourceType: 'module',

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    react: {
      version: 'detect',
    },

    'import/resolver': {
      typescript: {},

      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-key': 'error',
    '@next/next/no-img-element': 'error',

    'import/order': ['error', {
      groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index']],
      'newlines-between': 'always',

      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],

    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['href', 'to'],
      aspects: ['invalidHref', 'preferButton'],
    }],

    'react/prop-types': 'off',

    'no-console': ['warn', {
      allow: ['warn', 'error'],
    }],

    'no-debugger': 'error',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-const': 'error',
    'no-var': 'error',
    semi: ['error', 'always'],

    quotes: ['error', 'single', {
      avoidEscape: true,
    }],

    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
  },
}];