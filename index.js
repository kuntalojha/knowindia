import utsData from './districts/uts.js';
import statesData from './districts/states.js';
import IndiaData from './India.js';

export const states = () => {
  return statesData;
};

export const uts = () => {
  return utsData.uts;
};

export const INDIA = () => {
  return { states: states(), uts: uts() };
};

export const India = () => {
  return IndiaData;
};
export default { states, uts, India, INDIA };
