const inputField = document.querySelector('#inputField');
const encodeBtn = document.querySelector('#encodeBtn');
const decodeBtn = document.querySelector('#decodeBtn');
const resultField = document.querySelector('#resultField');

/* <input type="text" id="inputField">
<br>
<button id="encodeBtn">Encode</button>
<button id="decodeBtn">Decode</button>
<br>
<input type="text" id="resultField"> */


encodeBtn.addEventListener('click', () => {
  resultField.value = encodeURIComponent(inputField.value);
});

decodeBtn.addEventListener('click', () => {
  resultField.value = decodeURIComponent(inputField.value);
});