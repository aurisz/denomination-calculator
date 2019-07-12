import { useState } from 'react';

import { getFractions, validateInput } from '../utils';
import { rupiah } from '../data/denominations';

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

      if (validateInput(value)) {
        const fractionsResult = getFractions(value, rupiah);
        fractionsResult.isValidated = true;

        setResult(getFractions(value, rupiah));
        setError(false);
      } else {
        setError(true);
      }
    }
  };
};

export default useInput;
