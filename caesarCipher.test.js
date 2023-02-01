import { caesarCipher } from "./caesarCipher";

test('Lowercase plaintext with key of 5', () => {
    expect(caesarCipher("apple", 5)).toBe("fuuqj");
})

test('Uppercase plaintext with key of 5', () => {
    expect(caesarCipher("APPLE", 5)).toBe("FUUQI");
})

test('Mixed case plaintext with key of 5', () => {
    expect(caesarCipher("aPpLe", 5)).toBe("fUuQi");
})

test('Mixed letters and numbers with key of 5', () => {
    expect(caesarCipher("abc123", 5)).toBe("fgh123");
})

test('Only numbers with key of 5 remain the same', () => {
    expect(caesarCipher(1234, 5)).toBe(1234);
})

test('Keys of greater than 26 accepted and wrap around correctly', () => {
    expect(caesarCipher("apple", 31)).toBe("fuuqi");
})

test('Keys of 0 does not change plaintext', () => {
    expect(caesarCipher("apple", 0)).toBe("apple");
})

test('Keys of less than 0 throws error', () => {
    expect( () => {
        caesarCipher("apple", -2);
    }).toThrow("Keys must be greater than or equal to 0")
})

test('Letters wrap around correctly', () => {
    expect(caesarCipher("buzz", 4)).toBe("fydd");
})

test('Capital letters wrap around correctly', () => {
    expect(caesarCipher("BUZZ", 4)).toBe("FYDD");
})

test('Punctuation is ignored', () => {
    expect(caesarCipher("abc!!!", 4)).toBe("efg!!!");
})