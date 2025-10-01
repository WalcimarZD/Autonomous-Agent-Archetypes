const { soma } = require('../src/math');

describe('soma', () => {
  test('soma de dois números positivos', () => {
    expect(soma(2,3)).toBe(5);
  });

  test('trata NaN', () => {
    expect(() => soma(2, NaN)).toThrow();
  });
});