const colorInput = document.querySelector('#colorInput');
const colorBox = document.querySelector('#colorBox');

colorInput.addEventListener('input', (event) => {
  // colorBox.style.backgoundColor = event.target.value;
  const inputColor = event.target.value;
  colorBox.setAttribute('style', `background-color: ${inputColor}`);

})