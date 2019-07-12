export const validateInput = input => {
  const regex = /(?=.*?\d)(^Rp?.|^0+|^\d)(([1-9]\d{0,2}(\.\d{3})*)|\d+)?(,\d{1,2})?$/gi;
  return regex.test(input);
};

const formatNumber = input => {
  // regex to get numeric from input string
  const extractedNumber = input.replace(/[^0-9,-]+/g, '');

  // parseFloat only accept dot decimal separator
  return parseFloat(extractedNumber.replace(',', '.'));
};

export const getFractions = (input = 0, denominations = []) => {
  let count = 0;
  let totalFractions = 0;
  let amount = formatNumber(input);
  const fractions = [];

  denominations.forEach(denom => {
    // Counting number of denomination notes
    count = parseInt(amount / denom, 10);

    // Store the fraction if count is not zero
    if (count >= 1) {
      fractions.push({ count, value: denom, total: count * denom });
    }

    // Find total number of fractions
    totalFractions += count;
    // Find remaining amount
    amount %= denom;
  });

  return {
    totalFractions,
    remaining: amount,
    fractions
  };
};

export default getFractions;
