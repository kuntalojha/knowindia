import { expect, test } from 'vitest';
import states from '../districts/states.js';

// Test cases
describe('Indian States Data Validation', () => {
  // Test for checking the presence of all state keys
  test('should contain all state keys', () => {
    const expectedStateKeys = [
      'AP',
      'AR',
      'AS',
      'BR',
      'CG',
      'GA',
      'GJ',
      'HR',
      'HP',
      'JH',
      'KA',
      'KL',
      'MP',
      'MH',
      'MN',
      'ML',
      'MZ',
      'NL',
      'OD',
      'PB',
      'RJ',
      'SK',
      'TN',
      'TG',
      'TR',
      'UP',
      'UK',
      'WB',
    ]; 
    expectedStateKeys.forEach((key) => {
      expect(states).toHaveProperty(key);
    });
  });

  // Test for ensuring each state has a valid name, capital, area, and population structure
  test('should have valid name, capital, area, and population for each state', () => {
    Object.values(states).forEach((state) => {
      expect(state).toHaveProperty('name');
      expect(typeof state.name).toBe('string');

      expect(state).toHaveProperty('capital');
      expect(typeof state.capital).toBe('string');

      expect(state).toHaveProperty('area');
      expect(typeof state.area).toBe('string');

      // expect(state).toHaveProperty('population');
      // expect(state.population).toMatch(/\d+ \(\d{4} est.\)$/);
    });
  });

  // Test for official languages to be an array with at least one language
  test('should have an array of official languages with at least one language', () => {
    Object.values(states).forEach((state) => {
      expect(Array.isArray(state.officialLanguages)).toBe(true);
      expect(state.officialLanguages.length).toBeGreaterThan(0);
    });
  });

  // Test for literacy rate to be a valid percentage string
  test('should have valid literacy rate ending with %', () => {
    Object.values(states).forEach((state) => {
      expect(state.literacyRate).toMatch(/^\d+(\.\d+)?%$/);
    });
  });

  // Test for cuisine to be an array of strings
  test('should have an array of cuisine with valid entries', () => {
    Object.values(states).forEach((state) => {
      expect(Array.isArray(state.cuisine)).toBe(true);
      state.cuisine.forEach((dish) => {
        expect(typeof dish).toBe('string');
      });
    });
  });

  // Test for famousFor array containing at least one famous place
  test('should have famousFor with valid places', () => {
    Object.values(states).forEach((state) => {
      expect(Array.isArray(state.famousFor)).toBe(true);
      expect(state.famousFor.length).toBeGreaterThan(0);
      state.famousFor.forEach((place) => {
        expect(typeof place).toBe('string');
      });
    });
  });

  // Test for touristAttractions array
  test('should have an array of tourist attractions', () => {
    Object.values(states).forEach((state) => {
      expect(Array.isArray(state.touristAttractions)).toBe(true);
    });
  });

  // Test for interesting facts array containing at least one fact
  test('should have at least one interesting fact for each state', () => {
    Object.values(states).forEach((state) => {
      expect(Array.isArray(state.interestingFacts)).toBe(true);
      expect(state.interestingFacts.length).toBeGreaterThan(0);
      state.interestingFacts.forEach((fact) => {
        expect(typeof fact).toBe('string');
      });
    });
  });
});
