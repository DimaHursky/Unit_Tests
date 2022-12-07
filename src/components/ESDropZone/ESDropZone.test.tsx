import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
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
  });
});
