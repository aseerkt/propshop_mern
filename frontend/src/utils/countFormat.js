export const formatCount = (e, max) => {
  if (e.target.value === '') return 0;
  const value = parseInt(e.target.value);
  const digit = value.toString().length;

  const maxDigit = max.toString().length;

  if (value < 0) {
    return '0';
  }

  if (digit > maxDigit) {
    return parseInt(value.toString().slice(0, maxDigit));
  }
  if (value > max) {
    return max;
  }

  return value;
};
