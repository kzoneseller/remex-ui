import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    check: false,
  },
  viteFinal: async (config, { configType }) => {
    if (config.resolve?.alias)
      config.resolve.alias = {
        ...config.resolve.alias,
        assets: resolve(__dirname, '../src/assets'),
        components: resolve(__dirname, '../src/components'),
        constants: resolve(__dirname, '../src/constants'),
        types: resolve(__dirname, '../src/types'),
        utils: resolve(__dirname, '../src/utils'),
      };

    return config;
  },
};
export default config;
