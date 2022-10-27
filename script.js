
let subminbtn = document.getElementById('submit')
console.log(subminbtn)

subminbtn.addEventListener('click',
 submit)

 let one = document.getElementById('fname').value
 console.log('firstname :',one);
function submit(){

  let one = document.getElementById('fname').value
  console.log('firstname :',one);
  let one1 = document.getElementById('lname').value
  console.log('lastname :',one1);

  let second = document.getElementsByClassName('tdata')
  let second2 = document.getElementsByClassName('tdata2')
   console.log(second);

  second.innerText  = one;
  second2.innerText = one1;

}


