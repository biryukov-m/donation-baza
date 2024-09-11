import esLintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default [
  { files: ['*/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { settings: { react: { version: 'detect' } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.all,
  ...tseslint.configs.recommended,

  pluginReact.configs.flat.recommended,
  {
    rules: {
      'object-curly-newline': 'off',
      'new-cap': 'off',
      'no-param-reassign': 'off',
      'no-prototype-builtins': 'off',
      'operator-linebreak': 'off',
      'no-restricted-syntax': 'off',
      'no-nested-ternary': 'off',
      'no-underscore-dangle': 'off',
      'no-promise-executor-return': 'off',
      'default-case': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      'func-style': 'off',
      'max-lines-per-function': 'off',
      'function-paren-newline': 'off',
      'consistent-return': 'off',
      'one-var': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/indent': 'off',
      'implicit-arrow-linebreak': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      'react/function-component-definition': 'off',
      'react/prop-types': 'off',
      'react/no-array-index-key': 'off',
      'react/require-default-props': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
  esLintPluginPrettierRecommended,
];
