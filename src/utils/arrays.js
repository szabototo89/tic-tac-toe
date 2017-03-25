export const flatten = (array) => {
  if (!array) return [];

  return array.reduce((previousValue, currentValue) => [
    ...previousValue, ...currentValue
  ], []);  
};

export const update = (array) => (index, value) => {
  const isFunction = value && value.constructor === Function;

  return [
    ...array.slice(0, index),
    isFunction ? value(array[index]) : value,
    ...array.slice(index + 1)
  ];
};

export const isEmpty = (array) => {
  return array.length === 0;
};