import {add, subtract, divide, multiply} from './calculator';

test('Add two integers', () => {
    expect(add(2,3)).toBe(5);
})

test('Add two negative numbers', () => {
    expect(add(-2,-3)).toBe(-5);
})

test('Throw error for non-integer/float', () => {
    expect(() => {
        add("A","B");
    }).toThrow("Parameter should be integer")
})

test('Subtract two integers', () => {
    expect(subtract(10,3)).toBe(7);
})

test('Subtract two negative numbers', () => {
    expect(subtract(-2,-3)).toBe(1);
})

test('Throw error for non-integer/float', () => {
    expect(() => {
        subtract("A","B");
    }).toThrow("Parameter should be integer")
})

test('Divide two integers', () => {
    expect(divide(10,2)).toBe(5);
})

test('Divide two negative numbers', () => {
    expect(divide(-10,-2)).toBe(5);
})

test('Divide one negative number and one positive number', () => {
    expect(divide(-10,5)).toBe(-2);
})

test('Throw error for non-integer/float', () => {
    expect(() => {
        divide("A","B");
    }).toThrow("Parameter should be integer")
})

test('Multiply two integers', () => {
    expect(multiply(10,2)).toBe(20);
})

test('Multiply two negative numbers', () => {
    expect(multiply(-10,-2)).toBe(20);
})

test('Multiply one negative number and one positive number', () => {
    expect(multiply(-10,5)).toBe(-50);
})

test('Throw error for non-integer/float', () => {
    expect(() => {
        multiply("A","B");
    }).toThrow("Parameter should be integer")
})
