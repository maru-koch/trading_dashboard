import React from 'react';
import { Button } from './index';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  argTypes: {
    btnType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Click Me',
  btnType: 'primary',
  round: false,
  stretch: false,
  children: 'Default Text',
};

export const Round = {
  args: {
    btnType: 'secondary',
    round: true,
    text: 'round button',
  },
};
