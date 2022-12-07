import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import MobileNavBar from './MobileNavBar';

export default {
  title: 'Components/MobileNavBar',
  component: MobileNavBar,
  argTypes: {},
} as ComponentMeta<typeof MobileNavBar>;

const Template: ComponentStory<typeof MobileNavBar> = (args) => (
  <MobileNavBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
