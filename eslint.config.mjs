// ESLint 9 flat config. Same rules as the old .eslintrc.json:
// airbnb + airbnb/hooks (eslint-config-airbnb-extended "legacy" = the original Airbnb rules),
// react + jsx-a11y recommended, Next.js core-web-vitals, prettier, and our own rules below.
import nextPlugin from '@next/eslint-plugin-next';
import { configs as airbnb } from 'eslint-config-airbnb-extended/legacy';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const importOrderPathGroups = [
  { pattern: '@/lib/**', group: 'external' },
  { pattern: '{types/*,@/types*,./types}', group: 'type' },
  {
    pattern:
      '{hooks,@/hooks/**/*,./hooks/**,./use**,../use**,../../use**,../../../use**,,../../hooks/**,./_hooks/**,../../../_hooks/**}',
    group: 'internal',
  },
  { pattern: '{utils/**/*,./utils,../utils,../../utils,../../../utils}', group: 'type' },
  { pattern: '{@/constants/*,./constants}', group: 'type' },
  {
    pattern:
      '{states/**/*,./states*,./**/states*,../states*,../../states*,../../../states*,,../../../../states*,**/**/**/states*}',
    group: 'type',
  },
  { pattern: '@/services/**', group: 'type' },
  { pattern: '{./helpers,./data,./config,./defaults,../../../defaults}', group: 'type' },
  {
    pattern:
      '{components,components/_common/**,@/components,@/components/**,svgs,@/assets/**/*,@/app/**,routes/**,public/**}',
    group: 'index',
  },
  { pattern: '{styles,./*.scss,../*.scss,../*.module.scss}', group: 'index' },
];

export default tseslint.config(
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'public/**',
      'reserved/**',
      'src/libs/**',
      'src/registerServiceWorker.js',
      'src/**/__tests__/**',
    ],
  },
  ...airbnb.react.recommended,
  ...airbnb.react.hooks,
  {
    plugins: { '@next/next': nextPlugin },
    rules: { ...nextPlugin.configs.recommended.rules, ...nextPlugin.configs['core-web-vitals'].rules },
  },
  prettier,
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node, ...globals.jest, NodeJS: 'readonly', navigation: 'readonly' },
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    settings: {
      react: { version: 'detect' },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      'import/resolver': {
        node: { paths: ['src'], extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        typescript: { project: '.' },
      },
    },
    rules: {
      'arrow-body-style': 'off',
      'no-plusplus': 'off',
      'react/display-name': 'off',
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'react/require-default-props': 'off',
      'react/jsx-wrap-multilines': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'no-restricted-exports': ['error', { restrictDefaultExports: { defaultFrom: false } }],
      'import/order': [
        'error',
        {
          pathGroups: importOrderPathGroups,
          groups: [
            ['external', 'builtin'],
            ['type', 'internal', 'object'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-anonymous-default-export': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.test.tsx',
            '**/*.stories.*',
            '**/.storybook/**/*.*',
            'setupTests.ts',
            'eslint.config.mjs',
          ],
          peerDependencies: true,
        },
      ],
      'import/extensions': ['error', 'ignorePackages', { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }],
      'no-param-reassign': ['error', { props: false }],
      'no-unused-expressions': ['warn'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],
      'prefer-destructuring': ['error', { object: true, array: false }],
      'lines-between-class-members': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        { labelComponents: ['label'], labelAttributes: ['htmlFor'], controlComponents: ['input'] },
      ],
    },
  },
);
