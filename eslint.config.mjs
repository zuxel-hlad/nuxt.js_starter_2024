// @ts-check
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import eslintPluginPrettier from 'eslint-plugin-prettier'

import withNuxt from './.nuxt/eslint.config.mjs'
export default withNuxt({
    plugins: {
        prettier: eslintPluginPrettier,
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'import/no-default-export': 'off',
        'import/named': 'off',
        'import/no-cycle': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-html': 'off',
        'prettier/prettier': 'warn',
        ...eslintConfigPrettier.rules,
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'all',
                argsIgnorePattern: '^_',
                caughtErrors: 'all',
                caughtErrorsIgnorePattern: '^_',
                destructuredArrayIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                ignoreRestSiblings: true,
            },
        ],
        '@typescript-eslint/no-empty-object-type': [
            'error',
            {
                allowInterfaces: 'always',
            },
        ],
        'vue/html-self-closing': [
            'warn',
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
    },
})
