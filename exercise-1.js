const counterBtn = document.querySelector('#counterBtn');

counterBtn.addEventListener('click', ()=> {
  let num = Number(counterBtn.innerText);
  // counterBtn.innerText = num+1;
  counterBtn.innerText = ++num;

})