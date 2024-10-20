const utsData = require('./districts/uts.js');
const statesData = require('./districts/states.js');
const IndiaData = require('./India.js');

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

module.exports = { states, uts, India, INDIA };

// import utsData from './districts/uts.js';
// import statesData from './districts/states.js';
// import IndiaData from './India.js';

// export const states = () => {
//   return statesData;
// };

// export const uts = () => {
//   return utsData.uts;
// };

// export const INDIA = () => {
//   return { states: states(), uts: uts() };
// };

// export const India = () => {
//   return IndiaData;
// };
// export default { states, uts, India, INDIA };
