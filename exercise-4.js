const characterInputField = document.querySelector('#charInput');
const charCountSpan = document.querySelector('#charCount');


// 'chage' event after input loses focus
// characterInputField.addEventListener('change', (event)=>{
//   console.log(event.target.value)
// })

characterInputField.addEventListener('input', (event)=>{
  // console.log(event.target.value)
  charCountSpan.innerText = event.target.value.length;
})

