import * as React from 'react';
import { ReactNode, useCallback, useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ESDropZone from './ESDropZone';
import { ESFileUpload, ESFileUploadProps } from '../ESFileUpload';
import { Box, Typography } from '@mui/material';
import { InsertDriveFileOutlined } from '@mui/icons-material';
import EcosystemWrapper from '../../../tests/EcosystemWrapper';
import { ESDropZoneProps } from './ESDropZone.types';

export default {
  title: 'Components/ESDropZone',
  component: ESDropZone,
  argTypes: {},
} as ComponentMeta<typeof ESDropZone>;

const Container = ({
  children,
  maxWidth,
}: {
  children?: ReactNode;
  maxWidth?: number;
}) => (
  <Box
    sx={
      maxWidth
        ? {
            maxWidth,
            width: '100%',
            margin: '0 auto',
          }
        : {}
    }
  >
    {children}
  </Box>
);

const StoryComponent = (props: ESDropZoneProps & ESFileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);

  const { actionTitle, actionHint, ...rest } = props;

  const handleDropZoneDrop = useCallback(
    (_dropFiles: File[], acceptedFiles: File[], _rejectedFiles: File[]) =>
      setFiles((files) => [...files, ...acceptedFiles]),
    [],
  );

  const fileUpload = !files.length && (
    <ESFileUpload actionHint={actionHint} actionTitle={actionTitle} />
  );

  const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

  const uploadedFiles = !!files.length && (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}
    >
      {files.map((file, i) => (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
          key={i}
        >
          {validImageTypes.includes(file.type) ? (
            <img
              src={window.URL.createObjectURL(file)}
              alt={file.name}
              style={{
                width: '2.5rem',
                display: 'block',
              }}
            />
          ) : (
            <InsertDriveFileOutlined fontSize="small" />
          )}
          <Box
            sx={{
              marginTop: '1rem',
              marginLeft: '1rem',
            }}
          >
            {file.name}
            <Typography variant="caption">{file.size} bytes</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <ESDropZone {...rest} customDrop={handleDropZoneDrop}>
      {uploadedFiles}
      {fileUpload}
    </ESDropZone>
  );
};

const Template: ComponentStory<typeof ESDropZone> = (args) => (
  <EcosystemWrapper>
    <Container maxWidth={800}>
      <StoryComponent {...args} />
    </Container>
  </EcosystemWrapper>
);

const TemplateMedium: ComponentStory<typeof ESDropZone> = (args) => (
  <EcosystemWrapper>
    <Container maxWidth={150}>
      <StoryComponent {...args} />
    </Container>
  </EcosystemWrapper>
);

const TemplateSmall: ComponentStory<typeof ESDropZone> = (args) => (
  <EcosystemWrapper>
    <Container maxWidth={50}>
      <StoryComponent {...args} />
    </Container>
  </EcosystemWrapper>
);

const TemplateCustomFileUploadText: ComponentStory<typeof ESDropZone> = (
  args,
) => (
  <EcosystemWrapper>
    <Container maxWidth={800}>
      <StoryComponent {...args} actionHint="Формати .gif, .jpg, and .png" />
    </Container>
  </EcosystemWrapper>
);

export const Default = Template.bind({});
Default.args = {};

export const WithoutOutline = Template.bind({});
WithoutOutline.args = {
  outline: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Тематичні файли',
};

export const WithLabelAction = Template.bind({});
WithLabelAction.args = {
  labelAction: { content: 'Look up codes', url: '/action' },
  label: 'Тематичні файли',
};

export const WithImageFileUpload = Template.bind({});
WithImageFileUpload.args = {
  accept: 'image/*',
  type: 'image',
};

export const WithSingleFileUpload = Template.bind({});
WithSingleFileUpload.args = {
  allowMultiple: false,
};

export const WithDropOnPage = Template.bind({});
WithDropOnPage.args = {
  dropOnPage: true,
};

export const AcceptsOnlySVGFiles = Template.bind({});
AcceptsOnlySVGFiles.args = {
  accept: 'image/svg+xml',
  type: 'image',
  errorOverlayText: 'Файл повинен бути в форматі .svg',
};

export const MediumSized = TemplateMedium.bind({});
MediumSized.args = {};

export const SmallSized = TemplateSmall.bind({});
SmallSized.args = {};

export const CustomFileUploadText = TemplateCustomFileUploadText.bind({});
CustomFileUploadText.args = {
  variableHeight: true,
};
