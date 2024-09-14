module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'import', 'prettier', '@tanstack/query'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['^/'],
      },
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-deprecated-options': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error',
    '@tanstack/query/stable-query-client': 'error',
  },
  ignorePatterns: ['node_modules/', 'build/', 'dist/', '.github', '.tmp', 'index.html'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.ts', '.tsx'],
        paths: ['src'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['/', './public'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg'],
      },
    },
  },
};
