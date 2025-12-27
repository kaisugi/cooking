import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    // Astroファイルの設定
    ...eslintPluginAstro.configs.recommended,

    // TypeScriptファイルの設定
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            // インデント: 半角スペース4つ
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1,
                },
            ],
            '@typescript-eslint/indent': [
                'error',
                4,
                {
                    SwitchCase: 1,
                },
            ],
        },
    },

    // JavaScriptファイルの設定
    {
        files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
        rules: {
            // インデント: 半角スペース4つ
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1,
                },
            ],
        },
    },

    // Astroファイルの設定
    {
        files: ['**/*.astro'],
        rules: {
            // インデント: 半角スペース4つ
            indent: [
                'error',
                4,
                {
                    SwitchCase: 1,
                },
            ],
        },
    },

    // Prettierとの競合を避ける（必ず最後に配置）
    eslintConfigPrettier,
];
