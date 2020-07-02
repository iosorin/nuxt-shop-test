module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2019,
        sourceType: 'module'
    },
    extends: [
        '@nuxtjs',
        'plugin:nuxt/recommended'
    ],
    plugins: [
    ],
    // add your custom rules here
    rules: {
        'semi': [2, 'always'],
        'no-console': 1,
        'quote-props': [0, 'as-needed'],
        'no-unused-expressions': 2,
        'no-unused-vars': 1,
        'no-trailing-spaces': 1,
        'indent': [
            1,
            4,
            {
                'ignoredNodes': [
                    'TemplateLiteral'
                ],
                'SwitchCase': 1
            }
        ],
        'vue/max-attributes-per-line': 0,
        'vue/require-prop-types': 0,
        'vue/html-indent': [
            1, 4, {
                'attribute': 1,
                'baseIndent': 1,
                'closeBracket': 0,
                'alignAttributesVertically': false,
                'ignores': []
            }
        ],
        'brace-style': [1, 'stroustrup'],
        'vue/v-bind-style': [
            'error',
            'shorthand'
        ]
    }
};
