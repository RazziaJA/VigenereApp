import './App.css';
import {useState} from "react";

/**
 * Gets the index of the character in the key to use to shift the plaintext character at the given plaintextIndex. Returns -1 if the key is empty.
 * 
 * @param plaintextIndex The index of the character in the plaintext being processed.
 * @param keyLength The length of the key.
 * @returns The index of the character to use in the key if the key is non-empty, -1 otherwise.
 */
function getKeyIndex(plaintextIndex, keyLength) {
  if (keyLength <= 0) {
    return -1;
  }
  return plaintextIndex % keyLength;
}

/**
 * Checks if the given character is an uppercase or lowercase letter in the English alphabet (A-Z).
 * 
 * @param c The character to check.
 * @returns True if the character is a letter, false otherwise.
 */
function isLetter(c) {
  return /[a-zA-Z]/.test(c);
}

/**
 * Calculates the given character's place in the alphabet, starting from 'A' = 0. Assumes the character is a letter.
 * 
 * @param c The character to index.
 * @returns The character's place in the alphabet.
 */
function getPlaceInAlphabet(c) {
  return c.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
}


/**
 * Applies a Vigenere cipher to the character in the given plaintext at the given index, using the given key.
 * 
 * @param index The index of the character to shift.
 * @param plaintext The plaintext.
 * @param key The key.
 * @returns The shifted character.
 */
function getVigenereCharacterAt(index, plaintext, key) {
  var keyIndex = getKeyIndex(index, key.length);
  if (keyIndex === -1) {
    return '';
  }
  if (!isLetter(plaintext[index]) || !isLetter(key[keyIndex])) {
    return plaintext[index];
  }

  var newPlaceInAlpha = (getPlaceInAlphabet(plaintext[index]) + getPlaceInAlphabet(key[keyIndex])) % 26;
  var cipherLower = String.fromCharCode("a".charCodeAt(0) + newPlaceInAlpha);
  return plaintext[index] === plaintext[index].toUpperCase() ? cipherLower.toUpperCase() : cipherLower;
}

/**
 * Applies a Vigenere cipher to the given plaintext using the given key.
 * 
 * @param plaintext The plaintext.
 * @param key The key.
 * @returns The ciphertext.
 */
export function vigenere(plaintext, key) {
  var cipher = "";
  for (var i = 0; i < plaintext.length; ++i) {
    cipher += getVigenereCharacterAt(i, plaintext, key);
  }
  return cipher;
}

/**
 * Creates a React component with two inputs (for plaintext and key) and a label (for ciphertext).
 * 
 * @returns The React component.
 */
function App() {
  const [plaintext, setPlainText] = useState("");
  const [key, setKey] = useState("");

  return (
    <div className="App">
      <label>
        Plaintext: 
        <input value={plaintext} onChange={e => setPlainText(e.target.value) }/>
      </label>
      <br/>
      <label>
        Key:
        <input value={key} onChange={e => setKey(e.target.value) } />
      </label>
      <br/>
      <label>Ciphertext: {vigenere(plaintext, key)}</label>
    </div>
  );
}

export default App;