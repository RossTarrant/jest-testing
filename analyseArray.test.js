import { analyseArray } from "./analyseArray";

test('Object returned', () => {
    expect(typeof(analyseArray([10,20,30,40,50]))).toBe('object');
});

test('Average property returns correct value', () => {
    expect(analyseArray([10,20,30,40,50]).average).toBe(30);
});

test('Min property returns correct value', () => {
    expect(analyseArray([10,20,30,40,50]).min).toBe(10);
});

test('Max property returns correct value', () => {
    expect(analyseArray([10,20,30,40,50]).max).toBe(50);
});

test('Length property returns correct value', () => {
    expect(analyseArray([10,20,30,40,50]).length).toBe(5);
});

test('String values not included in array', () => {
    expect(analyseArray(["ABC", "DEF", 10,20,30,40,50]).average).toBe(30);
});

test('No parameter provided', () => {
    expect(() => {
        analyseArray();
    }).toThrow("An array must be given as a parameter")
})

test('Empty array as parameter', () => {
    expect(() => {
        analyseArray([]);
    }).toThrow("Array must not be empty")
})