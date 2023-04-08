module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    rules: {
        'react/prop-types': 'off',
    },
    overrides: [
        {
            files: ['**/*.js'],
            env: {
                browser: true,
                node: true,
                commonjs: true,
                es6: false,
            },
            parserOptions: {
                ecmaVersion: 2015,
                sourceType: 'script',
            },
        },
    ],
};
