module.exports = {
  extends: ['@redwoodjs/eslint-config'],
  rules: {
    endOfLine: 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  root: true,
}