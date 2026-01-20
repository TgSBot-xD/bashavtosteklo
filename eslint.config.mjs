import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'dist/**',
    'coverage/**',
    'node_modules/**',
    'next-env.d.ts',
  ]),

  {
    name: 'bashavtosteklo/src',
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    plugins: {
      unicorn,
      sonarjs,
    },

    settings: {
      'import/resolver': {
        typescript: { project: ['./tsconfig.json'] },
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs'] },
      },
    },

    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      'no-unused-vars': 'off',

      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',
      'import/no-cycle': ['warn', { maxDepth: 1, ignoreExternal: true }],
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
          groups: [['builtin', 'external'], ['internal', 'parent', 'sibling', 'index'], ['type']],
          pathGroups: [
            { pattern: 'app/**', group: 'internal', position: 'after' },
            { pattern: 'shared/**', group: 'internal', position: 'after' },
            { pattern: 'entities/**', group: 'internal', position: 'after' },
            { pattern: 'feature/**', group: 'internal', position: 'after' },
            { pattern: 'widget/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
        },
      ],

      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',

      'unicorn/better-regex': 'warn',
      'unicorn/filename-case': 'off',
      'unicorn/prefer-node-protocol': 'warn',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',

      'sonarjs/cognitive-complexity': ['warn', 10],
      'sonarjs/no-identical-functions': 'error',
      'sonarjs/no-duplicate-string': 'off',
    },
  },

  prettier,
]);
