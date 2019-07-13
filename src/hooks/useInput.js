import { useState } from 'react';

import { getFractions, validateInput, formatInput } from '../utils';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    result,
    error,
    onChange: event => {
      setValue(event.target.value);
    },
    onSubmit: event => {
      event.preventDefault();

      const isValidated = validateInput(value);

      if (isValidated) {
        const formattedInput = formatInput(value);
        const fractionResult = getFractions(formattedInput);
        setResult(fractionResult);
        setError(false);
      } else {
        setError(true);
      }

      if (value === '') {
        setResult(null);
        setError(false);
      }
    },
  };
};

export default useInput;
