module.exports = {
  env: {
    browser: true,
    es2021: true,
    // "jest/globals": true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:jest/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'no-unused-vars': [2, {'args': 'after-used', 'argsIgnorePattern': '^_'}],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.ts', '.tsx'] }
    ],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'object-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {} // this loads <rootdir>/tsconfig.json to eslint
    }
  }
};
