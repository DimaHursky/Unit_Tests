import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import ESDropZone from './ESDropZone';
import EcosystemWrapper from '../../../tests/EcosystemWrapper';
import { ESFileUpload } from '../ESFileUpload';
import { ESDropZoneProps } from './ESDropZone.types';

const defaultOverlayText = 'default overlay text';
const errorOverlayText = 'error overlay text';
const actionHint = 'description';
const actionTitle = 'add file';

const dropZoneTestIds = {
  dropZone: 'drop-zone',
  overlay: 'overlay',
};

const TestingComponent = (props: ESDropZoneProps) => {
  const fileUpload = (
    <ESFileUpload actionHint={actionHint} actionTitle={actionTitle} />
  );

  return (
    <EcosystemWrapper>
      <ESDropZone {...props}>{fileUpload}</ESDropZone>
    </EcosystemWrapper>
  );
};

describe('Running Test for ESDropZone', () => {
  test('Component ESDropZone is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(dropZoneTestIds.dropZone)).not.toBeNull();
  });

  test('ESDropZone default overlay is rendered', () => {
    const { getByTestId } = render(
      <TestingComponent overlayText={defaultOverlayText} />,
    );

    fireEvent.dragEnter(getByTestId(dropZoneTestIds.dropZone));
    expect(getByTestId(dropZoneTestIds.overlay)).toHaveTextContent(
      defaultOverlayText,
    );
  });

  test('ESDropZone error overlay is rendered', () => {
    const { getByTestId, debug } = render(
      <TestingComponent
        errorOverlayText={errorOverlayText}
        customValidator={() => false}
      />,
    );

    fireEvent.dragEnter(getByTestId(dropZoneTestIds.dropZone), {
      dataTransfer: {
        files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
      },
    });
    debug();
    expect(getByTestId(dropZoneTestIds.overlay)).toHaveTextContent(
      errorOverlayText,
    );
  });

  test('ESDropZone action title and action hint is rendered', () => {
    const { getByText } = render(<TestingComponent />);

    expect(getByText(actionTitle)).toBeInTheDocument();
    expect(getByText(actionHint)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  test('ESDropZone components is rendered be default', () => {
    const result = render(<TestingComponent />);
    const dropZoneID = result.container.querySelector('#DropZone');

    screen.logTestingPlaygroundURL();
    expect(dropZoneID).toBeInTheDocument();
    expect(screen.getByText(/завантаження файлів/i)).toBeInTheDocument();
    expect(screen.getByTestId(/drop-zone/i)).toBeInTheDocument();
    expect(screen.getByText(/add file/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });

  test('ESDropZone attributes is rendered by default', () => {
    const result = render(<TestingComponent />);
    const dropZoneID = result.container.querySelector('#DropZone');

    expect(screen.getByTestId('drop-zone')).toHaveAttribute(
      'aria-disabled',
      'false',
    );
    expect(dropZoneID).toHaveProperty('type', 'file');
    expect(dropZoneID).toHaveProperty('autocomplete', 'off');
    expect(dropZoneID).toHaveProperty('multiple', true);
  });
});


