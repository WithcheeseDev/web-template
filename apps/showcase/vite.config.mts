/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const root = import.meta.dirname;
const workspaceRoot = path.resolve(root, '../..');

export default defineConfig(() => ({
  root,
  cacheDir: '../../node_modules/.vite/apps/showcase',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@web-templates/contracts': path.resolve(workspaceRoot, 'libs/shared/contracts/src/index.ts'),
      '@web-templates/ui-radix': path.resolve(workspaceRoot, 'libs/providers/radix/src/index.ts'),
      '@web-templates/ui-mui': path.resolve(workspaceRoot, 'libs/providers/mui/src/index.ts'),
      '@web-templates/showcase-engine': path.resolve(workspaceRoot, 'libs/shared/showcase-engine/src/index.ts'),
      '@web-templates/utils': path.resolve(workspaceRoot, 'libs/shared/utils/src/index.ts'),
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    name: '@web-templates/showcase',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
}));
