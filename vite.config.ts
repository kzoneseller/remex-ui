import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';
import dts from 'vite-plugin-dts';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RemexUi',
      fileName: 'remex-ui',
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
    dts(),
  ],
  resolve: {
    alias: {
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants'),
      types: resolve(__dirname, 'src/types'),
      utils: resolve(__dirname, 'src/utils'),
    },
  },
});
