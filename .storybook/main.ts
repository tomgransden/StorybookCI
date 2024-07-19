import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-react-native-web',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
};
export default config;
