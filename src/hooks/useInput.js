import { useState } from 'react';

import { getFractions, validateInput, formatInput } from '../utils';

export const useInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const [result, setResult] = useState(null);
  const [isError, setIsError] = useState(false);

  return {
    value,
    setValue,
    resetValue: () => setValue(''),
    result,
    isError,
    submitValue: () => {
      const isValidated = validateInput(value);

      if (isValidated) {
        const formattedInput = formatInput(value);
        const fractionResult = getFractions(formattedInput);
        setResult(fractionResult);
        setIsError(false);
      } else {
        setIsError(true);
      }

      if (value === '') {
        setResult(null);
        setIsError(false);
      }
    },
  };
};

export default useInput;
