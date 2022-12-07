import React, {
  ForwardedRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Box, Typography, useThemeProps } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import { useTranslate } from '@pankod/refine-core';
import {
  DropZoneLabelProps,
  ESDropZoneProps,
  SizeEnum,
} from './ESDropZone.types';
import ESDropZoneStyled, {
  ContainerStyled,
  ErrorIconStyled,
  LabelWrapperStyled,
  OverlayStyled,
} from './ESDropZone.styled';
import useToggle from './utils/useToggle';
import {
  createAllowMultipleKey,
  defaultAllowMultiple,
  fileAccepted,
  getDataTransferFiles,
  isServer,
  stopEvent,
  variationName,
} from './utils';
import { useComponentDidMount } from './utils/useComponentDidMount';
import { ESDropZoneContext } from './ESDropZone.context';
import { OverlayBlockStyled } from '../ESFileUpload/ESFileUpload.styled';
import { ESButton } from '../ESButton';
import { ESTextFieldLabel } from '../ESTextFieldLabel';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { ESDropZoneInput } from '../ESDropZoneInput';

// FIXME: create common label component
const DropZoneLabel = ({
  label,
  labelAction,
  classes,
  labelHidden,
}: DropZoneLabelProps) => {
  const actionMarkup = labelAction && (
    <Box sx={{ flex: '0 0 auto' }}>
      <ESButton
        sx={{ paddingRight: '0.5rem' }}
        variant="text"
        href={labelAction.url}
        onClick={labelAction.onAction}
        onMouseEnter={labelAction.onMouseEnter}
        onTouchStart={labelAction.onTouchStart}
      >
        {labelAction.content}
      </ESButton>
    </Box>
  );

  const labelMarkup = label && (
    <LabelWrapperStyled>
      <ESTextFieldLabel classes={classes}>{label}</ESTextFieldLabel>
      {actionMarkup}
    </LabelWrapperStyled>
  );

  return labelHidden ? (
    <VisuallyHidden>{labelMarkup}</VisuallyHidden>
  ) : (
    <Box>{labelMarkup}</Box>
  );
};

