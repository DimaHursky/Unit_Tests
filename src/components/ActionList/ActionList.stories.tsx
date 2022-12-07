import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ActionList from './ActionList';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import ContentCopy from '@mui/icons-material/ContentCopy';

export default {
  title: 'Components/ActionList',
  component: ActionList,
  argTypes: {},
} as ComponentMeta<typeof ActionList>;

const Template: ComponentStory<typeof ActionList> = (args) => (
  <EcosystemThemeProvider theme={LightTheme}>
    <ActionList {...args} />
  </EcosystemThemeProvider>
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      content: 'Import file',
      onAction: () => console.log('import file 1'),
      icon: <ContentCopy fontSize="small" />,
    },
    {
      content: 'Export file',
      onAction: () => console.log('export file 1'),
    },
  ],
};

export const SectionedActionList = Template.bind({});
SectionedActionList.args = {
  sections: [
    {
      title: 'File options',
      items: [
        {
          content: 'Import file',
          onAction: () => console.log('import file 1'),
          icon: <ContentCopy fontSize="small" />,
          suffix: <ContentCopy fontSize="small" />,
        },
        {
          content: 'Export file',
          onAction: () => console.log('export file 1'),
        },
      ],
    },
    {
      title: 'File options2',
      items: [
        {
          content: 'Import file2',
          onAction: () => console.log('import file 21'),
          icon: <ContentCopy fontSize="small" />,
        },
        {
          content: 'Export file2',
          onAction: () => console.log('export file 22'),
        },
      ],
    },
  ],
};
