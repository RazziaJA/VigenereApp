import {vigenere} from './App';

test('Encrypts "ATTACKATDAWN" with key "LEMON" correctly.', () => {
  expect(vigenere("ATTACKATDAWN", "LEMON")).toBe("LXFOPVEFRNHR");
});

test('Key "A" has no effect.', () => {
  expect(vigenere("foobar", "A")).toBe("foobar");
});

test('Non-alphabet characters are unchanged.', () => {
  expect(vigenere("aa!", "b")).toBe("bb!");
});

test('Non-alphabet key characters leave plaintext unchanged.', () => {
  expect(vigenere("aaa", "2!b")).toBe("aab");
})