import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { currencyFormatter } from '../utils';

const Display = ({ result, isError }) => {
  if (isError) {
    return (
      <p>
        Invalid Input. Please try again using valid amount (e.g: 18.215,
        Rp17500, Rp 17.500,00){' '}
      </p>
    );
  }

  if (result === null) {
    return (
      <p>
        Simple React app to calculate how many rupiah notes needed to make that
        amount
      </p>
    );
  }

  return (
    <Fragment>
      {result.fractions.map((fraction, index) => (
        <div className="card" key={index}>
          <span>
            {fraction.count} x {fraction.value}
          </span>
          <span>Rp{currencyFormatter(fraction.total)}</span>
        </div>
      ))}
      {result.remaining !== 0 && (
        <div className="card">
          <strong>Remaining:</strong>{' '}
          <span>
            <em>Rp{result.remaining}</em>
          </span>
        </div>
      )}
    </Fragment>
  );
};

Display.propTypes = {
  isError: PropTypes.bool,
  result: PropTypes.shape({
    fractions: PropTypes.array.isRequired,
    remaining: PropTypes.number.isRequired,
  }),
};

Display.defaultProps = {
  isError: false,
  result: null,
};

export default Display;
