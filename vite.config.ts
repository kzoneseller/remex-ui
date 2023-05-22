import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'remex-ui',
      formats: ['cjs', 'es'],
      fileName: format => (format === 'cjs' ? 'index.js' : 'index.es.js'),
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
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: 'constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      {
        find: 'types',
        replacement: path.resolve(__dirname, 'src/types'),
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils'),
      },
    ],
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});
