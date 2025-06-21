import {capitalize1st, reverse, calculate, shiftCipher, analyzeArray} from "./script.js";

test('capitalize first letter', () => {
    expect(capitalize1st('asdasd')).toBe('Asdasd');
});

test('reverse a string', () => {
    expect(reverse('asdasd')).toBe('dsadsa');
});

test('add, subtract, multiply, divide', () => {
    expect(calculate(-3, -4).add()).toBe(-7);
    expect(calculate(-3, -4).subtract()).toBe(1);
    expect(calculate(-3, -4).multiply()).toBe(12);
    expect(calculate(-3, -4).divide()).toBe(0.75);

    expect(() => calculate('three', 4).add()).toThrow('Invalid input: not a number');
    expect(() => calculate(4, 0).divide()).toThrow('Invalid operation: division by zero');
});

test('shift cipher', () => {
    expect(shiftCipher('./asDAsd', 3)).toBe('./dvGDvg');
    expect(shiftCipher('HeLLo', 3)).toBe('KhOOr');
    expect(shiftCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');

    expect(() => shiftCipher()).toThrow('No input: nothing to cipher');
    expect(() => shiftCipher('xyz')).toThrow('Invalid input: no valid shift key');
});

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        average: 4, min: 1, max: 8, length: 6
    });
    expect(() => analyzeArray()).toThrow('Invalid input: array required');
    expect(() => analyzeArray([])).toThrow('Invalid input: input is NaN');
});