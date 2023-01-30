import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';

import PrimaryAction from './PrimaryAction';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';

const props = {
  content: 'product',
  onAction: jest.fn(),
  // disabled: true,
};
// const p ={
//   content: 'product',
//   url: '/product',
// }

const BackBtn = (fProps) => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <PrimaryAction {...fProps} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for PrimaryAction', () => {
  test('Component PrimaryAction is rendered', () => {
    render(BackBtn(props));
    expect(screen.getByTestId('primary-action')).not.toBeNull();
  });

  test('When the Disablet walue == True', () => {
    render(
      <EcosystemThemeProvider theme={LightTheme}>
        <PrimaryAction
          content={'Save'}
          disabled={true}
          onAction={() => console.log('save button')}
        />
      </EcosystemThemeProvider>,
    );
    const primaryAction = screen.getByTestId('primary-action');
    expect(primaryAction.querySelector('button')).toBeDisabled();
  });

  test('When the Disablet walue == Falce', () => {
    render(BackBtn(props));
    const primaryAction = screen.getByTestId('primary-action');
    expect(primaryAction.querySelector('button')).toBeEnabled();
  });

  test('should make an action on PrimaryAction option ', () => {
    render(BackBtn(props));
    screen.getByRole('button').click();
    expect(props.onAction).toBeCalled();
  });

  test('Component PrimaryAction contain product text', () => {
    render(BackBtn(props));
    const actionBtn = screen.getByTestId('primary-action');
    console.log(actionBtn.textContent);
    expect(actionBtn.textContent).toEqual('product');
  });

  test('Component PrimaryAction contain product text', () => {
    render(BackBtn(props));
    const actionBtn = screen.getByRole('button', {
      name: /product/i
    });
    expect(actionBtn).toHaveAttribute('tabindex', '0');
    expect(actionBtn).toHaveAttribute('type', 'button');
    expect(actionBtn).toHaveAttribute('color', 'primary');
    expect(actionBtn).toHaveAttribute('variant', 'contained');
  });
});
