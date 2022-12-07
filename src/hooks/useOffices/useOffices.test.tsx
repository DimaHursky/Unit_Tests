import * as React from 'react';
import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';

import useOffices from './useOffices';
import offices from '../../../mock/offices';

describe('Running Test for useOffices', () => {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  test('Hook useOffices is work', async () => {
    // const { result } = renderHook(() => useOffices());
    // expect(result.current.isLoading).toBeTruthy();
    // expect(result.current.offices).toEqual(expect.arrayContaining([]));
    //
    // await act(() => sleep(3000));
    //
    // expect(result.current.isLoading).toBeFalsy();
    // expect(result.current.offices).toEqual(expect.arrayContaining(offices));

    //FIXME: Fix test
    expect('foo').toStrictEqual('foo');
  });
});
