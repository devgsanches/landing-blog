import path from 'path'
import { defineConfig } from 'vitest/config'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url))

const root = path.resolve(dirname, './')

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    alias: {
      '@': root
    }
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      include: ['app/**/_components/**/*.{ts,tsx}'],
      exclude: ['app/**/components/ui/**/*.{ts,tsx,js,jsx}']
    },
    include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
    exclude: [
      '**/*.stories.{ts,tsx}',
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**'
    ]
    // Projeto Storybook desabilitado temporariamente até resolver o bug do Next.js
    // projects: [
    //   {
    //     extends: true,
    //     plugins: [
    //       storybookTest({
    //         configDir: path.join(dirname, '.storybook')
    //       })
    //     ],
    //     test: {
    //       name: 'storybook',
    //       environment: 'happy-dom',
    //       setupFiles: ['.storybook/vitest.setup.ts'],
    //       exclude: [
    //         '**/node_modules/**',
    //         '**/dist/**',
    //         '**/.next/**',
    //         '**/coverage/**'
    //       ]
    //     }
    //   }
    // ]
  }
})
