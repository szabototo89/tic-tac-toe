const randomStep = function(isEmptyField) {
  return (fields) => {
    const emptyFields = fields.filter(isEmptyField);

    if (!emptyFields.length) return null;

    const randomIndex = Math.round(Math.random() * emptyFields.length);
    return emptyFields[randomIndex];
  };
};

export default randomStep;