module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    // 'plugin:prettier/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    // 'prettier/prettier': 0,
    // Allow css prop for styled-components
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  overrides: [
    // typescript
    {
      files: ['*.ts', '*.tsx'],
      excludedFiles: ['*.test.js'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/interface-name-prefix': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        'react/prop-types': 0,
        'react/display-name': 0,
        // Allow css prop for styled-components in TypeScript files too
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
      },
    },

    // javascript
    {
      files: ['*.js'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'valid-jsdoc': 'error',
        'react/prop-types': 0,
        'react/jsx-fragments': 0,
        'react/jsx-key': 0,
        'react/jsx-handler-names': 0,
        'linebreak-style': ['error', 'unix'],
        'react/display-name': 0,
        // Allow css prop for styled-components in JavaScript files too
        'react/no-unknown-property': ['error', { ignore: ['css'] }],
      },
    },

    // eslint config files
    {
      files: ['.eslintrc.js', './scripts/**'],
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
