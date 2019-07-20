import React from 'react';

import './styles/app.css';

import { useInput } from './hooks/useInput';
import InputBox from './components/InputBox';
import Display from './components/Display';

const App = () => {
  const { submitValue, value, setValue, result, isError } = useInput('');

  const handleSubmit = event => {
    event.preventDefault();

    submitValue();
  };

  return (
    <div className="container u-full-width">
      <h3>Rupiah Denomination Calculator</h3>

      <InputBox value={value} onChange={setValue} onSubmit={handleSubmit} />

      <Display isError={isError} result={result} />
    </div>
  );
};

export default App;
