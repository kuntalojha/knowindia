const { expect, test, describe } = require('vitest');
const uts = require('../districts/uts.js');

const unionTerritories = uts.uts;

// Test cases
describe('Union Territories Data Validation', () => {
  // Test for checking the presence of all Union Territories
  test('should contain all UT keys', () => {
    const expectedUTKeys = ['AN', 'CH', 'DN', 'LD', 'DL', 'PR', 'JK', 'LA'];
    expectedUTKeys.forEach((key) => {
      expect(unionTerritories).toHaveProperty(key);
    });
  });

  // Test for ensuring each UT has a valid name, capital, area, and population structure
  test('should have valid name, capital, area, and population for each UT', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(ut).toHaveProperty('name');
      expect(typeof ut.name).toBe('string');

      expect(ut).toHaveProperty('capital');
      expect(typeof ut.capital).toBe('string');

      expect(ut).toHaveProperty('area');
      expect(typeof ut.area).toBe('string');

      // Uncomment this to include population test
      // expect(ut).toHaveProperty('population');
      // expect(ut.population).toMatch(/\d+ \(\d{4} est.\)$/);
    });
  });

  // Test for official languages to be an array with at least one language
  test('should have an array of official languages with at least one language', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(Array.isArray(ut.officialLanguages)).toBe(true);
      expect(ut.officialLanguages.length).toBeGreaterThan(0);
    });
  });

  // Test for literacy rate to be a valid percentage string
  test('should have valid literacy rate ending with %', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(ut.literacyRate).toMatch(/^\d+(\.\d+)?%$/);
    });
  });

  // Test for cuisine to be an array of strings
  test('should have an array of cuisine with valid entries', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(Array.isArray(ut.cuisine)).toBe(true);
      ut.cuisine.forEach((dish) => {
        expect(typeof dish).toBe('string');
      });
    });
  });

  // Test for famousFor array containing at least one famous place
  test('should have famousFor with valid places', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(Array.isArray(ut.famousFor)).toBe(true);
      expect(ut.famousFor.length).toBeGreaterThan(0);
      ut.famousFor.forEach((place) => {
        expect(typeof place).toBe('string');
      });
    });
  });

  // Test for tourist attractions array
  test('should have an array of tourist attractions', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(Array.isArray(ut.touristAttractions)).toBe(true);
    });
  });

  // Test for interesting facts array containing at least one fact
  test('should have at least one interesting fact for each UT', () => {
    Object.values(unionTerritories).forEach((ut) => {
      expect(Array.isArray(ut.interestingFacts)).toBe(true);
      expect(ut.interestingFacts.length).toBeGreaterThan(0);
      ut.interestingFacts.forEach((fact) => {
        expect(typeof fact).toBe('string');
      });
    });
  });
});

// import { expect, test } from 'vitest';
// import  uts  from '../districts/uts.js';

// const unionTerritories = uts.uts;

// // Test cases
// describe('Union Territories Data Validation', () => {
//   // Test for checking the presence of all Union Territories
//   test('should contain all UT keys', () => {
//     const expectedUTKeys = ['AN', 'CH', 'DN', 'LD', 'DL', 'PR', 'JK', 'LA'];
//     expectedUTKeys.forEach((key) => {
//       expect(unionTerritories).toHaveProperty(key);
//     });
//   });

//   // Test for ensuring each UT has a valid name, capital, area, and population structure
//   test('should have valid name, capital, area, and population for each UT', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(ut).toHaveProperty('name');
//       expect(typeof ut.name).toBe('string');

//       expect(ut).toHaveProperty('capital');
//       expect(typeof ut.capital).toBe('string');

//       expect(ut).toHaveProperty('area');
//       expect(typeof ut.area).toBe('string');

//       // expect(ut).toHaveProperty('population');
//       // expect(ut.population).toMatch(/\d+ \(\d{4} est.\)$/);

//     });
//   });

//   // Test for official languages to be an array with at least one language
//   test('should have an array of official languages with at least one language', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(Array.isArray(ut.officialLanguages)).toBe(true);
//       expect(ut.officialLanguages.length).toBeGreaterThan(0);
//     });
//   });

//   // Test for literacy rate to be a valid percentage string
//   test('should have valid literacy rate ending with %', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(ut.literacyRate).toMatch(/^\d+(\.\d+)?%$/);
//     });
//   });

//   // Test for cuisine to be an array of strings
//   test('should have an array of cuisine with valid entries', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(Array.isArray(ut.cuisine)).toBe(true);
//       ut.cuisine.forEach((dish) => {
//         expect(typeof dish).toBe('string');
//       });
//     });
//   });

//   // Test for famousFor array containing at least one famous place
//   test('should have famousFor with valid places', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(Array.isArray(ut.famousFor)).toBe(true);
//       expect(ut.famousFor.length).toBeGreaterThan(0);
//       ut.famousFor.forEach((place) => {
//         expect(typeof place).toBe('string');
//       });
//     });
//   });

//   // Test for touristAttractions array
//   test('should have an array of tourist attractions', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(Array.isArray(ut.touristAttractions)).toBe(true);
//     });
//   });

//   // Test for interesting facts array containing at least one fact
//   test('should have at least one interesting fact for each UT', () => {
//     Object.values(unionTerritories).forEach((ut) => {
//       expect(Array.isArray(ut.interestingFacts)).toBe(true);
//       expect(ut.interestingFacts.length).toBeGreaterThan(0);
//       ut.interestingFacts.forEach((fact) => {
//         expect(typeof fact).toBe('string');
//       });
//     });
//   });
// });
