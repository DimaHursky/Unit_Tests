import * as React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ESSelect from './ESSelect';
import { EcosystemThemeProvider } from '../../providers';
import { LightTheme } from '../../theme';
import { ESSelectProps, ISelectGroup, IStrictOption } from './ESSelect.types';
import { FormControl } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { normalizeOption } from './helpers';

const selectGroup: ISelectGroup[] = [
  {
    title: 'Options Title',
    options: [
      { label: 'Newest update', value: 'Newest update', prefix: 'prefix' },
      { label: 'Oldest update', value: 'Oldest update', prefix: 'prefix' },
      {
        label: 'Most spent',
        value: 'Most spent',
        prefix: <SortIcon />,
      },
    ],
  },
];

const labelText = 'Select label';
const helpText = 'Help Text';
const errorText = 'Error text';

const TestingComponent = (props: {
  options: ESSelectProps['options'];
  labelInline?: ESSelectProps['labelInline'];
  disabled?: ESSelectProps['disabled'];
}) => {
  const { options = [], ...rest } = props;

  const normalizedOptions = options.map(normalizeOption);

  return (
    <EcosystemThemeProvider theme={LightTheme}>
      <FormControl fullWidth>
        <ESSelect
          {...rest}
          label={labelText}
          options={normalizedOptions}
          defaultOpen
          labelAction={{ content: 'Look up codes', url: '/action' }}
          helpText={helpText}
          error={errorText}
        />
      </FormControl>
    </EcosystemThemeProvider>
  );
};

const selectTestIds = {
  select: 'select',
  selectedItem: 'selected-item',
  optionTitle: 'options-title',
  optionItem: 'options-item',
  btn: 'action-btn',
  inlineLabel: 'inline-label',
  prefix: 'prefix',
  text: 'help-text',
};

describe('Running Test for ESSelect', () => {
  test('Component ESSelect is rendered', () => {
    const { getByTestId } = render(<TestingComponent options={selectGroup} />);
    expect(getByTestId(selectTestIds.select)).not.toBeNull();
  });

  test('Selected item is render', () => {
    const { getByTestId } = render(<TestingComponent options={selectGroup} />);
    expect(getByTestId(selectTestIds.selectedItem)).toBeInTheDocument();
  });

  test('ESSelect options is render', () => {
    const { getByTestId } = render(<TestingComponent options={selectGroup} />);

    selectGroup.forEach(({ title, options }) => {
      expect(
        getByTestId(`${selectTestIds.optionTitle}-${title}`),
      ).not.toBeNull();

      options.forEach((option) => {
        const { value } = option as IStrictOption;
        expect(
          getByTestId(`${selectTestIds.optionItem}-${value}`),
        ).not.toBeNull();
      });
    });
  });

  test('ESSelect option prefix is render', () => {
    const { getByTestId } = render(<TestingComponent options={selectGroup} />);

    expect(getByTestId(selectTestIds.selectedItem)).toContainElement(
      getByTestId(selectTestIds.prefix),
    );
  });

  test('ESSelect label is rendered', () => {
    const { getByText } = render(<TestingComponent options={selectGroup} />);
    expect(getByText(labelText)).toBeInTheDocument();
  });

  test('ESSelect action button is rendered', () => {
    const { getByTestId } = render(<TestingComponent options={selectGroup} />);
    expect(getByTestId(selectTestIds.btn)).toBeInTheDocument();
  });

  test('ESSelect label is inline', () => {
    const { getByTestId } = render(
      <TestingComponent options={selectGroup} labelInline />,
    );
    expect(getByTestId(selectTestIds.select)).toContainElement(
      getByTestId(selectTestIds.inlineLabel),
    );
  });

  test('Component ESSelect is disable', () => {
    const { getByTestId } = render(
      <TestingComponent options={selectGroup} labelInline disabled />,
    );
    expect(getByTestId(selectTestIds.select)).toHaveClass('Mui-disabled');
  });

  test('ESSelect help text is rendered', () => {
    const { getByText } = render(
      <TestingComponent options={selectGroup} labelInline disabled />,
    );
    expect(getByText(helpText)).not.toBeNull();
  });

  test('ESSelect error text is rendered', () => {
    const { getByText } = render(
      <TestingComponent options={selectGroup} labelInline disabled />,
    );
    expect(getByText(errorText)).not.toBeNull();
  });
});
