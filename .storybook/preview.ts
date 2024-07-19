import type {Preview} from '@storybook/react';

const customViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '414px',
      height: '89spx',
    },
  },
};

const preview: Preview = {
  parameters: {
    layout: 'padded',
    viewport: {
      viewports: customViewports,
      defaultViewport: 'mobile',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
