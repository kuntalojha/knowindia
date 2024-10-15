import utsData from './districts/uts.js';
import statesData from './districts/states.js';
import IndiaData from './India.js';

const states = () => {
  return statesData;
};

const uts = () => {
  return utsData.uts;
};

const INDIA = () => {
  return { states: states(), uts: uts() };
};

const India = () => {
  return IndiaData;
};
export default { states, uts, India, INDIA };

console.log(India);
console.log(INDIA);
console.log(states);
const Delhi = uts().DL;
console.log(Delhi);
console.log(uts());
