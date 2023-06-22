import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), /@emotion/g],
      output: {
        interop: 'auto',
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
    svgr({ exportAsDefault: true }),
    dts({ insertTypesEntry: true }),
  ],
  resolve: {
    alias: [
      {
        find: 'assets',
        replacement: resolve(__dirname, 'src/assets'),
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components'),
      },
      {
        find: 'constants',
        replacement: resolve(__dirname, 'src/constants'),
      },
      {
        find: 'types',
        replacement: resolve(__dirname, 'src/types'),
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
    ],
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
