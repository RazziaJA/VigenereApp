This app will allow a user to enter some plaintext and an encryption key, then apply a Vigenere cipher to produce and display ciphertext. The encryption process will be visualized using a Vigenere table.


Stories/Tasks:
[x] Setup project repository
    Details: Create a git repository with an initial folder structure / placeholder React app.
    Required Skills: git, React
[x] Implement Vigenere cipher
    Details: Implement a Javascript function that takes the plaintext and key and outputs ciphertext using a Vigenere cipher. Write some basic tests.
    Required Skills: git, Javascript
[x] Implement user interface
    Details: Add the interactive elements to the app: Text boxes for the plaintext and key and a label for the ciphertext. Ciphertext should update when either the plaintext or key changes.
    Required Skills: git, Javascript, React
[ ] Display Vigenere table
    Details: Add a grid to the app that displays the set of Caesar ciphers being used for the current key. It should have columns labeled A-Z and a row for each unique letter in the key. The cells in each row should be the column's letter shifted by the row's letter. The grid should update whenever the key changes.
    Required Skills: git, Javascript, React
[ ] Animation helper data
    Details: Provide access to data needed to animate a single step of the Vigenere process. This could be an update to the existing function or a new function. Minimum required data: the index of the plaintext character being encrypted and the index of the key character being used. May be more ergonomic to also provide: the plaintext, key, and ciphertext characters.
    Required Skills: git, Javascript
[ ] Animate encipherment process
    Details: Add an animation that runs whenever the plaintext or key changes. It should iterate through the plaintext characters and highlight the relevant row, column, and cell in the table. If time allows, limit the animation to only the changed/added characters in the plaintext rather than starting from the beginning each time.
    Required Skills: git, Javascript, React
[ ] UI Styling
    Details: Update the app's HTML and CSS so it looks good.
    Required Skills: git, UI design, HTML, CSS
[ ] Accessibility evaluation
    Details: Evaluate the app for accessibility. Verify the color palette has sufficient contrast, the page is navigable by screen reader, the inputs work with alternative input methods, etc.
    Required Skills: Accessibility testing

Setup project repo must be done first.
Implementing the cipher, UI, and table could happen in parallel.
Exposing the helper data depends on the cipher being done.
The animation, styling, and accessibility would happen sequentially after everything else.

      / cipher - helper \
setup - UI               - animate - styling - accessibility
      \ table           /