import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ value, onChange, onSubmit }) => (
  <form id="inputBox" className="form-group" onSubmit={onSubmit}>
    <label htmlFor="amountInput">Amount:</label>
    <input
      type="text"
      id="amountInput"
      className="u-full-width"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Enter Amount Here... (e.g: 15000, Rp21.500,00)"
      autoComplete="off"
      aria-label="amount-input"
    />
  </form>
);

InputBox.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

InputBox.defaultProps = {
  value: '',
};

export default InputBox;
