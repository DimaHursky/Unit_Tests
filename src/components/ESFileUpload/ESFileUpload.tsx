import React, { ForwardedRef, useContext } from 'react';
import { Typography, useThemeProps } from '@mui/material';
import { Upload } from '@mui/icons-material';
import clsx from 'clsx';
import { useTranslate } from '@pankod/refine-core';
import { ESFileUploadProps } from './ESFileUpload.types';
import { ESDropZoneContext } from '../ESDropZone/ESDropZone.context';
import ESFileUploadStyled, {
  ActionHintStyled,
  UploadActionStyled,
  UploadContentStyled,
} from './ESFileUpload.styled';
import { SizeEnum } from '../ESDropZone';
import { createAllowMultipleKey } from '../ESDropZone/utils';

const ESFileUpload = React.forwardRef(
  (inProps: ESFileUploadProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESFileUpload' });

    const t = useTranslate();

    const { size, measuring, disabled, type, allowMultiple } =
      useContext(ESDropZoneContext);

    const allowMultipleKey = createAllowMultipleKey(allowMultiple);

    const {
      actionTitle = t(`ui.dropZone.${allowMultipleKey}.actionTitle.${type}`),
      actionHint,
    } = props;

    const actionClassNames = clsx({
      disabled,
    });

    const actionMarkup = (
      <UploadActionStyled className={actionClassNames}>
        {actionTitle}
      </UploadActionStyled>
    );

    const fileUploadClassName = clsx({
      measuring,
      large: size === SizeEnum.LARGE,
      small: size === SizeEnum.SMALL,
    });

    const actionHintMarkup = actionHint && (
      <ActionHintStyled>
        <Typography variant="caption" color="text.subdued">
          {actionHint}
        </Typography>
      </ActionHintStyled>
    );

    let viewMarkup;
    switch (size) {
      case SizeEnum.LARGE:
        viewMarkup = (
          <UploadContentStyled>
            {actionMarkup}
            {actionHintMarkup}
          </UploadContentStyled>
        );
        break;
      case SizeEnum.MEDIUM:
        viewMarkup = (
          <UploadContentStyled>
            {actionMarkup}
            {actionHintMarkup}
          </UploadContentStyled>
        );
        break;
      case SizeEnum.SMALL:
        viewMarkup = <Upload fontSize="small" />;
        break;
      default:
    }

    return (
      <ESFileUploadStyled ref={ref} className={fileUploadClassName}>
        {viewMarkup}
      </ESFileUploadStyled>
    );
  },
);

export default ESFileUpload;
