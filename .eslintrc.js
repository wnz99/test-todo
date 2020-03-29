module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'implicit-arrow-linebreak': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js'],
      },
    ],
    'no-restricted-imports': [
      2,
      {
        paths: ['lodash'],
      },
    ],
    'react/no-deprecated': 2,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
    react: {
      version: '16.13.1',
    },
  },
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    cy: true,
    before: true,
  },
};
