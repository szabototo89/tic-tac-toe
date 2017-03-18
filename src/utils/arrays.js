export const flatten = (array) => array.reduce((previousValue, currentValue) => [
  ...previousValue, ...currentValue
], []);