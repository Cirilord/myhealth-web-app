import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url)
    , __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    {
        rules: {
            'jsx-quotes': [
                'error',
                'prefer-single'
            ],
            'quotes': [
                'error',
                'single'
            ],
            'semi': [
                'error',
                'always'
            ]
            // 'sort-keys': [
            //     'error'
            // ]
        }
    },
    {
        rules: {
            'react/jsx-newline': [
                'error',
                {
                    prevent: true
                }
            ],
            'react/jsx-boolean-value': [
                'error',
                'always'
            ],
            'react/jsx-closing-bracket-location': [
                'error',
                'after-props'
            ],
            'react/jsx-equals-spacing': [
                'error',
                'never'
            ],
            'react/jsx-fragments': [
                'error',
                'element'
            ],
            'react/jsx-sort-props': [
                'error',
                {
                    callbacksLast: false,
                    ignoreCase: true,
                    noSortAlphabetically: false,
                    shorthandFirst: false,
                    shorthandLast: false
                }
            ],
            'react/jsx-tag-spacing': [
                'error',
                {
                    afterOpening: 'never',
                    beforeClosing: 'never',
                    beforeSelfClosing: 'always',
                    closingSlash: 'allow'
                }
            ],
            'react/jsx-wrap-multilines': [
                'error',
                {
                    arrow: 'parens',
                    assignment: 'parens',
                    condition: 'ignore',
                    declaration: 'parens',
                    logical: 'ignore',
                    prop: 'ignore',
                    return: 'parens'
                }
            ]
        }
    }
];

export default eslintConfig;