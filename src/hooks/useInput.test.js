import { renderHook, act } from '@testing-library/react-hooks';

import { useInput } from './useInput';
import { validInputs, invalidInputs } from '../utils/exampleInputs';

describe('useInput', () => {
  it('setValue should changing the state', () => {
    const { result } = renderHook(() => useInput());

    act(() => {
      result.current.setValue('new value');
    });

    expect(result.current.value).toBe('new value');
  });

  it('resetValue should works correctly', () => {
    const { result } = renderHook(() => useInput('value'));

    act(() => {
      result.current.resetValue();
    });

    expect(result.current.value).toBe('');
  });

  it('submitValue should return null if empty', () => {
    const { result } = renderHook(() => useInput(''));

    act(() => {
      result.current.submitValue();
    });

    expect(result.current.result).toBe(null);
    expect(result.current.isError).toBe(false);
  });

  invalidInputs.forEach(input => {
    it('submitValue should return error if value is invalid', () => {
      const { result } = renderHook(() => useInput(input));

      act(() => {
        result.current.submitValue();
      });

      expect(result.current.result).toBe(null);
      expect(result.current.isError).toBe(true);
    });
  });

  validInputs.forEach(input => {
    it('submitValue should not return null if value is valid', () => {
      const { result } = renderHook(() => useInput(input));

      act(() => {
        result.current.submitValue();
      });

      expect(result.current.result).not.toBe(null);
      expect(result.current.isError).toBe(false);
    });
  });

  it('submitValue should return correctly with remaining', () => {
    const { result } = renderHook(() => useInput('Rp17.525,00'));

    act(() => {
      result.current.submitValue();
    });

    expect(result.current.result).toStrictEqual({
      fractions: [
        { count: 1, total: 10000, value: 10000 },
        { count: 1, total: 5000, value: 5000 },
        { count: 1, total: 2000, value: 2000 },
        { count: 1, total: 500, value: 500 },
      ],
      remaining: 25,
      totalFractions: 4,
    });
    expect(result.current.isError).toBe(false);
  });
  it('submitValue should return correctly without remaining', () => {
    const { result } = renderHook(() => useInput('10000'));

    act(() => {
      result.current.submitValue();
    });

    expect(result.current.result).toStrictEqual({
      fractions: [{ count: 1, total: 10000, value: 10000 }],
      remaining: 0,
      totalFractions: 1,
    });
    expect(result.current.isError).toBe(false);
  });
});
