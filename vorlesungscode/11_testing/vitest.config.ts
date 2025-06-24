/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: [], // or your global unit test setup if needed
    include: ['tests/**/*.test.ts'], // or adjust to match your structure
  },
  projects: [
    {
      extends: true,
      test: {
        name: 'storybook',
        setupFiles: ['.storybook/vitest.setup.js'],
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{ browser: 'chromium' }],
        },
      },
      plugins: [
        storybookTest({
          configDir: path.join(dirname, '.storybook'),
          storyPatterns: ['**/*.stories.@(js|jsx|ts|tsx|vue)'],
        }),
      ],
    }
  ]
});