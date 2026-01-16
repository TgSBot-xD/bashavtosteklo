import { defineConfig, globalIgnores } from 'eslint/config';

import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

import globals from 'globals';
import tseslint from 'typescript-eslint';

import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import unicorn from 'eslint-plugin-unicorn';
import sonarjs from 'eslint-plugin-sonarjs';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**', 'node_modules/**', 'next-env.d.ts']),

  {
    name: 'bashavtosteklo/src',
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript': tseslint.plugin,
      '@import': importPlugin,
      '@a11y': jsxA11y,
      '@unicorn': unicorn,
      '@sonar': sonarjs,
    },
    settings: {
      '@import/resolver': {
        typescript: { project: true },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      },
      '@tailwind': {
        config: './tailwind.config.mjs',
        callees: ['cn', 'clsx', 'cva'],
      },
    },

    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      'no-unused-vars': 'off',

      '@typescript/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],

      // Порядок импортов
      '@import/first': 'error',
      '@import/no-duplicates': 'error',
      '@import/newline-after-import': 'warn',
      '@import/no-cycle': ['warn', { maxDepth: 1, ignoreExternal: true }],
      '@import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index'], ['type']],
          pathGroups: [{ pattern: '@/**', group: 'internal', position: 'after' }],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      '@a11y/alt-text': 'warn',
      '@a11y/anchor-is-valid': 'warn',
      '@a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],
      '@a11y/click-events-have-key-events': 'off',
      '@a11y/no-static-element-interactions': 'off',

      '@unicorn/better-regex': 'warn',
      '@unicorn/prefer-node-protocol': 'warn',
      '@unicorn/filename-case': 'off',
      '@unicorn/prevent-abbreviations': 'off',
      '@unicorn/no-null': 'off',

      '@sonar/cognitive-complexity': ['warn', 15],
      '@sonar/no-identical-functions': 'warn',
      '@sonar/no-duplicate-string': 'off',
    },
  },
  prettier,
]);

export default eslintConfig;
