import { reverseString } from "./reverseString";

test('Reverse basic string', () => {
    expect(reverseString("testing")).toBe("gnitset")
});

test('Throw error for non-string parameter given', () => {
    expect(() => {
        reverseString();
      }).toThrow("Parameter must be string");
});