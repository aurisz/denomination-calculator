import {
  validateInput,
  formatInput,
  getFractions,
  currencyFormatter,
} from './index';
import { validInputs, invalidInputs } from './exampleInputs';

describe('validate input', () => {
  validInputs.forEach(input => {
    it('should return true', () => {
      expect(validateInput(input)).toBe(true);
    });
  });
  invalidInputs.forEach(input => {
    it('should return false', () => {
      expect(validateInput(input)).toBe(false);
    });
  });

  it('should return false if there is no argument', () => {
    expect(validateInput()).toBe(false);
  });
});

describe('format input', () => {
  it('should converted to float correctly', () => {
    expect(formatInput('18.215')).toBe(18215);
    expect(formatInput('Rp17500')).toBe(17500);
    expect(formatInput('Rp17.500,00')).toBe(17500.0);
    expect(formatInput('Rp 120.325')).toBe(120325);
    expect(formatInput('005.000')).toBe(5000);
    expect(formatInput('001000')).toBe(1000);
  });
  it('should return NaN', () => {
    expect(formatInput()).toBe(NaN);
    expect(formatInput('word')).toBe(NaN);
  });
});

describe('calculate fractions amount', () => {
  it('should return object type', () => {
    expect(typeof getFractions(15000)).toBe('object');
  });
  it('should return objects', () => {
    expect(getFractions(15000)).toStrictEqual({
      totalFractions: 2,
      remaining: 0,
      fractions: [
        { count: 1, value: 10000, total: 10000 },
        { count: 1, value: 5000, total: 5000 },
      ],
    });
  });
  it('should return null', () => {
    expect(getFractions(true)).toBe(null);
    expect(getFractions()).toBe(null);
    expect(getFractions('')).toBe(null);
    expect(getFractions('Rp 17500')).toBe(null);
  });
});

describe('currency formatter', () => {
  it('should formatted correctly with fractions', () => {
    expect(currencyFormatter(13965)).toBe('13,965.00');
  });
});
