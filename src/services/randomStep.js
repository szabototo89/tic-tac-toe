const randomStep = (fields) => {
  const isFieldEmpty = ({ field }) => field && field.owner === null;
  const emptyFields = fields.map((field, index) => ({ field, index }))
                            .filter(isFieldEmpty)
                            .map(({ index }) => index);

  if (emptyFields.length === 0) return null;

  const index = Math.floor(Math.random() * emptyFields.length);
  return emptyFields[index];
};

export default randomStep;