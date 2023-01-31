import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import Breadcrumb from './Breadcrumb';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { BreadcrumbProps } from './Breadcrumb.types';
const props = {
  content: 'product',
  onAction: jest.fn(),
};
// const p ={
//   content: 'product',
//   url: '/product',
// }

const BackBtn = (fProps) => {
  return (
    <EcosystemThemeProvider theme={LightTheme}>
      {/* <Breadcrumb content={'Product'} url={'/product'} />  */}
      <Breadcrumb {...fProps} />
    </EcosystemThemeProvider>
  );
};

describe('Running Test for Breadcrumb', () => {
  test('Component Breadcrumb is rendered', () => {
    render(BackBtn(props));
    expect(screen.getByTestId('breadcrumb')).not.toBeNull();
  });

  test('Check if the action is work correctly', () => {
    render(BackBtn(props));
    screen.getByRole('button').click();
    expect(props.onAction).toBeCalled();
  });

  test('the button shoud contain link /product', () => {
    render(BackBtn(props));
    const linkElement = screen.getByText(/product/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Check if link have the href atribute, and link /product', () => {
    // render(BackBtn(p));
    render(
      BackBtn({
        content: 'product',
        url: '/product',
      }),
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/product');
  });
});
