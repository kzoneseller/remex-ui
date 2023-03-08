import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'RemexUi',
      fileName: format => `remex-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      tsDecorators: true,
    }),
    svgr(),
    splitVendorChunkPlugin(),
    dts({
      insertTypesEntry: true,
      outputDir: './types',
    }),
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
    },
  },
});
