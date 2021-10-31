import './App.css';
import {useState} from "react";

function getKeyIndex(plaintextIndex, keyLength) {
  if (keyLength <= 0) {
    return -1;
  }
  return plaintextIndex % keyLength;
}

function isLetter(c) {
  return /[a-zA-Z]/.test(c);
}

function getPlaceInAlphabet(c) {
  return c.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);
}

function getVigenereCharacterAt(index, plaintext, key) {
  var keyIndex = getKeyIndex(index, key.length);
  if (keyIndex === -1) {
    return '';
  }
  if (!isLetter(plaintext[index])) {
    return plaintext[index];
  }

  var newPlaceInAlpha = (getPlaceInAlphabet(plaintext[index]) + getPlaceInAlphabet(key[keyIndex])) % 26;
  var cipherLower = String.fromCharCode("a".charCodeAt(0) + newPlaceInAlpha);
  return plaintext[index] === plaintext[index].toUpperCase() ? cipherLower.toUpperCase() : cipherLower;
}

export function vigenere(plaintext, key) {
  var cipher = "";
  for (var i = 0; i < plaintext.length; ++i) {
    cipher += getVigenereCharacterAt(i, plaintext, key);
  }
  return cipher;
}

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