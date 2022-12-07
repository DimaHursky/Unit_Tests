import {
  IHideableStrictOption,
  ISelectGroup,
  ISelectOption,
  IStrictGroup,
  IStrictOption,
} from './ESSelect.types';

const normalizeStringOption = (option: string): IStrictOption => ({
  label: option,
  value: option,
});

const isString = (option: ISelectOption | ISelectGroup): option is string =>
  typeof option === 'string';

export const isGroup = (
  option: ISelectOption | ISelectGroup,
): option is ISelectGroup =>
  typeof option === 'object' && 'options' in option && option.options != null;

export const normalizeOption = (
  option: ISelectOption | ISelectGroup,
): IHideableStrictOption | IStrictGroup => {
  if (isString(option)) {
    return normalizeStringOption(option);
  }
  if (isGroup(option)) {
    const { title, options } = option;
    return {
      title,
      options: options.map((selectOption: ISelectOption) =>
        isString(selectOption)
          ? normalizeStringOption(selectOption)
          : selectOption,
      ),
    };
  }
  return option;
};

export const flattenOptions = (
  options: (IHideableStrictOption | IStrictGroup)[],
): IHideableStrictOption[] => {
  let flatOptions: IHideableStrictOption[] = [];

  options.forEach((optionOrGroup) => {
    if (isGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(optionOrGroup.options);
    } else {
      flatOptions.push(optionOrGroup);
    }
  });

  return flatOptions;
};

export const getSelectedOption = (
  options: (IHideableStrictOption | IStrictGroup)[],
  value: string,
) => {
  const flatOptions = flattenOptions(options);
  let selectedOption = flatOptions.find(
    (option: IStrictOption) => option.value === value,
  );

  if (selectedOption === undefined) {
    selectedOption = flatOptions.find((option) => !option.hidden);
  }

  return selectedOption || { value: '', label: '' };
};
