let firstNum = document.querySelector("#first");
let secondNum = document.querySelector("#second");
let sumBtn = document.querySelector("#btn");
let value = document.querySelector("#val");


function getGCD(n, m) {
  let num = n > m ? n : m 
  let gcd = 0;
  for(let i = 1; i <= num; i++) {
    if(num % i == 0 && num % i == 0) {
      gcd = i;
    }
  } 
  return gcd;
}

sumBtn.onclick = () => {
  value.innerText = getGCD(firstNum.value, secondNum.value);
};