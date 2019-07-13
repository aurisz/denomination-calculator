import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ value, onChange, onSubmit }) => (
  <form className="form-group" onSubmit={onSubmit}>
    <label htmlFor="amountInput">Amount:</label>
    <input
      type="text"
      id="amountInput"
      className="u-full-width"
      value={value}
      onChange={onChange}
      placeholder="Enter Amount Here... (e.g: 15000, Rp21.500,00)"
    />
    {/* <input type="submit" value="Submit" /> */}
  </form>
);

InputBox.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
