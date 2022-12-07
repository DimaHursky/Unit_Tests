import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SearchBtnSkeleton } from './index';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const TestingComponent = () => (
  <EcosystemThemeProvider theme={LightTheme}>
    <SearchBtnSkeleton data-testid="skeleton" />
  </EcosystemThemeProvider>
);

const skeletonTestIds = {
  skeleton: 'skeleton',
};

describe('Running Test for SearchBtnSkeleton', () => {
  test('Component SearchBtnSkeleton is rendered', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(skeletonTestIds.skeleton)).not.toBeNull();
  });

  test('SearchBtnSkeleton component to have a root class', () => {
    const { getByTestId } = render(<TestingComponent />);
    expect(getByTestId(skeletonTestIds.skeleton)).toHaveClass(
      'MuiSkeleton-root',
      'MuiSkeleton-rounded',
      'MuiSkeleton-wave',
    );
  });
});
