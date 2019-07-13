import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, error }) => {
  if (error) {
    return <h4>Invalid Input</h4>;
  }

  if (result === null) {
    return (
      <h4>Please insert valid amount (e.g: 18.215, Rp17500, Rp 17.500,00)</h4>
    );
  }

  return (
    <Fragment>
      {result.fractions.map((fraction, index) => (
        <div key={index}>
          <p>
            {fraction.count} x {fraction.value} = {fraction.total}
          </p>
        </div>
      ))}
      <p>Remaining: Rp.{result.remaining}</p>
    </Fragment>
  );
};

Display.propTypes = {
  error: PropTypes.bool,
  result: PropTypes.shape({
    fractions: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
  }),
};

Display.defaultProps = {
  error: false,
  result: null,
};

export default Display;
