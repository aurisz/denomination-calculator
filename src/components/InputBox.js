import React from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label>Amount:</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter Amount Here..."
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
