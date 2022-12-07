import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DropdownMenu from './DropdownMenu';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import ContentCopy from '@mui/icons-material/ContentCopy';
import { ESButton } from '../ESButton';

export default {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  args = { ...args, anchorEl, onClose: handleClose };

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <ESButton onClick={handleClick}>Open</ESButton>
      <DropdownMenu {...args} />
    </EcosystemThemeProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
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
