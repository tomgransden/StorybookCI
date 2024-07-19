import React from 'react';
import {Meta, StoryFn} from '@storybook/react';

import {MyButton} from './Button';

export default {
  title: 'components/MyButton',
  component: MyButton,
} as Meta<typeof MyButton>;

export const Basic: StoryFn<typeof MyButton> = args => <MyButton {...args} />;

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
