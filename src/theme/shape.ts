import { IShape } from '../interfaces';

const borderWidth = {
  '1': '0.0625rem',
  '2': '0.125rem',
  '3': '0.1875rem',
  '4': '0.25rem',
  '5': '0.3125rem',
};

const borderRadius = {
  '05': '0.125rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.875rem',
  base: '0.1875rem',
  large: '0.375rem',
  half: '50%',
};

const shape: IShape = {
  navigation: {
    width: '15rem',
  },
  topBar: {
    height: '3.5rem',
  },
  border: {
    width: borderWidth,
    radius: borderRadius,
  },
};

export default shape;
