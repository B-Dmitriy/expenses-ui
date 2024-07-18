/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'quotes': [2, 'single']
  },
}
