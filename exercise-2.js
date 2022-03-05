const incrementBtn = document.querySelector('#incBtn');
const decrementBtn = document.querySelector('#decBtn');
const counterField = document.querySelector('#inputField');

incrementBtn.addEventListener('click', () => {
  let num = Number(counterField.value);
  counterField.value = ++num;
});

decrementBtn.addEventListener('click', () => {
  let num = Number(counterField.value);
  counterField.value = --num;
});