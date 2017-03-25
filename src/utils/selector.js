export default function selector(field) {
  return (state) => state && state[field];
};