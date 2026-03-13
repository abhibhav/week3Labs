const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator basic operations', () => {
  test('add 2 + 3 = 5', () => {
    expect(add(2,3)).toBe(5);
  });

  test('subtract 10 - 4 = 6', () => {
    expect(subtract(10,4)).toBe(6);
  });

  test('multiply 45 * 2 = 90', () => {
    expect(multiply(45,2)).toBe(90);
  });

  test('divide 20 / 5 = 4', () => {
    expect(divide(20,5)).toBe(4);
  });

  // Edge cases
  test('division by zero throws', () => {
    expect(() => divide(1,0)).toThrow('division by zero');
  });

  test('works with negative numbers and floats', () => {
    expect(add(-1, 2.5)).toBeCloseTo(1.5);
    expect(subtract(5.5, 2)).toBeCloseTo(3.5);
    expect(multiply(-3, -2)).toBe(6);
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });
});
