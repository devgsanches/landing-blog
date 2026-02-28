// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

// eslint.config.mts
import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import tsPlugin from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'out/**',
      'dist/**',
      'build/**',
      '*.config.{js,mjs,cjs,ts,mts}',
      'next-env.d.ts'
    ]
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      parser: tsPlugin.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
      ],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    extends: [
      js.configs.recommended,
      tsPlugin.configs.recommended,
      reactPlugin.configs.flat.recommended,
      prettier
    ]
  }
])