const ESDropZone = React.forwardRef(
  (inProps: ESDropZoneProps, ref: ForwardedRef<HTMLDivElement>) => {
    const props = useThemeProps({ props: inProps, name: 'ESDropZone' });

    const {
      dropOnPage,
      label,
      labelAction,
      labelHidden,
      children,
      disabled = false,
      outline = true,
      accept,
      active,
      overlay = true,
      allowMultiple = defaultAllowMultiple,
      overlayText,
      errorOverlayText,
      id: idProp,
      type = 'file',
      error,
      openFileDialog,
      variableHeight,
      customClick,
      customFileDialogClose,
      customValidator,
      customDrop,
      customDropAccepted,
      customDropRejected,
      customDragEnter,
      customDragOver,
      customDragLeave,
    } = props;

    const t = useTranslate();

    const node = useRef<HTMLDivElement>(null);
    const dragTargets = useRef<EventTarget[]>([]);
    const [dragging, setDragging] = useState<boolean>(false);
    const [internalError, setInternalError] = useState<boolean>(false);
    const [size, setSize] = useState<SizeEnum>(SizeEnum.LARGE);
    const [measuring, setMeasuring] = useState(true);

    const {
      value: focused,
      setTrue: handleFocus,
      setFalse: handleBlur,
    } = useToggle(false);

    const overlayMarkup = (Icon: JSX.Element, text: string) => (
      <OverlayStyled data-testid="overlay">
        <OverlayBlockStyled>
          {size === SizeEnum.SMALL && Icon}
          {(size === SizeEnum.MEDIUM || size === SizeEnum.LARGE) && (
            <Typography>{text}</Typography>
          )}
        </OverlayBlockStyled>
      </OverlayStyled>
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const adjustSize = useCallback(
      debounce(() => {
        if (!node.current) {
          return;
        }
        if (variableHeight) {
          setMeasuring(false);
          return;
        }

        let itemSize = SizeEnum.LARGE;
        const { width } = node.current.getBoundingClientRect();
        if (width < 100) {
          itemSize = SizeEnum.SMALL;
        } else if (width < 160) {
          itemSize = SizeEnum.MEDIUM;
        }

        setSize(itemSize);
        if (measuring) {
          setMeasuring(false);
        }
      }, 50),
      [],
    );

    const getValidatedFiles = useCallback(
      (files: File[] | DataTransferItem[]) => {
        const acceptedFiles: File[] = [];
        const rejectedFiles: File[] = [];

        Array.from(files as File[]).forEach((file: File) => {
          if (
            !fileAccepted(file, accept) ||
            (customValidator && !customValidator(file))
          ) {
            rejectedFiles.push(file);
          } else {
            acceptedFiles.push(file);
          }
        });

        if (!allowMultiple) {
          acceptedFiles.splice(1, acceptedFiles.length);
          rejectedFiles.push(...acceptedFiles.slice(1));
        }

        return { files, acceptedFiles, rejectedFiles };
      },
      [accept, allowMultiple, customValidator],
    );

    const handleDrop = useCallback(
      (e: DragEvent) => {
        stopEvent(e);
        if (disabled) {
          return;
        }

        const fileList = getDataTransferFiles(e);

        const { files, acceptedFiles, rejectedFiles } =
          getValidatedFiles(fileList);

        dragTargets.current = [];

        setDragging(false);
        setInternalError(rejectedFiles.length > 0);

        if (customDrop) {
          customDrop(files as File[], acceptedFiles, rejectedFiles);
        }
        if (customDropAccepted && acceptedFiles.length) {
          customDropAccepted(acceptedFiles);
        }
        if (customDropRejected && rejectedFiles.length) {
          customDropRejected(rejectedFiles);
        }

        (e.target as HTMLInputElement).value = '';
      },
      [
        disabled,
        getValidatedFiles,
        customDrop,
        customDropAccepted,
        customDropRejected,
      ],
    );

    const handleDragEnter = useCallback(
      (e: DragEvent) => {
        stopEvent(e);
        if (disabled) {
          return;
        }
        const fileList = getDataTransferFiles(e);

        if (e.target && !dragTargets.current.includes(e.target)) {
          dragTargets.current.push(e.target);
        }

        if (dragging) {
          return;
        }

        const { rejectedFiles } = getValidatedFiles(fileList);
        setDragging(true);
        setInternalError(rejectedFiles.length > 0);

        if (customDragEnter) {
          customDragEnter();
        }
      },
      [disabled, dragging, getValidatedFiles, customDragEnter],
    );

    const handleDragOver = useCallback(
      (e: DragEvent) => {
        stopEvent(e);
        if (!disabled && customDragOver) {
          customDragOver();
        }
      },
      [disabled, customDragOver],
    );

    const handleDragLeave = useCallback(
      (e: DragEvent) => {
        e.preventDefault();

        if (disabled) {
          return;
        }

        dragTargets.current = dragTargets.current.filter((el) => {
          const compareNode = dropOnPage && !isServer ? document : node.current;
          return (
            el !== e.target && compareNode && compareNode.contains(el as Node)
          );
        });
        if (dragTargets.current.length > 0) {
          return;
        }

        setDragging(false);
        setInternalError(false);

        if (customDragLeave) {
          customDragLeave();
        }
      },
      [disabled, dropOnPage, customDragLeave],
    );

    useEffect(() => {
      const dropNode = dropOnPage ? document : node.current;

      if (!dropNode) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dropNode.addEventListener<DragEvent>('drop', handleDrop);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dropNode.addEventListener<DragEvent>('dragover', handleDragOver);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dropNode.addEventListener<DragEvent>('dragenter', handleDragEnter);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      dropNode.addEventListener<DragEvent>('dragleave', handleDragLeave);
      window.addEventListener('resize', adjustSize);

      // eslint-disable-next-line consistent-return
      return () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dropNode.removeEventListener('drop', handleDrop);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dropNode.removeEventListener('dragover', handleDragOver);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dropNode.removeEventListener('dragenter', handleDragEnter);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        dropNode.removeEventListener('dragleave', handleDragLeave);
        window.removeEventListener('resize', adjustSize);
      };
    }, [
      adjustSize,
      dropOnPage,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
    ]);

    useComponentDidMount(() => adjustSize());

    const id = idProp || 'DropZone';
    const allowMultipleKey = createAllowMultipleKey(allowMultiple);

    const open = () => {
      const fileInputNode =
        node.current && node.current.querySelector(`#${id}`);

      if (fileInputNode && fileInputNode instanceof HTMLElement) {
        fileInputNode.click();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }

      if (customClick) {
        customClick(e);
        return;
      }
      open();
    };

    const overlayTextWithDefault =
      overlayText === undefined
        ? t(`ui.dropZone.${allowMultipleKey}.overlayText.${type}`)
        : overlayText;

    const errorOverlayTextWithDefault =
      errorOverlayText === undefined
        ? t(`ui.dropZone.errorOverlayText.${type}`)
        : errorOverlayText;

    const labelValue =
      label || t(`ui.dropZone.${allowMultipleKey}.label.${type}`);
    const labelHiddenValue = label ? labelHidden : true;

    const inputAttributes = {
      id,
      accept,
      disabled,
      type: 'file' as const,
      multiple: allowMultiple,
      onChange: handleDrop,
      onFocus: handleFocus,
      onBlur: handleBlur,
    };

    const dropZoneClasses = clsx({
      hasOutline: outline,
      focused,
      isDragging: active || dragging,
      isDisabled: disabled,
      hasError: internalError || error,
      measuring,
      [variationName('size', size)]: !variableHeight,
    });

    const dragOverlay =
      (active || dragging) &&
      !internalError &&
      !error &&
      overlay &&
      overlayMarkup(
        <CloudUpload color="secondary" fontSize="small" />,
        overlayTextWithDefault,
      );

    const dragErrorOverlay =
      dragging &&
      (internalError || error) &&
      overlayMarkup(
        <ErrorIconStyled fontSize="small" />,
        errorOverlayTextWithDefault,
      );

    const context = useMemo(
      () => ({
        disabled,
        focused,
        size,
        type: type || 'file',
        measuring,
        allowMultiple,
      }),
      [allowMultiple, disabled, focused, measuring, size, type],
    );

    return (
      <ESDropZoneContext.Provider value={context}>
        <DropZoneLabel
          label={labelValue}
          labelAction={labelAction}
          labelHidden={labelHiddenValue}
        />
        <ESDropZoneStyled
          className={dropZoneClasses}
          ref={node}
          aria-disabled={disabled}
          onClick={handleClick}
          onDragStart={stopEvent}
          data-testid="drop-zone"
        >
          {dragOverlay}
          {dragErrorOverlay}
          <VisuallyHidden>
            <ESDropZoneInput
              {...inputAttributes}
              openFileDialog={openFileDialog}
              onFileDialogClose={customFileDialogClose}
            />
          </VisuallyHidden>
          <ContainerStyled>{children}</ContainerStyled>
        </ESDropZoneStyled>
      </ESDropZoneContext.Provider>
    );
  },
);

export default ESDropZone;
